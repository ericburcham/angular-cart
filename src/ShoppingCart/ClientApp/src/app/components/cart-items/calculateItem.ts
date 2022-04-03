import { CartItem, DealType } from '../types';

export function calculateItem(item: CartItem, data?: Partial<CartItem>) {

  const calculatedItem: CartItem = { 
    ...item,
    subTotal: item.price * item.quantity,
  };

  Object.assign(calculatedItem, data);
  
  switch (calculatedItem.deal) {
    case 'BuyOneGetOne':
      debugger;
      let subtotal = calculatedItem.subTotal;
      let quantity = item.quantity;
      let quantityFree = Math.floor(quantity / 2);
      let discount = quantityFree * item.price;
      calculatedItem.total = subtotal - discount;
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
