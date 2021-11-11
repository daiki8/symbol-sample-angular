import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private privateKey?: string = '';
  constructor() { }

  login(pri: string): void {
    this.privateKey = pri;
  }

  logout(): void {
    this.privateKey = '';
  }

  isLogin(): boolean {
    return this.privateKey?.length !== 0;
  }
}
