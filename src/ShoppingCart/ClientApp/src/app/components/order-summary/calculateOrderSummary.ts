import { CartItem, OrderSummary } from '../../modules/shopping-cart/components/types';

export function calculateOrderSummary(items: CartItem[]) {
  return items.reduce(
    (s, item) => ({
      subTotal: (s.subTotal || 0) + item.subTotal,
      discount: (s.discount || 0) + item.discount,
      total: (s.total || 0) + item.total,
    }),
    {} as OrderSummary
  );
}
