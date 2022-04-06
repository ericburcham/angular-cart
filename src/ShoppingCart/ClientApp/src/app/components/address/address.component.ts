import { Component, Input } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
})
export class AddressComponent {
  @Input('address') address: any = {};
}
