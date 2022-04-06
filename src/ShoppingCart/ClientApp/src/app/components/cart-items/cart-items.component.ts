import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItem } from '../types';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'cart-items',
  templateUrl: 'cart-items.component.html',
})
export class CartItemsComponent {
  @Input('cartItems') cartItems: CartItem[] = [];
  @Output('onChange') onChange = new EventEmitter();

  constructor(public shoppingCart: ShoppingCartService) {}

  getItems() {
    return this.cartItems;
  }

  handleQuantityChange(e: any) {
    const items = this.cartItems.map(
      (item: CartItem) => {
        return {
          ...item,
          quantity: (item.sku === e.sku) ? +e.event.target.value : item.quantity,
        };
      }, []
    );
    this.onChange.emit(items);
  }
}
