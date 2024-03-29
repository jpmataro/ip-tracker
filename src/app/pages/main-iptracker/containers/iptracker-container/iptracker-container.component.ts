import { Component } from '@angular/core';
import { FormIpTrackerComponent } from '../../components/form-ip-tracker/form-ip-tracker.component';
import { IpDataInfoComponent } from '../../components/ip-data-info/ip-data-info.component';
import { MapMarkerComponent } from '../../components/map-marker/map-marker.component';
import { IpData } from '../../../../interfaces/ip-data';

@Component({
  selector: 'app-iptracker-container',
  standalone: true,
  imports: [FormIpTrackerComponent, IpDataInfoComponent, MapMarkerComponent],
  templateUrl: './iptracker-container.component.html',
  styleUrl: './iptracker-container.component.scss'
})
export class IptrackerContainerComponent {

    ipAllData!: IpData;
    showAlert!: boolean;
    errorMessages!: string;

    getIpInfo(ipInfoRecovered: IpData) {
      this.ipAllData = ipInfoRecovered;
      this.showAlert = false;

      if (this.ipAllData.code === 422) {
        this.showAlert = true;
        this.errorMessages = this.ipAllData.messages;
      }
    }

}
