import { Component, OnInit } from '@angular/core';
import { calculateItem } from './components/cart-items/calculateItem';
import { CartItem, CartItemDTO } from './components/types';
import { CartItemService } from './services/cart-item/cart-item.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  title = 'app';
  
  user: any = {};
  cartItems: CartItem[] = [];

  constructor(
    public userService: UserService,
    public cartItemService: CartItemService
  ) {}

  ngOnInit(): void {
    
    this.userService.getUserInfo()
      .subscribe((r: any) => {
        if (r.ok) {
          this.user = r.data;
        }
      });

    this.cartItemService.getCartItems()
      .subscribe((r: any) => {
        if (r.ok) {
          this.cartItems = r.data.map((x: CartItem) => {
            return calculateItem(x);
          })
        }
      });
  }

}
