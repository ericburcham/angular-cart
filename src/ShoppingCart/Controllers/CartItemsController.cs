using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Providers;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemsController : ControllerBase
    {
        [HttpGet("{customerId:int}")]
        public CartItemListResponse Get(int customerId)
        {
            var items = new List<CartItem>
            {
                new(ItemDataProvider.BobasHelmet)
                {
                    DealType = null,
                    Quantity = 2
                },
                new(ItemDataProvider.ChewysBowcaster)
                {
                    DealType = null,
                    Quantity = 3
                },
            };

            return new CartItemListResponse
            {
                Data = items,
                Message = null,
                Ok = true
            };
        }
    }
}