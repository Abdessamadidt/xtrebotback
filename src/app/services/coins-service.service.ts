import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private apiUrl = 'http://localhost:8080/api/coins'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Obtenir tous les coins
  getCoins(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Mettre à jour le prix d'un coin
  updateCoin(coin: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(`${this.apiUrl}/${coin.id}`, coin, { headers });
  }
  
}
