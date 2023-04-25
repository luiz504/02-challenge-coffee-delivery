import React, { createContext, useState } from 'react'
import { PaymentMethod } from '~/pages/Checkout/components/CardPayment'

export type Order = {
  id: string
  created_at: Date
  delivery: {
    street: string
    number?: string | number
    district: string
    city: string
    state: string
    complement?: string
  }
  delivery_estimative: Date
  delivery_deadline: Date
  payment_method: PaymentMethod
}

type OrdersContextType = {
  orders: Order[]
  createNewOrder: (order: Order) => void
}
export const OrdersContext = createContext({} as OrdersContextType)

export const OrdersContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([])

  function createNewOrder(order: Order) {
    setOrders((state) => [...state, order])
  }

  return (
    <OrdersContext.Provider value={{ orders, createNewOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}
