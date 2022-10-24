import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines.component';
import { MachinesListModule } from './machines-list/machines-list.module';
import { MachinesMapModule } from './machines-map/machines-map.module';

@NgModule({
  declarations: [
    MachinesComponent
  ],
  imports: [
    CommonModule,
    MachinesListModule,
    MachinesMapModule
  ],
  exports: [
    MachinesComponent
  ]
})
export class MachinesModule { }
