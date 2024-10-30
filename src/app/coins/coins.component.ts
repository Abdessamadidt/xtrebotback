import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../services/coins-service.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins: any[] = [];
  isPriceSubmited = false;
  ext = ".svg"
  lassets = "../../assets/coins/"

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
  submitCoinUpdate(coin: any): void {
    this.coinsService.updateCoin(coin).subscribe(
      updatedCoin => {
        const index = this.coins.findIndex(c => c.id === updatedCoin.id);
        if (index !== -1) {
          this.coins[index] = { ...updatedCoin, isPriceSubmitted: true };
        }
      },
      error => console.error('Erreur lors de la mise à jour du coin', error)
    );
  }

  notSubmitPrice(): void {
    this.isPriceSubmited = false;
  }
}
