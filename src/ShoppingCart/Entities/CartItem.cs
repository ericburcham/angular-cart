namespace ShoppingCart.Entities;

public class CartItem : ShopItem
{
    public CartItem()
    {
    }

    public CartItem(ShopItem shopItem)
    {
        Description = shopItem.Description;
        Id = shopItem.Id + 100;
        Price = shopItem.Price;
        Sku = shopItem.Sku;
    }

    public string Deal => DealType.ToString();
    protected internal DealType DealType { get; set; }
    public int Quantity { get; set; }
}