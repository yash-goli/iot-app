import { Component, Input, OnInit } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { MachineDetailsComponent } from '../machines/machine-details/machine-details.component';
import { MachineStatus, Status } from '../machines/machines.model';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  @Input()
  machine!: MachineStatus;

  public get Status(): typeof Status {
    return Status; 
  }

  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) { 
    config.position = 'end';
  }

  ngOnInit(): void {
  }

  open() {
		const offcanvasRef = this.offcanvasService.open(MachineDetailsComponent);
		(offcanvasRef.componentInstance as MachineDetailsComponent).id = this.machine.id;
	}


}
