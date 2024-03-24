import { Component, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';

@Component({
  selector: 'app-map-marker',
  standalone: true,
  imports: [],
  templateUrl: './map-marker.component.html',
  styleUrl: './map-marker.component.scss'
})
export class MapMarkerComponent implements AfterViewInit {
  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

}
