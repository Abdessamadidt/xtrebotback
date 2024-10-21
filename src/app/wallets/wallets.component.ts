import { Component } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.css'
})
export class WalletsComponent {

  public coins: any[] = [];


  constructor(private coinsService: CoinService) {}

  ngOnInit() {
    this.coins = this.coinsService.getCoins();
  }

  selectedCoin = 0; // Default to the first coin

  // Method to update the selected coin when an item is clicked
  selectCoin(i: number) {
    this.selectedCoin = i;
  }

}
