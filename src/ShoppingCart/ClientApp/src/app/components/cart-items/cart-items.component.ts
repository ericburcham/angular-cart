import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'cart-items',
  templateUrl: 'cart-items.component.html',
})
export class CartItemsComponent {
  constructor(
    public shoppingCart: ShoppingCartService,
    public api: ApiService
  ) {}

  getItems() {
    const items = [
      createItem({
        description: 'Black Dress Socks',
        quantity: 10,
        price: 4.99,
        discount: '$1off',
      }),
      createItem({
        description: 'Pressure Cooker',
        quantity: 2,
        price: 49.99,
        discount: '',
      }),
    ];

    // debugger

    return items; // this.shoppingCart.items;
  }
}

function createItem(options: any = {}) {
  
  const subTotal: number = options.quantity * options.price;
  const total: number = applyDiscount({
    ...options,
    subTotal,
  });

  const item: any = {
    sku: Math.round(Math.random() * 1000)
      .toString()
      .padStart(3, '0'),
    description: options.description,
    quantity: options.quantity,
    price: options.price,
    subTotal,
    discount: subTotal - total,
    total: total,
  };

  return item;
}


function applyDiscount(item: any) {
  switch (item.discount) {
    case 'b1g1': 
      return Math.floor(item.quantity / 2) * item.price;

    case '10%off': 
      return item.quantity * item.price * 0.9;

    case '$1off': 
      return item.subTotal - item.quantity;

    default:
      return item.subTotal;
  }
}