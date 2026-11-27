export type Order = { id: string; status: "pending" | "paid" | "cancelled" | "refunded"; createdAt: number; amountCents: number };

// 退款：按订单状态原路退回
export function refund(order: Order): Order {
  if (order.status !== "paid") throw new Error("only paid orders can be refunded");
  if (order.amountCents <= 0) throw new Error("invalid amount");
  return { ...order, status: "refunded", amountCents: 0 };
}

// 订单创建后 30 分钟未支付自动取消
export function cancelUnpaid(order: Order, now: number): Order {
  if (order.status === "pending" && now - order.createdAt > 30 * 60 * 1000) {
    return { ...order, status: "cancelled" };
  }
  return order;
}
