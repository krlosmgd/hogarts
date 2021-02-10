import { NgModule } from '@angular/core';
import { HouseComponent } from './house/house.component';
import { StoreModule } from '@ngrx/store';
import { studentsListReducer } from './house/store/houses.reducer';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TableComponent } from './shared/table/table.component';
import { userRegisterReducer } from './students/store/students.reducer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HouseComponent, StudentsComponent, TeachersComponent, TableComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('houseCharacters', studentsListReducer),
    StoreModule.forFeature('userRegister', userRegisterReducer),
  ]
})
export class ComponentsModule { }
