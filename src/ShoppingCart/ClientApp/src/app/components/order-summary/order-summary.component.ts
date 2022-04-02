import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html'
})

export class OrderSummaryComponent {
  constructor(
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}
}
