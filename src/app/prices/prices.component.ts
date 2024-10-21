import { Component } from '@angular/core';
import { Coin } from '../coin';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {

  public coins: Coin[];


  constructor() {
    this.coins = [
      {
        img: '../../assets/btc.svg',
        price: 76201.323,
        name: 'Bitcoin',
        litname: 'BTC'
      },
      {
        img: '../../assets/eth.svg',
        price: 2701.382,
        name: 'Ethereum',
        litname: 'ETH'
      },
      {
        img: '../../assets/BNB.svg',
        price: 652.123,
        name: 'Binance Coin',
        litname: 'BNB'
      },
      {
        img: '../../assets/trx.svg',
        price: 0.1563,
        name: 'Tron',
        litname: 'TRC'
      },
      {
        img: '../../assets/SHIBA.png',
        price: 0.0000189,
        name: 'Shiba inu',
        litname: 'SHIB'
      },
      
    ];
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
