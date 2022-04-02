namespace ShoppingCart.Responses
{
    public class Response<TPayload>
    {
        public bool Ok { get; set; }

        public TPayload Data { get; set; }

        public string Message { get; set; }
    }
}