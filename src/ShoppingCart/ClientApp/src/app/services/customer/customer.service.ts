import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) {}

  getCustomerInfo(customerId?: number) {
    return this.http.get('http://localhost:44462/api/customers/' + (customerId || 0));
  }
}
