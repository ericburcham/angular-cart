import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DealService } from 'src/app/services/deal/deal.service';

import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CartItem, Deal, DealType } from '../types';

@Component({
  selector: 'discount-selector',
  templateUrl: './discount-selector.component.html',
  styleUrls: ['./discount-selector.component.css'],
})
export class DiscountSelectorComponent implements OnInit {
  
  sku?: any;
  deal?: DealType;
  deals: Deal[] = [];
  itemWithDeal: Partial<CartItem> = {};

  @Input('cartItems') cartItems: CartItem[] = [];
  @Output('onApplyDeal') onApplyDeal = new EventEmitter<any>();

  constructor(
    public cart: ShoppingCartService,
    public dealService: DealService,
  ) {}

  ngOnInit(): void {
    this.dealService.getDeals()
      .subscribe((r: any) => {
        if (r.ok) {
          this.deals = r.data;
        }
      });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // This fires whenever passed cartItems input changes.
    // This includes those times when an Deal is applied to some item.
    if (changes.cartItems) {
      const items = changes.cartItems.currentValue;
      // here we simply deconstruct the item that a deal has been applied to 
      // (we need it to mark it as selected in the dropdown)
      this.itemWithDeal = items.find((x: CartItem) => !!x.deal) || {};
    }
  }

  handleSkuChange(e: any) {
    this.sku = e.target.value;
  }

  handleDealChange(e: any) {
    this.deal = e.target.value;
  }

  handleApplyDeal() {
    this.onApplyDeal.emit({
      sku: this.sku, 
      deal: this.deal
    });
  }

}
