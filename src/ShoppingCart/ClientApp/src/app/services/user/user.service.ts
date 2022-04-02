import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http: HttpClient) {}

  getUserInfo(userId?: number) {
    return this.http.get('http://localhost:44462/api/customer/' + (userId || 0))
  }
}
