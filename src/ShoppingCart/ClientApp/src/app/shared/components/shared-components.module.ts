import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressComponent } from 'src/app/shared/components/address/address.component';

@NgModule({
  declarations: [
    AddressComponent,
  ],
  exports: [AddressComponent],
  imports: [CommonModule],
})
export class SharedComponentsModule {}
