using ShoppingCart.Entities;

namespace ShoppingCart.Providers;

internal static class CustomerProvider
{
    public static Customer BobaFett
    {
        get
        {
            const string address1 = "1234 Bescar Court";
            const string address2 = "Hangar 5678";
            const string addressee = "Boba Fett";
            const string city = "Mandalore";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, address2, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, address2, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 1,
                ShippingAddress = shippingAddress
            };
        }
    }

    public static Customer HanSolo
    {
        get
        {
            const string address1 = "1234 Falcon Court";
            const string address2 = "Hangar 5678";
            const string addressee = "Han Solo";
            const string city = "Coruscant";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, address2, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, address2, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 2,
                ShippingAddress = shippingAddress
            };
        }
    }

    public static Customer LandoCalrissian
    {
        get
        {
            const string address1 = "1234 Traitors Court";
            const string address2 = "Hangar 5678";
            const string addressee = "Lando Calrissian";
            const string city = "Cloud City";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, address2, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, address2, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 3,
                ShippingAddress = shippingAddress
            };
        }
    }

    public static Customer LukeSkywalker
    {
        get
        {
            const string address1 = "1234 Use The Force Street";
            const string address2 = "Hangar 5678";
            const string addressee = "Luke Skywalker";
            const string city = "Tattoine";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, address2, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, address2, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 4,
                ShippingAddress = shippingAddress
            };
        }
    }

    public static Customer PrincessLeia
    {
        get
        {
            const string address1 = "1234 Bikini Court";
            const string addressee = "Leia Organa";
            const string city = "Alderan";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, null, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, null, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 5,
                ShippingAddress = shippingAddress
            };
        }
    }

    public static Customer TheEmperor
    {
        get
        {
            const string address1 = "1234 Death Star Drive";
            const string address2 = "Hangar 5678";
            const string addressee = "Sheev Palpatine";
            const string city = "Exegol";
            const string state = "TX";
            const string zip = "99999";

            var billingAddress = BuildAddress("billing", address1, address2, addressee, city, state, zip);

            var shippingAddress = BuildAddress("shipping", address1, address2, addressee, city, state, zip);

            return new Customer
            {
                BillingAddress = billingAddress,
                Fullname = addressee,
                Id = 6,
                ShippingAddress = shippingAddress
            };
        }
    }

    private static Address BuildAddress(string addressType, string address1, string address2, string addressee, string city, string state, string zip)
    {
        return new Address
        {
            Address1 = address1,
            Address2 = address2,
            Addressee = addressee,
            AddressType = addressType,
            City = city,
            State = state,
            Zip = zip
        };
    }
        
    public static IList<Customer> AllCustomers => new List<Customer>
    {
        BobaFett,
        HanSolo,
        LandoCalrissian,
        LukeSkywalker,
        PrincessLeia,
        TheEmperor
    };

}