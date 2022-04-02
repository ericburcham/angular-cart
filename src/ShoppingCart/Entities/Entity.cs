namespace ShoppingCart.Entities;

public abstract class Entity : IIdentifiable<int>
{
    public int Id { get; set; }
}