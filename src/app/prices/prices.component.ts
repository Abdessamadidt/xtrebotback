import { Component } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {

  public coins: any[] = [];

  constructor(private coinsService: CoinService) {}

  ngOnInit() {
    this.coins = this.coinsService.getCoins();
  }
  updatePrice(prc:number) {
    const initialPrice = prc; // Assuming this is the initial price
    const changePercent = Math.random() * (0.15- 0.1) + 0.1; // Random percentage between 0.1% and 0.5%
    
    // Calculate the change amount based on the random percentage
    const changeAmount = (changePercent / 100) * initialPrice;
    
    // Randomly decide to increase or decrease the price
    const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose to increase or decrease the price
    let price2 = initialPrice + (direction * changeAmount); // Update the new price
  
    // Calculate the percentage change
    const percentageChange = ((price2 - initialPrice) / initialPrice) * 100;
    
    // Store the formatted percentage change, rounded to 2 decimal places
    let prcent = parseFloat(percentageChange.toFixed(2));

    return price2;
    }

    getPrc(prc: number){
      const initialPrice = prc; // Assuming this is the initial price
      const changePercent = Math.random() * (0.15- 0.1) + 0.1; // Random percentage between 0.1% and 0.5%
      
      // Calculate the change amount based on the random percentage
      const changeAmount = (changePercent / 100) * initialPrice;
      
      // Randomly decide to increase or decrease the price
      const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose to increase or decrease the price
      let price2 = initialPrice + (direction * changeAmount); // Update the new price
    
      // Calculate the percentage change
      const percentageChange = ((price2 - initialPrice) / initialPrice) * 100;
      
      // Store the formatted percentage change, rounded to 2 decimal places
      let prcent = parseFloat(percentageChange.toFixed(2));
      return prcent
    }

}
