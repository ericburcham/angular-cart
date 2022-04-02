import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fullName: string = 'Erick';
  
  constructor() { }
}
