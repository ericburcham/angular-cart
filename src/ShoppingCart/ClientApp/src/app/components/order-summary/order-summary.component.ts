import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'order-summary',
  template: `
    <strong>order summary</strong>
  `
})

export class OrderSummaryComponent {
  constructor(
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}
}
