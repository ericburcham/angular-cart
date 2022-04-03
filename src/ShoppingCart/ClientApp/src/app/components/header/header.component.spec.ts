import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerService } from 'src/app/services/customer/customer.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let customerServiceStub: Partial<CustomerService>;

  beforeEach(async () => {
    // Stub CustomerService to provide the test username.
    // TODO:  Fix this.
    customerServiceStub = {
      fullName: 'Boba Fett'
    };

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{provide: CustomerService, useValue: customerServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct header text', () =>{
    const headerElement = fixture.debugElement.nativeElement;
    expect(headerElement.querySelector('H1').textContent).toBe('My Shopping Cart');
  });

  it('should display customer name from CustomerService', () =>{
    const headerElement = fixture.debugElement.nativeElement;
    expect(headerElement.querySelector('.customer-fullName').textContent).toBe('Boba Fett');
  });

});
