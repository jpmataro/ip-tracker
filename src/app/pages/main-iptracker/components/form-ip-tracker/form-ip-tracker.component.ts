import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetIpDataService } from '../../../../services/get-ip-data.service';
import { IpData } from '../../../../interfaces/ip-data';

@Component({
  selector: 'app-form-ip-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-ip-tracker.component.html',
  styleUrl: './form-ip-tracker.component.scss'
})
export class FormIpTrackerComponent {

  @Output() ipInfo = new EventEmitter<IpData>();
  ip_input: String = '';

  constructor(private ipDataService: GetIpDataService) {}

  onSubmit(ipForm: any) {
    this.ipDataService.getIpInfo(ipForm).then((result: any) => {
      this.ipInfo.emit(result);
    });
  }

}
