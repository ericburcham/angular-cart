using ShoppingCart.Entities;

namespace ShoppingCart.Responses
{
    public class Response<TEntity>
        where TEntity : Entity
    {
        public bool Ok { get; set; }

        public TEntity Data { get; set; }

        public string Message { get; set; }
    }
}