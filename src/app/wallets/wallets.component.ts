import { Component } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.css'
})
export class WalletsComponent {

  public coins: any[] = [];
  public selectedCoin: number = 4; // Default to the first coin



  constructor(private coinsService: CoinService) {}

  ngOnInit() {
    this.coins = this.coinsService.getCoins();
    this.selectedCoin = 0;
  }


  // Method to update the selected coin when an item is clicked
  selectCoin(i: number) {
    this.selectedCoin = i;
  }

}
