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
        }
      });
  }

  updateItems(dataForItem?: (x: CartItem) => any) {
    this.cartItems = this.cartItems.map(
      (item: CartItem) => {
        return calculateItem(
          item, 
          dataForItem ? dataForItem(item) : undefined
        );
      }
    );
  }

  handleApplyDeal(e: any) {
    this.updateItems(
      (x: CartItem) => (
        x.sku === e.sku
        ? { deal: e.deal } 
        : undefined
      )
    );
  }

  handleCartItemsChange(items: CartItem[]) {
    this.cartItems = items;
    this.updateItems();
  }

}
