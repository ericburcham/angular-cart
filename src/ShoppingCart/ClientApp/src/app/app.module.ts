import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressComponent } from './components/address/address.component';
import { DealSelectorComponent } from './components/deal-selector/deal-selector.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { NewCartItemComponent } from './components/new-cart-item/new-cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressComponent,
    DealSelectorComponent,
    CartItemsComponent,
    OrderSummaryComponent,
    NewCartItemComponent
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
