import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseComponent } from './components/house/house.component';

const routes: Routes = [
  {
    path: 'houses',
    component: HouseComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: '*',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }