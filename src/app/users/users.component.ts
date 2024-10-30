import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface User {
  email: string;
  btc: number;
  eth: number;
  usdt: number;
  bnb: number;
  trc: number;
  shib: number;
  bch: number;
  isPriceSubmitted?: boolean;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any [] = []

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUSers();
  }

  loadUSers(): void {
    this.authService.getUsers().subscribe(
      data => {
        this.users = data
      },
      error => console.error('Erreur lors de la récupération des users', error)
    );
  }

  updateSolde(user: any): void {
    this.authService.updateUser(user).subscribe(
      updatedUser => {
        const index = this.users.findIndex(c => c.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = { ...updatedUser, isPriceSubmitted: true };
        }
      },
      error => console.error('Erreur lors de la mise à jour du coin', error)
    );
}

  resetPriceSubmitted(user: any) {
    user.isPriceSubmitted = false;
  }
 
}
