import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AddressComponent } from './shared/components/address/address.component';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './modules/shopping-cart/components/cart-items/cart-items.component';
import { DealSelectorComponent } from './modules/shopping-cart/components/deal-selector/deal-selector.component';
import { CartHeaderComponent } from './modules/shopping-cart/components/cart-header/cart-header.component';
import { NewCartItemComponent } from './modules/shopping-cart/components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './modules/shopping-cart/components/order-summary/order-summary.component';
import { ShoppingCartComponet } from './modules/shopping-cart/components/shopping-cart/shopping-cart.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AddressComponent,
    AppComponent,
    CartHeaderComponent,
    CartItemsComponent,
    DealSelectorComponent,
    OrderSummaryComponent,
    NewCartItemComponent,
    ShoppingCartComponet
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpClientModule,
    ShoppingCartModule,
  ],
  providers: [],
})
export class AppModule {}
