import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MachineStatus } from '../machines.model';

@Component({
  selector: 'app-machines-map',
  templateUrl: './machines-map.component.html',
  styleUrls: ['./machines-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesMapComponent implements OnInit, OnChanges {

  @Input()
  machinesList: MachineStatus[] = [];

  zoom = 1;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  positions: google.maps.LatLngLiteral[] = [];

  @ViewChild('maps')
  maps!: GoogleMap;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['machinesList']) {
      const bounds = new google.maps.LatLngBounds();
      this.positions = this.machinesList.map(machine => {
        const { latitude: lat, longitude: lng } = machine;
        bounds.extend(new google.maps.LatLng(lat, lng));
        return {lat, lng};
      });
      this.maps?.fitBounds(bounds);
    }
  }

  handleMapClick(event: google.maps.MapMouseEvent) {
    console.log(event);
  }
}
