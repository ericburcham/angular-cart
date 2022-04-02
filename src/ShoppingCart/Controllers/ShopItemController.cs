using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[ApiController]
[Route("[controller]")]
public class ShopItemController : ControllerBase
{
    private static readonly ShopItem[] ShopItems =
    {
        new() { Description = "Rubber Bands", Id = 1, Price = 5.99M, Sku = "RBND" },
        new() { Description = "Bananas", Id = 2, Price = 11.99M, Sku = "BNNA" },
        new() { Description = "Pepto Bismol", Id = 3, Price = 3.99M, Sku = "PPTO" }
    };

    [HttpGet]
    public ShopItemResponse Lookup(string search)
    {
        var suggestion = ShopItems
            .OrderBy(item => item.Description)
            .FirstOrDefault(item => item.Description.Contains(search));

        if (suggestion == null)
            return new ShopItemResponse
            {
                Data = null,
                Message = "No items match your search text.",
                Ok = false
            };

        return new ShopItemResponse
        {
            Data = suggestion,
            Message = null,
            Ok = true
        };
    }
}