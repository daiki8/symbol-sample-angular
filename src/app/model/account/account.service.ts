import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInfrastructureService } from './account-infrastructure.service';
import { Account, MultisigAccount, Wallet } from './account.model';

export interface InterfaceAccountInfrastructureService {
  getAccount$: (address: string) => Observable<Account>;
  getMultisigAccount$: (address: string) => Observable<MultisigAccount>;
  createWallet: () => Wallet;
}

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private account$?: Observable<Account>;
  private multisigAccount$?: Observable<MultisigAccount>;
  constructor(private accountInfrastructureService: AccountInfrastructureService) {}

  getAccount$(address: string): Observable<Account> {
    this.account$ = this.accountInfrastructureService.getAccount$(address);
    return this.account$;
  }

  getMultisigAccount$(address: string): Observable<MultisigAccount> {
    this.multisigAccount$ = this.accountInfrastructureService.getMultisigAccount$(address);
    return this.multisigAccount$;
  }

  createWallet(): Wallet {
    return this.accountInfrastructureService.createWallet();
  }
}
