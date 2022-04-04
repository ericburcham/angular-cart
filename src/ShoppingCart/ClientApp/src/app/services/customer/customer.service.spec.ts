import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('CustomerService', () => {

  // This is our system under test.
  let customerService: CustomerService;

  // This is an HttpClient.
  let httpClient: HttpClient;

  // This is how we test calls to our HttpClient.
  let testController: HttpTestingController;

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    testController.verify();
  });

  beforeEach(() => {
    // Configure our TestBed so it can create an HttpClient.
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Get an HttpClient to test with.
    httpClient = TestBed.inject(HttpClient);

    // Get an HttpTestingController for making assertions against the HttpClient.
    testController = TestBed.inject(HttpTestingController);

    // Instantiate a CustomerService so we can test it.
    customerService = new CustomerService(httpClient);
  });

  describe('#getCustomerInfo', () => {
    // Test that the `getCustomerInfo` method internally creates a GET request to the correct URL.
    it('should make a get request to the correct URL when given a customerId', () => {

      // The customer service is bound to this specific URL, not including the '1' on
      // the end, which we pass.  This allows us to call `getCustomerInfo` with the
      // number 1 later, and make an expectation that the URL called through the HttpClient
      // is exactly what it should be.
      const expectedRequestUrl = 'http://localhost:44462/api/customers/1';

      // The customer service just returns whatever comes back from the server.
      // We don't need to make any special effort here to ensure that we're using
      // some data type that matches our actual expected response.
      const expectedResponse: any = { responseText: 'I Do Not Matter One Bit.' };

      // Exercise the customer service.
      customerService.getCustomerInfo(1).subscribe({
        // This `subscribe` callback asserts that correct data was returned.
        // It is invoked when we flush our request later.
        next: actualResponse => expect(actualResponse).toEqual(expectedResponse, 'should return the expected response'),
        error: fail
      });

      // The following `expectOne` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne` would throw.
      const mockRequest = testController.expectOne(expectedRequestUrl);

      // Assert that the request made was a GET.
      expect(mockRequest.request.method).toEqual('GET');

      // Respond with mock data, causing the Observable to resolve.
      mockRequest.flush(expectedResponse);
    });

    it('should make a get request to the correct URL when not given a customerId', () => {

      // The customer service is bound to this specific URL, not including the '1' on
      // the end, which we pass.  This allows us to call `getCustomerInfo` with the
      // number 1 later, and make an expectation that the URL called through the HttpClient
      // is exactly what it should be.
      const expectedRequestUrl = 'http://localhost:44462/api/customers/0';

      // The customer service just returns whatever comes back from the server.
      // We don't need to make any special effort here to ensure that we're using
      // some data type that matches our actual expected response.
      const expectedResponse: any = { responseText: 'I Do Not Matter One Bit.' };

      // Exercise the customer service.
      customerService.getCustomerInfo().subscribe({
        // This `subscribe` callback asserts that correct data was returned.
        // It is invoked when we flush our request later.
        next: actualResponse => expect(actualResponse).toEqual(expectedResponse, 'should return the expected response'),
        error: fail
      });

      // The following `expectOne` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne` would throw.
      const mockRequest = testController.expectOne(expectedRequestUrl);

      // Assert that the request made was a GET.
      expect(mockRequest.request.method).toEqual('GET');

      // Respond with mock data, causing the Observable to resolve.
      mockRequest.flush(expectedResponse);
    });
  });
});
