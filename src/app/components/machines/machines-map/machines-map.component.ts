import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { MachineDetailsComponent } from '../machine-details/machine-details.component';
import { MachineStatus, Status } from '../machines.model';

@Component({
  selector: 'app-machines-map',
  templateUrl: './machines-map.component.html',
  styleUrls: ['./machines-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesMapComponent implements OnInit, OnChanges {

  @Input()
  machinesList: MachineStatus[] = [];
  
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  zoom = 1;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  positions: google.maps.LatLngLiteral[] = [];

  @ViewChild('maps')
  maps!: GoogleMap;

  infoWindowContent = {
    name: '',
    status: '',
    id: ''
  }

  public get Status(): typeof Status {
    return Status; 
  }

  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) { 
    config.position = 'end';
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['machinesList']) {
      const bounds = new google.maps.LatLngBounds();
      this.machinesList.forEach(machine => {
        const { latitude: lat, longitude: lng } = machine;
        bounds.extend(new google.maps.LatLng(lat, lng));
      });
      this.maps?.fitBounds(bounds);
    }
  }

  handleMapClick(maker: any, machine: MachineStatus) {
    this.infoWindowContent = {name: machine.machine_type, status: machine.status, id: machine.id};
    this.infoWindow.open(maker);
  }
  
  openDetails(id: string) {
    const offcanvasRef = this.offcanvasService.open(MachineDetailsComponent);
		(offcanvasRef.componentInstance as MachineDetailsComponent).id = id;
  }
}
