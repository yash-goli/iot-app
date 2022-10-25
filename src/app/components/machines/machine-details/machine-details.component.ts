import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import { MachineDetails, MachineEvent, Status } from '../machines.model';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {
  @Input() id!: string;

  machineDetails!: MachineDetails;

  events: MachineEvent[] = [];

  years: number[] = [];

  public get Status(): typeof Status {
    return Status; 
  }

  constructor(public activeOffcanvas: NgbActiveOffcanvas, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMachine(this.id).subscribe(({data}) => {
      this.machineDetails = data;

      this.events = [...this.machineDetails.events];

      this.years = data.events.map(({timestamp}) => {
        return this.getYear(timestamp);
      }).reduce((acc: number[], curr: number) => {
        if (!acc.includes(curr)) {
          acc.push(curr);
        }
        return acc;
      }, []);
    });
  }

  handleChange($event: Event) {
    const value = ($event.target as HTMLSelectElement).value;

    this.events = value ? [...this.machineDetails.events.filter(event => {
      const year = this.getYear(event.timestamp);
      return year.toString() === value;
    })] : [...this.machineDetails.events];
  }

  getYear(timestamp: string) {
    const date = new Date(timestamp);
    return date.getFullYear();
  }

}
