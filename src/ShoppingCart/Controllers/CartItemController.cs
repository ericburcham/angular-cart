using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : ControllerBase
    {

        [HttpGet("{customerId:int}")]
        public ShoppingCartResponse Get(int customerId)
        {
            var items = new List<CartItem>()

            {
                new() { DealType = DealType.BuyOneGetOne, Description = "Rubber Bands", Id = 1, Price = 5.99M, Quantity = 2, Sku = "RBND" },
                new() { DealType = DealType.DollarOff, Description = "Bananas", Id = 2, Price = 11.99M, Quantity = 3, Sku = "BNNA" },
            };

            return new ShoppingCartResponse
            {
                Data = items,
                Message = null,
                Ok = true
            };
        }
    }
}
