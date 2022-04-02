import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartItemService {
  
  constructor(private http: HttpClient) {}

  getCartItems(customerId?: number) {
    return this.http.get('http://localhost:44462/api/cartitem/' + (customerId || 0))
  }
}
