namespace ShoppingCart.Entities;

public interface IIdentifiable<TKey>
    where TKey : IEquatable<TKey>
{
    TKey Id { get; set; }
}