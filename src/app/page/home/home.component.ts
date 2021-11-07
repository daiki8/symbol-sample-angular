import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/model/account/account.service';
import { Wallet } from 'src/app/model/account/account.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wallet?: Wallet;
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.wallet = this.accountService.createWallet();
    console.log(this.wallet.address);
  }

  generateWallet(): void {
    console.log('aaaddd');
    this.wallet = this.accountService.createWallet();
  }

}
