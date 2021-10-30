import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Account } from 'src/app/model/account/account.model';
import { AccountService } from 'src/app/model/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  address$?: Observable<string>;
  account$?: Observable<Account>;
  snackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  snackBarVerticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private route: ActivatedRoute, private accountService: AccountService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.address$ = this.route.params.pipe(map((params) => params.address));
    this.account$ = this.address$.pipe(
      mergeMap((address): Observable<Account> => {
        return this.accountService.getAccount$(address);
      }),
      catchError((error) => {
        console.error(error);
        this._snackBar.open('アカウント情報の取得に失敗しました。', 'Close', {
          horizontalPosition: this.snackBarHorizontalPosition,
          verticalPosition: this.snackBarVerticalPosition
        });
        throw new Error(error);
      })
    );
  }
}
