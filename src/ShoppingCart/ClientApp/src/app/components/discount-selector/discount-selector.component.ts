import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'discount-selector',
  templateUrl: './discount-selector.component.html',
  styleUrls: ['./discount-selector.component.css'],
})
export class DiscountSelectorComponent implements OnInit {
  
  constructor(
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}

  ngOnInit(): void {}

  handleChange(value: any) {
    debugger
  }
}
