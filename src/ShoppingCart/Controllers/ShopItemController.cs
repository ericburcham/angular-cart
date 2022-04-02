using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Providers;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShopItemController : ControllerBase
{
    [HttpGet("{search}")]
    public ShopItemResponse Get(string search)
    {
        var suggestion = ItemDataProvider.AllItems
            .OrderBy(item => item.Description)
            .Where(item => item.Description.Contains(search, StringComparison.OrdinalIgnoreCase))
            .ToList();

        if (suggestion.Any() == false)
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