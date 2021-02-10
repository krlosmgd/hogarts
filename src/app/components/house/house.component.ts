import { Observable, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Character } from 'src/app/models/character';
import { HouseService } from './services/house.service';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import * as action from './store/houses.action';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit, OnDestroy {

  public characters$: Observable<Character[]>;
  public housesList$: Observable<string[]>;
  public houseForm: FormGroup;
  public dataSource: MatTableDataSource<any>;
  private unsubscribe$ = new Subject();

  constructor(private houseService: HouseService, private store: Store<{houseCharacters: Character[]}>) {
    this.housesList$ = this.houseService.defaultHouses();
    this.characters$ = this.store.select('houseCharacters');
  }

  ngOnInit(): void {
    this.initHouseForm();
    this.initTable();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /*
   * @summary dispath students list action
   * @param  {Character[]} characters
   */
  private dispachStudentsList(characters: Character[]): void{
    this.store.dispatch(action.houseCharacters({studentsList: characters}));
  }

  /*
   * @summary initialize selector by houses.
   */
  private initHouseForm(): void{
    this.houseForm = new FormGroup({
      house: new FormControl('', Validators.required)
    });
  }

  /*
   * @summary initialize table
   */
  private initTable(): void{
    this.characters$.pipe(takeUntil(this.unsubscribe$)).subscribe((characters: Character[]) => {
        this.dispachStudentsList(characters);
        this.dataSource = new MatTableDataSource(characters);
    });
  }

  /*
   * @summary get form control from from group
   * @param  {string} key
   */
  public getFormControl(key: string): AbstractControl{
    return this.houseForm.get(key);
  }

  /*
   * @summary get students by house name
   * @param  {string} key
   */
  public getStudentsByHouse(house: string): void{
    this.characters$ = this.houseService.getStudentsByHouse(house);
    this.initTable();
  }

}
