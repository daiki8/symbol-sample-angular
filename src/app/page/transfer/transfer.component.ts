import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { TransferService } from 'src/app/model/transaction/transfer/transfer.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  snackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  snackBarVerticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route: ActivatedRoute, private transferService: TransferService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log("transfer.component");
    this.transferService.sendTransaction()
      .then((response) => { 
        console.log('Success Transfer: ' + response);
        this._snackBar.open('送金に成功しました。', 'Close', {
          horizontalPosition: this.snackBarHorizontalPosition,
          verticalPosition: this.snackBarVerticalPosition
        });
       })
      .catch((error) => { 
        console.error(error);
        this._snackBar.open('送金に失敗しました。', 'Close', {
          horizontalPosition: this.snackBarHorizontalPosition,
          verticalPosition: this.snackBarVerticalPosition
        });
        throw new Error(error);
      })
  }

}
