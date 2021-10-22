import { Injectable } from '@angular/core';
import * as symbolSdk from 'symbol-sdk';
import { environment } from 'src/environments/environment';
import { Account } from './account.model';
import { InterfaceAccountInfrastructureService } from './account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountInfrastructureService implements InterfaceAccountInfrastructureService {
  private nodeUrl = environment.nodeUrl;
  private repositoryFactoryHttp = new symbolSdk.RepositoryFactoryHttp(this.nodeUrl);
  private accountHttp = this.repositoryFactoryHttp.createAccountRepository();
  private accountInfo$?: Observable<symbolSdk.AccountInfo>;
  private account$?: Observable<Account>;

  constructor() { }

  getAccount$(address: string): Observable<Account> {
    const symbolSdkAddress = symbolSdk.Address.createFromRawAddress(address);
    this.accountInfo$ = this.accountHttp.getAccountInfo(symbolSdkAddress);
    this.account$ = this.accountInfo$.pipe(
      map((accountInfo) => {
        const account: Account = {
          address: accountInfo.address.plain(),
          publicKey: accountInfo.publicKey.toString(),
          mosaics: accountInfo.mosaics.map((mosaic) => {
            return {
              id: mosaic.id.toHex(),
              amount: BigInt(mosaic.amount.toString())
            }
          }),
          importanceMicroXym: BigInt(accountInfo.importance.toString())
        }
        return account;
      })
    );
    return this.account$;
  }
}
