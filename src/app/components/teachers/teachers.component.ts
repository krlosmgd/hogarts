import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TeachersService } from './services/teachers.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  public dataSource: MatTableDataSource<any>;
  private unsubscribe$ = new Subject();

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.getStaff().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
