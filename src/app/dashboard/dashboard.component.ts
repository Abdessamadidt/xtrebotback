import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Coin } from "../coin";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 


})
export class DashboardComponent {
  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
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
  }


