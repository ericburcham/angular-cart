namespace ShoppingCart.Entities;

public class CartItem : ShopItem
{
    public string Deal => DealType.ToString();
    protected internal DealType DealType { get; set; }
    public int Quantity { get; set; }
}