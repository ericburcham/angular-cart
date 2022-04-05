import { Component, Input } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  @Input('address') address: any = {};
}
