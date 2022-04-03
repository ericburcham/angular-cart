export type ShopItem = {
    sku: string,
    description: string,
    price: number,
    id: number
};

export type Deal = {
    deal: 'BuyOneGetOne',
    description: 'Buy 1 get one free deal'
};

export type DealType = 'BuyOneGetOne' | 'DollarOff' | 'NoDeal' | 'TenPercentOff';

export type CartItemDTO = {
    deal: DealType,
    quantity: number,
    sku: string,
    description: string,
    price: number,
    id: number,
};

export interface CartItem extends CartItemDTO {
    subTotal: number;
    total: number;
    discount: number;
}

export type OrderSummary = {
    subTotal: number;
    discount: number;
    total: number;
};
