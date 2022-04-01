import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
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

  // -----------

  it('should have the correct header text', () =>{
    const headerElement = fixture.debugElement.nativeElement;
    expect(headerElement.querySelector('H1').textContent).toBe('My Shopping Cart');
  });

  it('should display user name from UserDataService', () =>{
    
  });

  // -----------

});
