import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

import { DealSelectorComponent } from './deal-selector.component';

describe('DealSelectorComponent', () => {
  let component: DealSelectorComponent;
  let fixture: ComponentFixture<DealSelectorComponent>;
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
      declarations: [DealSelectorComponent],
      providers: [{provide: ShoppingCartService, useValue:shoppingCartServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealSelectorComponent);
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
