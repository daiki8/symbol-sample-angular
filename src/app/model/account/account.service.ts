import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInfrastructureService } from './account-infrastructure.service';
import { Account } from './account.model';

export interface InterfaceAccountInfrastructureService {
  getAccount$: (address: string) => Observable<Account>;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account$?: Observable<Account>;
  constructor(private accountInfrastructureService: AccountInfrastructureService) {}

  getAccount$(address: string): Observable<Account> {
    this.account$ = this.accountInfrastructureService.getAccount$(address);
    return this.account$;
  }
}