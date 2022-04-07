using ShoppingCart.Entities;

namespace ShoppingCart.Providers
{
    internal static class ItemDataProvider
    {
        public static Product LukesLightsaber = new()
            { Description = "Luke Skywalker's Lightsaber", Id = 4, Price = 50000, Sku = "LSLS" };

        public static Product ObiWansLightsaber = new()
            { Description = "Obi-Wan Kenobi's Lightsaber", Id = 5, Price = 50000, Sku = "LSOW" };

        public static Product VadersLightsaber = new()
            { Description = "Darth Vader's Lightsaber", Id = 6, Price = 60000, Sku = "LSDV" };

        public static Product HansBlaster = new()
            { Description = "Han Solo's Blaster", Id = 7, Price = 10000, Sku = "BLHS" };

        public static Product ChewysBowcaster = new()
            { Description = "Chebacca's Bow Caster", Id = 8, Price = 5000, Sku = "BCCB" };

        public static Product BobasJetpack = new()
            { Description = "Boba Fett's Jet Pack", Id = 9, Price = 20000, Sku = "JPBF" };

        public static Product BobasHelmet = new()
            { Description = "Boba Fett's Helmet", Id = 10, Price = 100000, Sku = "HMBF" };

        public static Product LandSpeeder =>
            new() { Description = "Land Speeder", Id = 1, Price = 12000, Sku = "SPLN" };

        public static Product SpeederBike =>
            new() { Description = "Speeder Bike", Id = 2, Price = 15000, Sku = "SPBK" };

        public static Product R2D2 => new()
            { Description = "A rusty old R2 unit", Id = 3, Price = 18000, Sku = "PPTO" };

        public static IList<Product> AllItems => new List<Product>
        {
            LandSpeeder,
            SpeederBike,
            R2D2,
            LukesLightsaber,
            ObiWansLightsaber,
            VadersLightsaber,
            HansBlaster,
            ChewysBowcaster,
            BobasHelmet,
            BobasJetpack
        };
    }
}