import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Vérifie si l'utilisateur est connecté au chargement du composant
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogout(): void {
    this.authService.logout(); // Déconnecte l'utilisateur
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirige vers la page de connexion
      }
}
