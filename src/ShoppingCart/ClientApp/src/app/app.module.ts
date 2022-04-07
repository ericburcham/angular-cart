import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AddressComponent } from './shared/components/address/address.component';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { DealSelectorComponent } from './components/deal-selector/deal-selector.component';
import { CartHeaderComponent } from './modules/shopping-cart/components/cart-header/cart-header.component';
import { NewCartItemComponent } from './components/new-cart-item/new-cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CartHeaderComponent,
    AddressComponent,
    DealSelectorComponent,
    CartItemsComponent,
    OrderSummaryComponent,
    NewCartItemComponent,
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
