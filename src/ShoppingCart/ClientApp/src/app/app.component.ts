import { Component, OnInit } from '@angular/core';

import { calculateCartItem } from './modules/shopping-cart/components/cart-items/calculateCartItem';
import { CartItem } from './modules/shopping-cart/components/types';
import { CartItemService } from './modules/shopping-cart/services/cart-item/cart-item.service';
import { CustomerService } from './shared/services/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartSkus: Record<string, boolean> = {};
  customer: any = { billingAddress: {}, shippingAddress: {} };
  title = 'app';

  constructor(
    public customerService: CustomerService,
    public cartItemService: CartItemService
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomerInfo().subscribe((r: any) => {
      if (r.ok) {
        this.customer = r.data;
      }
    });

    this.cartItemService.getCartItems().subscribe((r: any) => {
      if (r.ok) {
        this.cartItems = r.data.map((x: CartItem) => {
          return calculateCartItem(x);
        });
        this.updateItems();
      }
    });
  }

  updateItems(dataForItem?: (x: CartItem) => any) {
    this.cartItems = this.cartItems.map((item: CartItem) =>
      calculateCartItem(item, dataForItem ? dataForItem(item) : undefined)
    );
    // create sku map for carted items
    this.cartSkus = this.cartItems.reduce(
      (map: any, item: CartItem) => Object.assign(map, { [item.sku]: true }),
      {}
    );
  }

  handleApplyDeal(e: any) {
    this.updateItems((x: CartItem) =>
      x.sku === e.sku ? { deal: e.deal } : { deal: undefined }
    );
  }

  handleCartItemsChange(items: CartItem[]) {
    this.cartItems = [...items];
    this.updateItems();
  }

  handleAddCartItem(item: CartItem) {
    if (this.cartSkus[item.sku]) {
      return this._addToExistingItem(item);
    }
    this._addNewItem(item);
  }

  _addNewItem(item: CartItem) {
    this.cartItems = [...this.cartItems, calculateCartItem(item)];
    this.updateItems();
  }

  _addToExistingItem(item: CartItem) {
    this.updateItems((existing: CartItem) => ({
      quantity:
        existing.sku === item.sku
          ? existing.quantity + item.quantity
          : existing.quantity,
    }));
  }
}
