import { CartItem, DealType } from '../types';

export function calculateItem(item: CartItem, deal?: DealType) {

  const calculatedItem: CartItem = { 
    ...item,
    subTotal: item.price * item.quantity,
  };

  if (deal) {
    calculatedItem.deal = deal;
  }

  switch (calculatedItem.deal) {
    case 'BuyOneGetOne':
      calculatedItem.total = Math.floor(item.quantity / 2) * item.price;
      break;
    case 'TenPercentOff':
      calculatedItem.total = item.quantity * item.price * 0.9;
      break;
    case 'DollarOff':
      calculatedItem.total = calculatedItem.subTotal - item.quantity;
      break;
    default:
      calculatedItem.total = calculatedItem.subTotal;
  }

  calculatedItem.discount = calculatedItem.subTotal - calculatedItem.total;

  return calculatedItem;
}
