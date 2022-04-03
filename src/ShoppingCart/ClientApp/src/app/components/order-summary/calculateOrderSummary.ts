import { CartItem, OrderSummary } from '../types';

export function calculateOrderSummary(items: CartItem[]) {
  const summary = items.reduce((s, x) => {
    const summary = {
      subTotal: (s.subTotal || 0) + x.subTotal,
      discount: (s.discount || 0) + x.discount,
      total: (s.total || 0) + x.total,
    };

    return summary;
  }, {} as OrderSummary);
  return summary;
}
