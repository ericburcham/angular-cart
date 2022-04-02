import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { UserService } from 'src/app/services/user/user.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

class Address { 
  addressee = '';
  address1 = '';
  address2 = '';
  city = '';
  state = '';
  zip = '';
}

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {

  @Input('data') data: any = {};

  constructor(
    public user: UserService,
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}

}
