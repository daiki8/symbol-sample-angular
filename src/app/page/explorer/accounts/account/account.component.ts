import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Account } from 'src/app/model/account/account.model';
import { AccountService } from 'src/app/model/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  address$?: Observable<string>;
  address?: string;
  account$?: Observable<Account>;
  account?: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.address$ = this.route.params.pipe(map((params) => params.address));
    this.address$.subscribe(
      (address) => {
        console.log("address", address);
        this.address = address;
      }
    );
    this.account$ = this.address$.pipe(mergeMap((address)=> this.accountService.getAccount$(address)));
    this.account$.subscribe(
      (account) => {
        console.log("account", account);
        this.account = account;
      }
    )
  }

}