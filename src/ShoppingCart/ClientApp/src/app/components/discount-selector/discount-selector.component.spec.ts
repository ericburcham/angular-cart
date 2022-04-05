import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

import { DiscountSelectorComponent } from './discount-selector.component';

describe('DiscountSelectorComponent', () => {
  let component: DiscountSelectorComponent;
  let fixture: ComponentFixture<DiscountSelectorComponent>;
  let shoppingCartServiceStub : Partial<ShoppingCartService>;

  beforeEach(async () => {
    shoppingCartServiceStub = {
      items: [
        {
          SKU: "ABCDEFG"
        },
        {
          SKU: "1234567"
        }
      ]
    };

    await TestBed.configureTestingModule({
      declarations: [DiscountSelectorComponent],
      providers: [{provide: ShoppingCartService, useValue:shoppingCartServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read shopping cart service items', () =>{
    expect(component.cartItems.length).toBeTruthy();
  });
});
