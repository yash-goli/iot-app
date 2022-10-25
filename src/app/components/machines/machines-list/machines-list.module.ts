import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesListComponent } from './machines-list.component';
import { MachineModule } from '../../machine/machine.module';

@NgModule({
  declarations: [
    MachinesListComponent
  ],
  imports: [
    CommonModule,
    MachineModule
  ],
  exports: [
    MachinesListComponent
  ]
})
export class MachinesListModule { }
