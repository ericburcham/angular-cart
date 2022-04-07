import { CartItem } from '../types';

export function calculateCartItem(
  cartItem: CartItem,
  updatedCartItem?: Partial<CartItem>
) {
  const calculatedItem: CartItem = {
    ...cartItem,
    subTotal: cartItem.price * cartItem.quantity,
  };

  Object.assign(calculatedItem, updatedCartItem);

  switch (calculatedItem.deal) {
    case 'BuyOneGetOne':
      calculatedItem.discount =
        Math.floor(cartItem.quantity / 2) * cartItem.price;
      break;
    case 'TenPercentOff':
      calculatedItem.discount = calculatedItem.subTotal * 0.1;
      break;
    case 'DollarOff':
      calculatedItem.discount = cartItem.quantity;
      break;
    default:
      calculatedItem.discount = 0;
  }

  calculatedItem.total = calculatedItem.subTotal - calculatedItem.discount;

  return calculatedItem;
}
