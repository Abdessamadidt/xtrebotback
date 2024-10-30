import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();

    // Redirige vers /dashboard si l'utilisateur est connecté et essaie d'accéder à /login
    if (isLoggedIn && state.url === '/login') {
      this.router.navigate(['/dashboard']);
      return false;
    }

    // Autorise l'accès aux routes protégées si l'utilisateur est connecté
    if (isLoggedIn || state.url === '/login') {
      return true;
    }

    // Redirige vers /login si non connecté
    this.router.navigate(['/login']);
    return false;
  }
}
