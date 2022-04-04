import { Component, OnInit } from '@angular/core';
import { calculateItem } from './components/cart-items/calculateItem';
import { CartItem, CartItemDTO } from './components/types';
import { CartItemService } from './services/cart-item/cart-item.service';
import { CustomerService } from './services/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  title = 'app';
  
  customer: any = { billingAddress: {}, shippingAddress: {} };
  cartItems: CartItem[] = [];
  cartSkus: Record<string, boolean> = {};

  constructor(
    public customerService: CustomerService,
    public cartItemService: CartItemService
  ) {}

  ngOnInit(): void {
    
    this.customerService.getCustomerInfo()
      .subscribe((r: any) => {
        if (r.ok) {
          this.customer = r.data;
        }
      });

    this.cartItemService.getCartItems()
      .subscribe((r: any) => {
        if (r.ok) {
          this.cartItems = r.data.map((x: CartItem) => {
            return calculateItem(x);
          });
          this.updateItems();
        }
      });
  }

  updateItems(dataForItem?: (x: CartItem) => any) {
    this.cartItems = this.cartItems.map(
      (item: CartItem) => 
        calculateItem(
          item, 
          dataForItem ? dataForItem(item) : undefined
        )
    );
    // create sku map for carted items
    this.cartSkus = this.cartItems.reduce(
      (map: any, item: CartItem) => Object.assign(map, { [item.sku]: true })
    , {});
  }

  handleApplyDeal(e: any) {
    this.updateItems(
      (x: CartItem) => (
        x.sku === e.sku
        ? { deal: e.deal } 
        : { deal: undefined } 
      )
    );
  }

  handleCartItemsChange(items: CartItem[]) {
    this.cartItems = [ ...items ];
    this.updateItems();
  }

  handleAddCartItem(item: CartItem) {
    if (this.cartSkus[item.sku]) {
      return this._addToExistingItem(item);
    }
    this._addNewItem(item);    
  }

  _addNewItem(item: CartItem) {
    this.cartItems = [
      ...this.cartItems,
      calculateItem(item)
    ];
    this.updateItems();
  }

  _addToExistingItem(item: CartItem) {
    this.updateItems((existing: CartItem) => ({ 
      quantity: existing.sku === item.sku 
        ? existing.quantity + item.quantity 
        : existing.quantity
    }))
  }
}
