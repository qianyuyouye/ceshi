export interface Order { id: string; status: string; paid: boolean }

export function cancel(order: Order): Order {
  return { ...order, status: "cancelled" };
}

export function refund(order: Order, reason: string): Order {
  if (!order.paid) {
    throw new Error("未支付订单不能退款");
  }
  return { ...order, status: "refunded", refundedAt: Date.now() };
}
