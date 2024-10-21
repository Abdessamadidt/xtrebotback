import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This ensures the service is singleton and available across the app
})
export class CoinService {
  private coins = [
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
      name: 'Shiba Inu',
      litname: 'SHIB'
    },
    {
      img: '../../assets/bitc.svg',
      price: 373.8,
      name: 'Bitcoin Cash',
      litname: 'BCH'
    }
  ];

  getCoins() {
    return this.coins;
  }
}
