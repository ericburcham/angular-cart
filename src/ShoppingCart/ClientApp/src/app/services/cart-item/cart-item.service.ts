import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartItemService {
  
  constructor(private readonly http: HttpClient) {}

  getCartItems(customerId?: number) {
    return this.http.get('http://localhost:44462/api/cartitems/' + (customerId || 0));
  }
}
