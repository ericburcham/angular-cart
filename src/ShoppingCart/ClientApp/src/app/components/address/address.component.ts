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
export class AddressComponent implements OnInit {

  @Input('addressType') 
  addressType: string = '';

  address: Address;

  constructor(
    public user: UserService,
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {
    // this.address = user[`${this.addressType}Address`];
    this.address = new Address();
    this.address.address1 = "1234 Street Name"
    this.address.address2 = "Suite 100";
    this.address.city = "Houston";
    this.address.state = "TX";
    this.address.zip = "77044";
  }

  ngOnInit(): void {}

}
