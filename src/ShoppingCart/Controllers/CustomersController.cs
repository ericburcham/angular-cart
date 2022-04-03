using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Providers;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    [HttpGet("{customerId:int}")]
    public CustomerResponse Get(int customerId)
    {
        var customer = CustomerProvider.AllCustomers.SingleOrDefault(customer => customer.Id == customerId);

        if (customer == null)
        {
            customer = CustomerProvider.BobaFett;
            customer.Id = customerId;
        }

        return new CustomerResponse
        {
            Data = customer,
            Message = null,
            Ok = true
        };
    }
}