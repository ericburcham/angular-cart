import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { CartItem, Deal, DealType } from '../types';
import { DealService } from 'src/app/modules/shopping-cart/services/deal/deal.service';

@Component({
  selector: 'deal-selector',
  templateUrl: './deal-selector.component.html',
})
export class DealSelectorComponent implements OnInit {
  deal?: DealType;
  deals: Deal[] = [];
  itemWithDeal: Partial<CartItem> = {};
  sku?: any;

  @Input('cartItems') cartItems: CartItem[] = [];
  @Output('onApplyDeal') onApplyDeal = new EventEmitter<any>();

  constructor(public dealService: DealService) {}

  ngOnInit(): void {
    this.dealService.getDeals().subscribe((r: any) => {
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

  handleApplyDeal() {
    this.onApplyDeal.emit({
      deal: this.deal,
      sku: this.sku,
    });
  }

  handleDealChange(e: any) {
    this.deal = e.target.value;
  }

  handleSkuChange(e: any) {
    this.sku = e.target.value;
  }
}
