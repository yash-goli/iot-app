import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesListComponent } from './machines-list.component';

@NgModule({
  declarations: [
    MachinesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachinesListComponent
  ]
})
export class MachinesListModule { }
