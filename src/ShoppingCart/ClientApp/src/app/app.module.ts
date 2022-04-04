import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressComponent } from './components/address/address.component';
import { DiscountSelectorComponent } from './components/discount-selector/discount-selector.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressComponent,
    DiscountSelectorComponent,
    CartItemsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
