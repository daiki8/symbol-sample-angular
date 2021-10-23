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
      linkPath: '/explorer/accounts/TCE654D7MCEZHRCH3B4N4YGTJUXWK6KPZIWRGZY'
    },
  ];
}
