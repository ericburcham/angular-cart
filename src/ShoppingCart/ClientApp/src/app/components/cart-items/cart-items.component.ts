import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../types';

@Component({
  selector: 'cart-items',
  templateUrl: 'cart-items.component.html',
})
export class CartItemsComponent {
  @Input('data') data: CartItem[] = [];

  constructor(public shoppingCart: ShoppingCartService) {}

  getItems() {
    return this.data;
  }
}
