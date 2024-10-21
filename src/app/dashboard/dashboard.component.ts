import { Component, ViewChild } from "@angular/core";

import { CoinService } from "../coin.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 


})
export class DashboardComponent {
  public coins: any[] = [];

  constructor(private coinsService: CoinService) {}

  ngOnInit() {
    this.coins = this.coinsService.getCoins();
  }
}