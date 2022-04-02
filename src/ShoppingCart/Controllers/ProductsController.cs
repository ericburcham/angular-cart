using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Providers;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public ProductListResponse Get()
    {
        var searchResults = ItemDataProvider.AllItems
            .OrderBy(item => item.Description)
            .ToList();

        return BuildResponse(searchResults);
    }

    [HttpGet("{search}")]
    public ProductListResponse Get(string search)
    {
        var searchResults = ItemDataProvider.AllItems
            .OrderBy(item => item.Description)
            .Where(item => item.Description.Contains(search, StringComparison.OrdinalIgnoreCase))
            .ToList();

        if (searchResults.Any() == false)
            return new ProductListResponse
            {
                Data = null,
                Message = "No items match your search text.",
                Ok = false
            };

        return BuildResponse(searchResults);
    }

    private static ProductListResponse BuildResponse(IList<Product> searchResults)
    {
        return new ProductListResponse
        {
            Data = searchResults,
            Message = null,
            Ok = true
        };
    }
}