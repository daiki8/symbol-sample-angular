import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './page/explorer/accounts/account/account.component';
import { HomeComponent } from './page/home/home.component';
import { TransferComponent } from './page/transfer/transfer.component';
import { LoginGuard } from './model/login/login.guard';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'explorer/accounts/:address',
    component: AccountComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
