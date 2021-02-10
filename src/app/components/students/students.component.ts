import { Character } from './../../models/character';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from './services/students.service';
import { Store } from '@ngrx/store';
import * as studentsAction from './store/students.action';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<any>;
  public dataSourceNewRegister: MatTableDataSource<any>;
  public showAddStudent: boolean;
  public registerForm: FormGroup;
  public userRegister: Character[];
  public userRegisterLength: number;
  public fileToUpload: File = null;
  public urlPhotoUserRegister: string | ArrayBuffer;
  private unsubscribe$ = new Subject();
  @ViewChild(MatTabGroup, {read: MatTabGroup}) matTabGroup: MatTabGroup;
  constructor(private studentsService: StudentsService, private store: Store<{userRegister: Character[]}>) {
    this.InitializeRegisterForm();
    this.getStudentsList();
    this.getUserRegistered();
    this.getNewRegister();
  }

  ngOnInit(): void {}

  ngAfterViewInit():void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /*
   * @summary init user registered and table
   */
  private getUserRegistered(): void{
    this.userRegister = this.studentsService.getUserRegister();
    this.userRegisterLength = this.userRegister?.length;
    if(this.userRegister) {
      this.dispachUserRegister(this.userRegister);
      this.initTableDataSourceNewRegister(this.userRegister);
    }
  }

  /*
   * @summary initialize register form
   */
  private InitializeRegisterForm(): void{
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfbirth: new FormControl('', Validators.required),
      patronus: new FormControl('', Validators.required),
      photo: new FormControl('')
    })
  }

  /*
   * @summary Dispatch user register action
   * @param  {Character[]} userRegister
   */
  private dispachUserRegister(userRegister: Character[]): void{
    this.store.dispatch(studentsAction.userRegister({userRegister: userRegister}));
  }

  /*
   * @summary get student list and initialize table
   */
  private getStudentsList(): void{
    this.studentsService.getStudents().pipe(takeUntil(this.unsubscribe$)).subscribe(res=> {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  /*
   * @summary Subscribe to a new register action
   */
  private getNewRegister(): void{
    this.store.select('userRegister').pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.initTableDataSourceNewRegister(res);
    });
  }

  /*
   * @summary Initialize data source new register
   * @param  {Character[]} userRegister
   */
  private initTableDataSourceNewRegister(userRegister: Character[]): void{
    this.dataSourceNewRegister = new MatTableDataSource(userRegister);
  }

  /*
   * @summary save a new register in the localStorage
   */
  public saveRegisterForm(): void {
    if(this.registerForm.valid) {

      const data: Character[] = [{
        name: this.registerForm.get('name').value,
        image: this.urlPhotoUserRegister,
        dateOfBirth : this.registerForm.get('dateOfbirth').value,
        patronus : this.registerForm.get('patronus').value
      }];

      const userRegistered: Character[] = this.studentsService.getUserRegister();

      if(userRegistered) {
        data.push(...userRegistered)
        this.studentsService.saveUser(data);
      }else{
        this.studentsService.saveUser(data);
      }

      this.dispachUserRegister(data);
      this.registerForm.reset();
      setTimeout(()=>{
        this.matTabGroup.selectedIndex = 1;
      },250);
    }
  }

  /*
   * @summary Upload photo
   * @param  {} $event
   */
  public uploadImage($event): void{
    let reader = new FileReader();
    reader.readAsDataURL($event[0]);
    reader.onload = (event) => {
      this.urlPhotoUserRegister = event.target.result;
    }
  }

  /*
   * @summary get form control from from group
   * @param  {string} key
   */
  public getFormControl(key: string): AbstractControl{
    return this.registerForm.get(key);
  }

}
