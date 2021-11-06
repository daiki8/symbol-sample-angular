import { Injectable } from '@angular/core';
import * as symbolSdk from 'symbol-sdk';
import { environment } from 'src/environments/environment';
import { Account, MultisigAccount, Wallet } from './account.model';
import { InterfaceAccountInfrastructureService } from './account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MultisigAccountGraphInfo } from 'symbol-sdk';

@Injectable({
  providedIn: 'root'
})
export class AccountInfrastructureService implements InterfaceAccountInfrastructureService {
  private nodeUrl = environment.nodeUrl;
  private repositoryFactoryHttp = new symbolSdk.RepositoryFactoryHttp(this.nodeUrl);
  private accountHttp = this.repositoryFactoryHttp.createAccountRepository();
  private accountInfo$?: Observable<symbolSdk.AccountInfo>;
  private account$?: Observable<Account>;
  private multisigHttp = this.repositoryFactoryHttp.createMultisigRepository();
  private multisigAccountInfo$?: Observable<symbolSdk.MultisigAccountInfo>;
  private multisigAccount$?: Observable<MultisigAccount>;

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

  getMultisigAccount$(address: string): Observable<MultisigAccount> {
    const symbolSdkAddress = symbolSdk.Address.createFromRawAddress(address);
    this.multisigAccountInfo$ = this.multisigHttp.getMultisigAccountInfo(symbolSdkAddress);
    this.multisigAccount$ = this.multisigAccountInfo$.pipe(
      map((multisigAccountInfo) => {
        const multisigAccount: MultisigAccount = {
          address: multisigAccountInfo.accountAddress.plain(),
          cosignatoryAddresses: multisigAccountInfo.cosignatoryAddresses.map((cosignatoryAddress) => {
            return cosignatoryAddress.plain();
          }),
          minApproval: multisigAccountInfo.minApproval,
          minRemoval: multisigAccountInfo.minRemoval,
          cosignatoryAdressNum: multisigAccountInfo.cosignatoryAddresses.length,
        }
        return multisigAccount;
      })
    );
    return this.multisigAccount$;
  }

  createWallet(): Wallet {
    const newWallet = symbolSdk.Account.generateNewAccount(symbolSdk.NetworkType.TEST_NET);
    return {
      address: newWallet.address.pretty(),
      publicKey: newWallet.publicKey,
      privateKey: newWallet.privateKey
    };
  }
}
