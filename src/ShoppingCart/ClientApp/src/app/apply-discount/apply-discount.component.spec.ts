import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

import { ApplyDiscountComponent } from './apply-discount.component';

describe('ApplyDiscountComponent', () => {
  let component: ApplyDiscountComponent;
  let fixture: ComponentFixture<ApplyDiscountComponent>;
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
      declarations: [ApplyDiscountComponent],
      providers: [{provide: ShoppingCartService, useValue:shoppingCartServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read shopping cart service items', () =>{
    expect(component.shoppingCartService.items.length).toBeTruthy();
  });

  
});
