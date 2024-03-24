import { Component, Input, OnInit } from '@angular/core';
import { IpData } from '../../../../interfaces/ip-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ip-data-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ip-data-info.component.html',
  styleUrl: './ip-data-info.component.scss'
})
export class IpDataInfoComponent {
  @Input() ipInfo!: IpData;

  construnctor() {}

  ngOnInit() {
    console.log("info: ",this.ipInfo)
  }
}
