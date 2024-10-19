import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { PricesComponent } from './prices/prices.component';
import { WalletsComponent } from './wallets/wallets.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent }, // Route for DashboardComponent
  { path: 'exchange', component: ExchangeComponent }, // Route for DashboardComponent
  { path: 'prices', component: PricesComponent }, // Route for DashboardComponent
  { path: 'wallets', component: WalletsComponent }, // Route for DashboardComponent
  { path: 'buy-crypto', component: BuyCryptoComponent }, // Route for DashboardComponent
  { path: 'activities', component: ActivitiesComponent }, // Route for DashboardComponent
  { path: 'blog', component: BlogComponent }, // Route for DashboardComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 
}
