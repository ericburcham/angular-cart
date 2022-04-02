import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../types';
import { formatUSD } from './formatUSD';

@Component({
  selector: 'cart-items',
  templateUrl: 'cart-items.component.html',
})
export class CartItemsComponent {

  @Input('data') data: CartItem[] = [];

  

  constructor(
    public shoppingCart: ShoppingCartService,
  ) {

    Object.assign(this, {
      formatUSD,
    })

  }

  getItems() {
    return this.data;

    
  }
}

