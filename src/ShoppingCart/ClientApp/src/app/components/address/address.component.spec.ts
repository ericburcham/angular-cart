import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  // System under test.
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AddressComponent] }).compileComponents();
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
  });

  describe('when an address does not have a value for address2', () => {
    // Test address
    let testAddress: any;

    // Extract DOM values here for later assertions.
    let addressType: string;
    let addressee: string;
    let address1: string;
    let address2: any;
    let city: string;
    let state: string;
    let zip: string;

    beforeEach(() => {
      // Create a test address.
      testAddress = {
        addressType: 'addressWithoutAddress2.addressType',
        addressee: 'addressWithoutAddress2.addressee',
        address1: 'addressWithoutAddress2.address1',
        city: 'addressWithoutAddress2.city',
        state: 'addressWithoutAddress2.state',
        zip: 'addressWithoutAddress2.zip',
      };

      // Set the `data` input's value to the test address.
      component.address = testAddress;

      // Perform initial template binding.
      fixture.detectChanges();

      // Read values from the DOM
      const debugElement = fixture.debugElement;
      addressType = debugElement.query(By.css('.address-type')).nativeElement.textContent;
      addressee = debugElement.query(By.css('.addressee')).nativeElement.textContent;
      address1 = debugElement.query(By.css('.address1')).nativeElement.textContent;
      address2 = debugElement.query(By.css('.address2')); // Cannot read `nativeElement` as we expect the query result to be null.
      city = debugElement.query(By.css('.city')).nativeElement.textContent;
      state = debugElement.query(By.css('.state')).nativeElement.textContent;
      zip = debugElement.query(By.css('.zip')).nativeElement.textContent;
    });

    it('should have the correct addressType', () => {
      expect(addressType).toBe(`${testAddress.addressType} address`);
    });

    it('should have the correct addressee', () => {
      expect(addressee).toBe(testAddress.addressee);
    });

    it('should have the correct address1', () => {
      expect(address1).toBe(testAddress.address1);
    });

    it('should have the correct city', () => {
      expect(city).toBe(testAddress.city);
    });

    it('should have the correct state', () => {
      expect(state).toBe(testAddress.state);
    });

    it('should have the correct zip code', () => {
      expect(zip).toBe(testAddress.zip);
    });

    it('should not have an address2', () => {
      expect(address2).toBe(null);
    });
  });

  describe('when an address has a value for address2', () => {
    // Test address.
    let testData: any;

    // Extract DOM values here for later assertions.
    let addressType: string;
    let addressee: string;
    let address1: string;
    let address2: string;
    let city: string;
    let state: string;
    let zip: string;
    beforeEach(() => {
      // Create a test address.
      testData = {
        addressType: 'addressWithAddress2.addressType',
        addressee: 'addressWithAddress2.addressee',
        address1: 'addressWithAddress2.address1',
        address2: 'addressWithAddress2.address2',
        city: 'addressWithAddress2.city',
        state: 'addressWithAddress2.state',
        zip: 'addressWithAddress2.zip',
      };

      // Set the `data` input's value to the test address.
      component.address = testData;

      // Perform initial template binding.
      fixture.detectChanges();

      // Read values from the DOM
      const debugElement = fixture.debugElement;
      addressType = debugElement.query(By.css('.address-type')).nativeElement.textContent;
      addressee = debugElement.query(By.css('.addressee')).nativeElement.textContent;
      address1 = debugElement.query(By.css('.address1')).nativeElement.textContent;
      address2 = debugElement.query(By.css('.address2')).nativeElement.textContent;
      city = debugElement.query(By.css('.city')).nativeElement.textContent;
      state = debugElement.query(By.css('.state')).nativeElement.textContent;
      zip = debugElement.query(By.css('.zip')).nativeElement.textContent;
    });

    it('should have the correct addressType', () => {
      expect(addressType).toBe(`${testData.addressType} address`);
    });

    it('should have the correct addressee', () => {
      expect(addressee).toBe(testData.addressee);
    });

    it('should have the correct address1', () => {
      expect(address1).toBe(testData.address1);
    });

    it('should have the correct address2', () => {
      expect(address2).toBe(testData.address2);
    });

    it('should have the correct city', () => {
      expect(city).toBe(testData.city);
    });

    it('should have the correct state', () => {
      expect(state).toBe(testData.state);
    });

    it('should have the correct zip code', () => {
      expect(zip).toBe(testData.zip);
    });
  });
});
