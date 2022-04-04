import { CartItem } from '../types';

export function calculateItem(item: CartItem, data?: Partial<CartItem>) {

  const calculatedItem: CartItem = { 
    ...item,
    subTotal: item.price * item.quantity,
  };

  Object.assign(calculatedItem, data);
  
  switch (calculatedItem.deal) {
    case 'BuyOneGetOne':
      calculatedItem.discount = Math.floor(item.quantity / 2) * item.price;
      break;
    case 'TenPercentOff':
      calculatedItem.discount = calculatedItem.subTotal * 0.1;
      break;
    case 'DollarOff':
      calculatedItem.discount = item.quantity;
      break;
    default:
      calculatedItem.discount = 0;
  }

  calculatedItem.total = calculatedItem.subTotal - calculatedItem.discount;

  return calculatedItem;
}
