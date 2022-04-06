import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DealService {
  
  constructor(private http: HttpClient) {}

  getDeals() {
    return this.http.get('http://localhost:44462/api/deals');
  }
}
