import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIpDataService {

  ipState = signal({});

  constructor() { }

  getIpInfo(formValue: any) {
    let ip = formValue.value.ip_input;
    return fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_f6JufwtUYEuiUR0JwXbv8sZtUcCEw&ipAddress='+ ip)
      .then((response) => response.json())
      .then((result) => {
        this.ipState.set(result);
        return this.ipState();
      })
      .catch((error) => {
        console.error("Error in fetch:", error);
      })
  }

  
}
