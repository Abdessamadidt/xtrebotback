import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { PricesComponent } from './prices/prices.component';
import { WalletsComponent } from './wallets/wallets.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';


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
        { path: 'wallets', component: WalletsComponent },
        { path: 'buy-crypto', component: BuyCryptoComponent },
        { path: 'activities', component: ActivitiesComponent },
        { path: 'blog', component: BlogComponent }
      ]
    },
    {
      path: 'signup',
      component: SignupComponent  // Signup sans Layout
    }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 
}
