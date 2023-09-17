import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:
    [
      MatToolbarModule,
      MatButtonModule,
      MatGridListModule,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatCardModule
  ]
})
export class MaterialModulesModule { }
