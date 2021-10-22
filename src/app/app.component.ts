import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'symbol-sample-angular';
  sideNavLinks = [
    {
      name: 'Home',
      icon: 'home',
      linkPath: '/'
    },
    {
      name: 'Account',
      icon: 'account_circle',
      linkPath: '/explorer/accounts/NDLXI3OMXJCHO2A2ZD54TO4UZJQQV36DQYK33SA'
    },
  ];
}
