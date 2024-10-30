import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Assurez-vous d'avoir un AuthService pour gérer l'authentification
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getUserRole().pipe( // On suppose que `getUserRole()` retourne le rôle de l'utilisateur connecté
      take(1),
      map(role => {
        if (role === 'ADMIN') {
          return true;
        } else {
          this.router.navigate(['/not-authorized']); // Redirige vers une page non autorisée
          return false;
        }
      })
    );
  }
}
