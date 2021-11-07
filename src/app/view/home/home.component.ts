import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/account/account.model';

@Component({
  selector: 'app-view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ViewHomeComponent implements OnInit {
  @Input() wallet?: Wallet;
  @Output() generateWallet = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onGenerate(): void {
    console.log('aaaaaaa');
    this.generateWallet.emit();
  }
}
