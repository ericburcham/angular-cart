import { Component, Input, SimpleChanges } from '@angular/core';

import { CartItem, OrderSummary } from '../types';
import { calculateOrderSummary } from './calculateOrderSummary';

@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html'
})

export class OrderSummaryComponent {

  summary: Partial<OrderSummary> = {};

  @Input('cartItems') cartItems: CartItem[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.cartItems) {
      const items = changes.cartItems.currentValue;
      if (items.length) {
        this.summary = calculateOrderSummary(items);
      }
    }
  }
}

