import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fullName: string = 'Erick';
  
  constructor(private http: HttpClient) { 

    this.http.get('http://localhost:44462/api/customer/1234')
      .subscribe((response: any) => {
        debugger
      });

  }
}
