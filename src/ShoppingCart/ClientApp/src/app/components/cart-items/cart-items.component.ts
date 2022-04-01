import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'cart-items',
  template: `
    <strong>cart items</strong>
  `
})

export class CartItemsComponent {
  constructor(
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}
}
