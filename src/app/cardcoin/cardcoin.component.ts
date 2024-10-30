import { ChangeDetectorRef, Component, Input } from '@angular/core';


@Component({
  selector: 'app-cardcoin',
  templateUrl: './cardcoin.component.html',
  styleUrl: './cardcoin.component.css'
})
export class CardcoinComponent {
  
  @Input() img!: string;
  @Input() price!: number;
  @Input() name!: string;
  @Input() litnom!: string;

  prcent!: number 
  price2: number = this.price;
  intervalId: any;

  lassets = "../../assets/coins/"
  ext = ".svg"

  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit() {
    this.updatePrice();
    this.intervalId = setInterval(() => this.updatePrice(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clear the interval when the component is destroyed
  }

  updatePrice() {
    const initialPrice = this.price; // Assuming this is the initial price
    const changePercent = Math.random() * (0.15- 0.1) + 0.1; // Random percentage between 0.1% and 0.5%
    
    // Calculate the change amount based on the random percentage
    const changeAmount = (changePercent / 100) * initialPrice;
    
    // Randomly decide to increase or decrease the price
    const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose to increase or decrease the price
    this.price2 = initialPrice + (direction * changeAmount); // Update the new price
  
    // Calculate the percentage change
    const percentageChange = ((this.price2 - initialPrice) / initialPrice) * 100;
    
    // Store the formatted percentage change, rounded to 2 decimal places
    this.prcent = parseFloat(percentageChange.toFixed(2));

  
    }

  
  
  
  
  
  }
  


