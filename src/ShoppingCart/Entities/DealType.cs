using System.ComponentModel;

namespace ShoppingCart.Entities;

public enum DealType
{
    [Description("Buy 1 get one free deal")]
    BuyOneGetOne,

    [Description("$1 off deal")] DollarOff,

    [Description("10% off deal")] TenPercentOff,
}