import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesMapComponent } from './machines-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    MachinesMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
  ],
  exports: [
    MachinesMapComponent
  ]
})
export class MachinesMapModule { }
