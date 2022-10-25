import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '../machines.model';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  @Input()
  machinesList: MachineStatus[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
