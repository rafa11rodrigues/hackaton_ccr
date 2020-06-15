import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { SulaChatComponent } from './speak/sula-chat.component';
import { RouterModule } from '@angular/router';
import { BackHeaderComponent } from './back-header/back-header.component';

@NgModule({
  declarations: [
    MapComponent,
    SulaChatComponent,
    BackHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    GoogleMapsModule,
  ],
  exports: [
    RouterModule,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
