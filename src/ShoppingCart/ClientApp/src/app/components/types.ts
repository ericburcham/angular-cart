export type ShopItem = {
    sku: string,
    description: string,
    price: number,
    id: number
};


export type DealType = 'BuyOneGetOne' | 'DollarOff' | 'TenPercentOff';

export type CartItemDTO = {
    deal: DealType,
    quantity: number,
    sku: string,
    description: string,
    price: number,
    id: number
};

export interface CartItem extends CartItemDTO {
    subTotal: number;
    total: number;
    discount: number;
}
