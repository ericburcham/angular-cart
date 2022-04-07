export type Product = {
  description: string;
  id: number;
  price: number;
  sku: string;
};

export type Deal = {
  deal: 'BuyOneGetOne';
  description: 'Buy 1 get one free deal';
};

export type DealType =
  | 'BuyOneGetOne'
  | 'DollarOff'
  | 'NoDeal'
  | 'TenPercentOff';

export type CartItemDTO = {
  deal: DealType;
  description: string;
  id: number;
  price: number;
  quantity: number;
  sku: string;
};

export interface CartItem extends CartItemDTO {
  discount: number;
  subTotal: number;
  total: number;
}

export type OrderSummary = {
  discount: number;
  subTotal: number;
  total: number;
};
