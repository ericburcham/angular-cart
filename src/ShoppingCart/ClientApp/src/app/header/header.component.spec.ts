import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    // Stub UserService to provide the test username.
    userServiceStub = {
      username: 'Boba Fett'
    };

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{provide: UserService, useValue: userServiceStub}]
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

  it('should display user name from UserDataService', () =>{
    const headerElement = fixture.debugElement.nativeElement;
    expect(headerElement.querySelector('.username').textContent).toBe('Boba Fett');
  });

});
