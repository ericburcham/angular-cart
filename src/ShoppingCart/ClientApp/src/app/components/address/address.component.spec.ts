import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let customerServiceStub: any;

  beforeEach(async () => {
    // Stub CustomerService to provide the test username.
    customerServiceStub = {
      data: 'Boba Fett',
      // TODO add address info
    };

    await TestBed.configureTestingModule({
      declarations: [AddressComponent],
      providers: [{provide: CustomerService, useValue: customerServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct header text', () =>{
    const e = fixture.debugElement.nativeElement;
    expect(e.querySelector('').textContent).toBe('ANYTHING');
  });

});
