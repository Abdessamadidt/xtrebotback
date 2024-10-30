import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { PricesComponent } from './prices/prices.component';
import { WalletsComponent } from './wallets/wallets.component';
import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { DepositsComponent } from './deposits/deposits.component';
import { CoinsComponent } from './coins/coins.component';
import { AuthGuard } from './guards/auth.guard'; // Import de l'AuthGuard
import { UsersComponent } from './users/users.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'prices', component: PricesComponent },
      { path: 'wallets', component: WalletsComponent, canActivate: [AuthGuard] },
      { path: 'buycrypto', component: BuyCryptoComponent },
      { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] },
      { path: 'blog', component: BlogComponent },
      { path: 'withdrawals', component: WithdrawalsComponent, canActivate: [AuthGuard] },
      { path: 'deposits', component: DepositsComponent, canActivate: [AuthGuard] },
      { path: 'coins', component: CoinsComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: 'signup',
    component: SignupComponent  // Route non protégée pour Signup
  },
  {
    path: 'login',
    component: LoginComponent  // Route non protégée pour Login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
