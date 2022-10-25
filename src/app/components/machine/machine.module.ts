import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine.component';

@NgModule({
  declarations: [
    MachineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachineComponent
  ]
})
export class MachineModule { }
