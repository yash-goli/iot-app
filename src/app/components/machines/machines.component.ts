import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { MachineStatus } from './machines.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  machinesList: MachineStatus[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMachines().subscribe(({data}) => {
      this.machinesList = data;
    });
  }

}
