using ShoppingCart.Entities;

namespace ShoppingCart.Responses;

public class Address : Entity
{
    public string AddressType { get; set; }

    public string Addressee { get; set; }

    public string Address1 { get; set; }

    public string Address2 { get; set; }

    public string City { get; set; }

    public string State { get; set; }

    public string Zip { get; set; }
}