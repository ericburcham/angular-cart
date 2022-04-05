import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent', () =>{
  // System under test
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [HeaderComponent]}).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  describe('when a customer has a fullName', () =>{
    // Test customer
    let testCustomer: any;

    // Extract DOM values here for later assertions.
    let fullName: string;

    beforeEach(() => {
      // Create a test customer.
      testCustomer = {
        fullName: 'Boba Fett'
      }

      // Set the `customer` input's value to the test customer.
      component.customer = testCustomer;

      // Perform initial template binding.
      fixture.detectChanges();

      // Read values from the DOM
      const debugElement = fixture.debugElement;
      fullName = debugElement.query(By.css('.customer-fullName')).nativeElement.textContent;
    });

    it ('should have the correct full name', () => {
      expect(fullName).toBe(`Hi ${testCustomer.fullName}`)
    });
  });
})