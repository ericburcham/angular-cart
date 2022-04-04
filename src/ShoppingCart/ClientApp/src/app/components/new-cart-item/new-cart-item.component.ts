import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { CartItem, OrderSummary, Product } from '../types';

@Component({
  selector: 'new-cart-item',
  templateUrl: 'new-cart-item.component.html'
})

export class NewCartItemComponent {

  selectedProduct?: Partial<CartItem>;
  suggestions: Product[] = [];

  @Input('cartItems') cartItems: CartItem[] = [];
  @Output('onAdd') onAdd = new EventEmitter();

  @ViewChild('suggestionList') suggestionList: any;

  constructor(
    public productService: ProductService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
  }

  handleKey(e: any) {
    e.stopPropagation();
    const searchString = e.target.value;
    this.productService.getSuggestions(searchString)
      .subscribe((r: any) => {
        if (r.ok) {
          this.suggestions = r.data;
        }
      });
  }

  handleSelect(e: any) {
    const selectedSku = e.target.value;
    this.selectedProduct = this.suggestions.find(p => p.sku === selectedSku);
  }

  handleAdd() {
    this.onAdd.emit({
      ...this.selectedProduct,
      quantity: 1,
    });
  }
}

