import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('CustomerService', () => {
  let httpMock: HttpTestingController;
  let service: CustomerService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient, { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected customers',
    (done: DoneFn) => {
      const expectedCustomer = {
        fullname: "Boba Fett"
      };

      httpClientSpy.get.and.returnValue(asyncData(expectedCustomer));

      service.getCustomerInfo().subscribe({
        next: customer => {
          expect(customer)
            .toEqual(expectedCustomer);
          done();
        },
        error: done.fail
      });
    });
});
