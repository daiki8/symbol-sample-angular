import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Transfer } from 'src/app/model/transaction/transfer/transfer.model';

@Component({
  selector: 'app-view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class ViewLoginComponent implements OnInit {
  loginKey: string = '';
  @Output() login = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.login.emit(this.loginKey);
  }
}
