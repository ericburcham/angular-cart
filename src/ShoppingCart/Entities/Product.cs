namespace ShoppingCart.Entities
{
    public class Product : Entity
    {
        public string Sku { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }
    }
}