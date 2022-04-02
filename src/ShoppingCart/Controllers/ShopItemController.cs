using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Providers;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShopItemController : ControllerBase
{
    [HttpGet]
    public ShopItemResponse Get()
    {
        var searchResults = ItemDataProvider.AllItems
            .OrderBy(item => item.Description)
            .ToList();

        return BuildResponse(searchResults);
    }

    [HttpGet("{search}")]
    public ShopItemResponse Get(string search)
    {
        var searchResults = ItemDataProvider.AllItems
            .OrderBy(item => item.Description)
            .Where(item => item.Description.Contains(search, StringComparison.OrdinalIgnoreCase))
            .ToList();

        if (searchResults.Any() == false)
            return new ShopItemResponse
            {
                Data = null,
                Message = "No items match your search text.",
                Ok = false
            };

        return BuildResponse(searchResults);
    }

    private static ShopItemResponse BuildResponse(List<ShopItem> searchResults)
    {
        return new ShopItemResponse
        {
            Data = searchResults,
            Message = null,
            Ok = true
        };
    }
}