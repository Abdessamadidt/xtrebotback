import { Component, ViewChild } from "@angular/core";

import { CoinsService } from "../services/coins-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 


})
export class DashboardComponent {

  coins: any[] = [];

  constructor(private coinsService: CoinsService) {}


  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins(): void {
    this.coinsService.getCoins().subscribe(
      data => {
        this.coins = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
      },
      error => console.error('Erreur lors de la récupération des coins', error)
    );
  }
}