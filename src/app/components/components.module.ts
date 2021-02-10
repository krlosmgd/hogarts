import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house/house.component';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { studentsListReducer } from './house/store/houses.reducer';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TableComponent } from './shared/table/table.component';
import { userRegisterReducer } from './students/store/students.reducer';

const IMPORTS_MATERIAL = [
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatBadgeModule,
  MatIconModule
];
@NgModule({
  declarations: [HouseComponent, StudentsComponent, TeachersComponent, TableComponent],
  imports: [
    IMPORTS_MATERIAL,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('houseCharacters', studentsListReducer),
    StoreModule.forFeature('userRegister', userRegisterReducer),
  ]
})
export class ComponentsModule { }
