import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './deposits.component.html',
  styleUrl: './deposits.component.css'
})
export class DepositsComponent implements OnInit{
 
  ext = ".svg"
  lassets = "../../assets/coins/"

  transactions: any[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.loadDeposits();
    console.log(this.transactions)
  }

  loadDeposits(): void {
    this.transactionsService.getDeposits().subscribe(
      data => {
        this.transactions = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      },
      error => console.error('Erreur lors de la récupération des depots', error)
    );
  }

}
