using ShoppingCart.Responses;

namespace ShoppingCart.Entities;

public class Customer : Entity
{
    public string Fullname { get; set; }

    public Address BillingAddress { get; set; }

    public Address ShippingAddress { get; set; }
}