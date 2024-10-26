import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BlogComponent } from './blog/blog.component';




@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent,
    DashboardComponent, FooterComponent, CardcoinComponent, ExchangeComponent,
    PricesComponent, WalletsComponent, BuyCryptoComponent, ActivitiesComponent, SignupComponent, LayoutComponent, LoginComponent, CarouselComponent, SideBarComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CommonModule, NgApexchartsModule, HttpClientModule,    RouterModule // Make sure your routes are defined

  ],
  providers: [
    provideAnimationsAsync(), BlogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
