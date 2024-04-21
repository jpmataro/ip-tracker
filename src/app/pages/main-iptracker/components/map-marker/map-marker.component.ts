import { Component, AfterViewInit, OnChanges, Input } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { IpData } from '../../../../interfaces/ip-data';
import  * as L from 'leaflet';

@Component({
  selector: 'app-map-marker',
  standalone: true,
  imports: [],
  templateUrl: './map-marker.component.html',
  styleUrl: './map-marker.component.scss'
})
export class MapMarkerComponent implements AfterViewInit {
  @Input() ipInfo!: IpData;
  map: any;
  icon: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    
    this.icon = L.icon({
      iconUrl: 'assets/images/marker-icon.webp',
      shadowUrl: 'assets/images/marker-shadow.webp',
      popupAnchor: [13, 0],
    });

    this.loadMap();
  }

  ngOnChanges() {
    if(this.ipInfo !== undefined) {
      this.newPositionToMap(this.ipInfo.location);
    }
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap() {
    this.map = L.map('map').setView([41.3927673, 2.0577887], 13);
    const icon = this.icon;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.getCurrentPosition()
    .subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const marker = L.marker([position.latitude, position.longitude], { icon });
      marker.addTo(this.map);
    });

  }

  private newPositionToMap(location: any) {
    this.map.flyTo([location.lat, location.lng], 13);
    const icon = this.icon;
    const marker = L.marker([location.lat, location.lng], { icon }).bindPopup(location.city + "," + location.region);
    
    marker.addTo(this.map);
  }

}
