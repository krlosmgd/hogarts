import { Character } from './../../../models/character';
import { MatSortModule } from '@angular/material/sort';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatTableDataSource } from '@angular/material/table';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  const dataSourceMock: Character[] = [{
      name: 'Mock',
      dateOfBirth: new Date('01-07-1995'),
      image: '',
      patronus: ''
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSortModule ],
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataSource = new MatTableDataSource(dataSourceMock);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.displayedHeader.length).toBe(4);
    expect(component).toBeTruthy();
  });

});
