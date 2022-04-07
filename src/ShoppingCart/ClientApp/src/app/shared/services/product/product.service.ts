import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  constructor(private readonly http: HttpClient) {}

  getSuggestions(searchString: string) {
    return this.http.get('http://localhost:44462/api/products/' + (searchString || ''));
  }
}
