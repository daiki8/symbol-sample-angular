import { Injectable } from '@angular/core';
import * as symbolSdk from 'symbol-sdk';
import { environment } from 'src/environments/environment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class TransferService {
  snackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  snackBarVerticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  private nodeUrl = environment.nodeUrl;
  private repositoryFactoryHttp = new symbolSdk.RepositoryFactoryHttp(this.nodeUrl);
  private accountHttp = this.repositoryFactoryHttp.createAccountRepository();
  private networkType = symbolSdk.NetworkType.TEST_NET;
  private networkGenerationHash = '3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155'
  private epochAdjustment = 1616694977;
  
  async sendTransaction(targetAddress: string, message: string) {
    console.log('send Transaction');

    const repoFactory = new symbolSdk.RepositoryFactoryHttp(this.nodeUrl, {
      websocketUrl: `${this.nodeUrl.replace('http', 'ws')}/ws`,
      websocketInjected: WebSocket,
    });
    
    const senderPrivateKey = environment.samplePrivateKey;
    const senderAccount = symbolSdk.Account.createFromPrivateKey(senderPrivateKey, this.networkType);
    // const targetAddress = environment.sampleTargetAddress;
    // const message = 'hello symbol';

    const transferTransaction = symbolSdk.TransferTransaction.create(
      symbolSdk.Deadline.create(this.epochAdjustment),
      symbolSdk.Address.createFromRawAddress(targetAddress),
      [symbolSdk.NetworkCurrencies.PUBLIC.currency.createRelative(1)],
      symbolSdk.PlainMessage.create(message),
      this.networkType,
    ).setMaxFee(110);
  
    const signedTransaction = senderAccount.sign(transferTransaction, this.networkGenerationHash);
    console.log(signedTransaction.hash);
    const transactionRepo = repoFactory.createTransactionRepository();
    const receiptRepo = repoFactory.createReceiptRepository();
    const transactionService = new symbolSdk.TransactionService(transactionRepo, receiptRepo);
    const listener = repoFactory.createListener();
    await listener.open();
    try {
      console.log('announce transaction');
      this._snackBar.open('送金をアナウンスしました。', 'Close', {
        horizontalPosition: this.snackBarHorizontalPosition,
        verticalPosition: this.snackBarVerticalPosition
      });
      const transaction = await transactionService.announce(signedTransaction, listener).toPromise();
      return transaction;
    } 
    catch(err) {
      throw(err);
    } finally {
      listener.close();
    }
  }
}
