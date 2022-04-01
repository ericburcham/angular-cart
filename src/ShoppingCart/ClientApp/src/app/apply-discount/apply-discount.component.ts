import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-apply-discount',
  templateUrl: './apply-discount.component.html',
  styleUrls: ['./apply-discount.component.css']
})
export class ApplyDiscountComponent implements OnInit {

  constructor(public shoppingCartService : ShoppingCartService) { }

  ngOnInit(): void {
  }

  

}
