using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers
{
    public class UserController : ControllerBase
    {
        [HttpGet]
        public UserResponse Get(long userId)
        {
            var address1 = "12345 Galactic Way";
            var address2 = "Hangar 5678";
            var addressee = "Boba Fett";
            var city = "Coruscant";
            var state = "TX";
            var zip = "99999";

            var billingAddress = new Address
            {
                Address1 = address1,
                Address2 = address2,
                Addressee = addressee,
                AddressType = "Billing",
                City = city,
                State = state,
                Zip = zip
            };

            var shippingAddress = new Address
            {
                Address1 = address1,
                Address2 = address2,
                Addressee = addressee,
                AddressType = "Shipping",
                City = city,
                State = state,
                Zip = zip
            };

            return new UserResponse
            {
                Data = new User
                {
                    BillingAddress = billingAddress,
                    Fullname = addressee,
                    Id = userId,
                    ShippingAddress = shippingAddress
                },
                Message = null,
                Ok = true
            };
        }
    }
}