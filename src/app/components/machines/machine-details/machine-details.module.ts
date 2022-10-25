import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineDetailsComponent } from './machine-details.component';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MachineDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbOffcanvasModule
  ],
  exports: [
    MachineDetailsComponent
  ]
})
export class MachineDetailsModule { }
