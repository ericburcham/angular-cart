﻿// -----------------------------------------------------------------------
// <copyright file="CartItem.cs" company="Enterprise Products Partners L.P. (Enterprise)">
// © Copyright 2012 - 2022, Enterprise Products Partners L.P. (Enterprise), All Rights Reserved.
// Permission to use, copy, modify, or distribute this software source code, binaries or
// related documentation, is strictly prohibited, without written consent from Enterprise.
// For inquiries about the software, contact Enterprise: Enterprise Products Company Law
// Department, 1100 Louisiana, 10th Floor, Houston, Texas 77002, phone 713-381-6500.
// </copyright>
// -----------------------------------------------------------------------

namespace ShoppingCart.Entities;

public class CartItem : ShopItem
{
    public CartItem()
    {
    }

    public CartItem(ShopItem shopItem)
    {
        Description = shopItem.Description;
        Id = shopItem.Id + 100;
        Price = shopItem.Price;
        Sku = shopItem.Sku;
    }

    public string Deal => DealType.HasValue ? DealType.Value.ToString() : null;

    protected internal DealType? DealType { get; set; }
    
    public int Quantity { get; set; }
}