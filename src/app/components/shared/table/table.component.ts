import { MatTableDataSource } from '@angular/material/table';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() displayedHeader : string[];
  @Input() dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.displayedHeader = ['image','name','patronus','age'];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
  }

  public calculateAge(birthdate: Date) {
    return moment().diff(birthdate, 'years') ? moment().diff(birthdate, 'years') : 'N/A';
  }

}
