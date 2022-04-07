import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { DealSelectorComponent } from './components/deal-selector/deal-selector.component';
import { NewCartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [
    CartHeaderComponent,
    CartItemsComponent,
    DealSelectorComponent,
    OrderSummaryComponent,
    NewCartItemComponent,
    ShoppingCartComponent,
  ],
  exports: [ShoppingCartComponent],
  imports: [SharedComponentsModule, CommonModule],
})
export class ShoppingCartModule {}
