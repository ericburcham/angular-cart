import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { UserService } from 'src/app/services/user/user.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'address',
  styleUrls: ['./address.component.css'],
  template: `
    <strong>{{addressType}} address:</strong>
  `,
})

export class AddressComponent implements OnInit {
  @Input('addressType') addressType: string = '';
  constructor(
    public user: UserService,
    public shoppingCart: ShoppingCartService,
    public api: ApiService,
  ) {}

  ngOnInit(): void {}
}
