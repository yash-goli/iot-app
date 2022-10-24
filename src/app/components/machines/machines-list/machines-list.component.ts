import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { MachineStatus, Status } from '../machines.model';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  @Input()
  machinesList: MachineStatus[] = [];

  public get Status(): typeof Status {
    return Status; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
