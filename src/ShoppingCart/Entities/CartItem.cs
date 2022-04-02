namespace ShoppingCart.Entities;

public class CartItem : Product
{
    public CartItem()
    {
    }

    public CartItem(Product product)
    {
        Description = product.Description;
        Id = product.Id + 100;
        Price = product.Price;
        Sku = product.Sku;
    }

    public string Deal => DealType.ToString();
    protected internal DealType DealType { get; set; }
    public int Quantity { get; set; }
}