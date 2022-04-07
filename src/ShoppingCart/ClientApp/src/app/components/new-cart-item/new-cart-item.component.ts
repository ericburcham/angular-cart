import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';

import { CartItem, Product } from '../types';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'new-cart-item',
  templateUrl: 'new-cart-item.component.html',
})
export class NewCartItemComponent implements AfterViewInit {
  selectedProduct?: Partial<CartItem>;
  suggestions: Product[] = [];

  @Input('cartItems') cartItems: CartItem[] = [];
  @Output('onAdd') onAdd = new EventEmitter();
  @ViewChild('input') input: any;
  @ViewChild('suggestionList') suggestionList: any;

  constructor(public productService: ProductService) {}

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(200),
        distinctUntilChanged(),
        tap((e: any) => {
          const searchString = this.input.nativeElement.value;
          if (!searchString) {
            this.suggestions = [];
            return;
          }
          if (
            this.selectedProduct &&
            this.selectedProduct.sku === searchString
          ) {
            return;
          }
          this.productService
            .getSuggestions(searchString)
            .subscribe((r: any) => {
              if (r.ok) {
                this.suggestions = r.data;
              }
            });
        })
      )
      .subscribe();
  }

  handleSelect(e: any) {
    e.stopPropagation();
    const selectedSku = e.target.value;
    this.selectedProduct = this.suggestions.find((p) => p.sku === selectedSku);
  }

  handleAdd() {
    this.onAdd.emit({
      ...this.selectedProduct,
      quantity: 1,
    });
  }
}
