import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
