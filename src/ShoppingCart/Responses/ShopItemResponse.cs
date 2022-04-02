using ShoppingCart.Entities;

namespace ShoppingCart.Responses;

public class ShopItemResponse : Response<ShopItem>
{
}

public class ShoppingCartResponse : Response<IList<CartItem>>
{
}