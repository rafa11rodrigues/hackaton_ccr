import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AngularMaterialModule { }
