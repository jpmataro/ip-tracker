import { Component } from '@angular/core';
import { IptrackerContainerComponent } from './containers/iptracker-container/iptracker-container.component';

@Component({
  selector: 'app-main-iptracker',
  standalone: true,
  imports: [IptrackerContainerComponent],
  templateUrl: './main-iptracker.component.html',
  styleUrl: './main-iptracker.component.scss'
})
export class MainIptrackerComponent {

}
