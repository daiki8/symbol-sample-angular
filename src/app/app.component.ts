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
      name: 'Wallet',
      icon: 'account_balance_wallet',
      linkPath: '/'
    },
    {
      name: 'Account',
      icon: 'account_circle',
      linkPath: '/explorer/accounts/TDYBWQAYDAXJQVLABUFYIPMENZNQYD5B3QCPHAA'
    },
    {
      name: 'Send',
      icon: 'send',
      linkPath: '/transfer'
    },
  ];
}
