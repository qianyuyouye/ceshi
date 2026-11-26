export interface Order {
  id: string
  amount: number
  status: 'paid' | 'refunded' | 'cancelled'
}

export function refund(order: Order, reason: string): Order {
  if (order.status !== 'paid') {
    throw new Error('only paid orders can be refunded')
  }
  console.log(`refund ${order.id}: ${reason}`)
  return { ...order, status: 'refunded' }
}

export function cancel(order: Order): Order {
  return { ...order, status: 'cancelled' }
}
