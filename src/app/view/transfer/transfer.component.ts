import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Transfer } from 'src/app/model/transaction/transfer/transfer.model';

@Component({
  selector: 'app-view-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class ViewTransferComponent implements OnInit {
  transfer: Transfer = { address: environment.sampleTargetAddress, message: '', amount: 1 };
  @Output() send = new EventEmitter<Transfer>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.send.emit({
      address: this.transfer.address,
      message: this.transfer.message,
      amount: this.transfer.amount,
    });
  }

}
