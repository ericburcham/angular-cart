using System.ComponentModel;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Entities;
using ShoppingCart.Responses;

namespace ShoppingCart.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DealController
{
    [HttpGet]
    public AvailableDealsResponse Get()
    {
        var dealInfos = new List<DealInfo>();
        foreach (var dealType in Enum.GetValues<DealType>())
        {
            var deal = dealType.ToString();
            var description = GetAttributeOfType<DescriptionAttribute>(dealType).Description;

            dealInfos.Add(new DealInfo { Deal = deal, Description = description });
        }

        dealInfos = dealInfos.OrderBy(dealInfo => dealInfo.Description).ToList();

        return new AvailableDealsResponse { Data = dealInfos, Message = null, Ok = true };
    }

    private static T GetAttributeOfType<T>(Enum enumVal) where T : Attribute
    {
        var type = enumVal.GetType();
        var memInfo = type.GetMember(enumVal.ToString());
        var attributes = memInfo[0].GetCustomAttributes(typeof(T), false);
        return (attributes.Length > 0) ? (T)attributes[0] : null;
    }
}