import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user/user.service';
import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    // Stub UserService to provide the test username.
    userServiceStub = {
      fullName: 'Boba Fett',
      // TODO add address info
    };

    await TestBed.configureTestingModule({
      declarations: [AddressComponent],
      providers: [{provide: UserService, useValue: userServiceStub}]
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
