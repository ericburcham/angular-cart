import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './cart-header.component.html',
})
export class CartHeaderComponent {
  @Input('customer') customer: any;
}
