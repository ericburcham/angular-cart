import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressComponent } from 'src/app/shared/components/address/address.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { DealSelectorComponent } from './components/deal-selector/deal-selector.component';
import { NewCartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ShoppingCartComponet } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AddressComponent,
    CartHeaderComponent,
    CartItemsComponent,
    DealSelectorComponent,
    OrderSummaryComponent,
    NewCartItemComponent,
    ShoppingCartComponet,
  ],
  exports: [ShoppingCartComponet],
  imports: [CommonModule],
})
export class ShoppingCartModule {}
