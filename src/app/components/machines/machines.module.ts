import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines.component';
import { MachinesListModule } from './machines-list/machines-list.module';
import { MachinesMapModule } from './machines-map/machines-map.module';
import { MachineModule } from '../machine/machine.module';
import { MachineDetailsModule } from './machine-details/machine-details.module';

@NgModule({
  declarations: [
    MachinesComponent
  ],
  imports: [
    CommonModule,
    MachinesListModule,
    MachinesMapModule,
    MachineModule,
    MachineDetailsModule
  ],
  exports: [
    MachinesComponent
  ]
})
export class MachinesModule { }
