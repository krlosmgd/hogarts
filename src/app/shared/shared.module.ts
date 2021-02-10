import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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

const MATERIAL_MODULES = [
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  exports:[
    ReactiveFormsModule,
    CommonModule,
    MATERIAL_MODULES
  ]
})
export class SharedModule { }
