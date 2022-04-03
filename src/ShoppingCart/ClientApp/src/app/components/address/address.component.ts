import { Component, Input, OnInit } from '@angular/core';

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
}
