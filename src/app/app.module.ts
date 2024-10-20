import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardcoinComponent } from './cardcoin/cardcoin.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { PricesComponent } from './prices/prices.component';
import { WalletsComponent } from './wallets/wallets.component';
import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselBlogComponent } from './carousel-blog/carousel-blog.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [AppComponent, SidebarComponent, BlogComponent, HeaderComponent, MainComponent, DashboardComponent, FooterComponent, CardcoinComponent, ExchangeComponent, PricesComponent, WalletsComponent, BuyCryptoComponent, ActivitiesComponent, CarouselComponent, CarouselBlogComponent, SignupComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CommonModule,NgApexchartsModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
