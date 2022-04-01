namespace ShoppingCart.Entities;

public abstract class Entity : IIdentifiable<long>
{
    public long Id { get; set; }
}