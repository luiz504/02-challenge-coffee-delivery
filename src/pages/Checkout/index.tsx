import React, { useContext } from 'react'
import { z } from 'zod'
import { addMinutes } from 'date-fns'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CardDelivery } from './components/CardDelivery'
import { CardPayment } from './components/CardPayment'
import { CardProducts } from './components/CardProducts'

import { ContainerCheckout, Labels } from './styles'
import { Order, OrdersContext } from '~/context/orders'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '~/context/cart'

const addressPaymentSchema = z.object({
  zip_code: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2),
  district: z.string().min(1),
  number: z.string().optional(),
  complement: z.string().optional(),
  payment_method: z.enum(['CREDIT-CARD', 'DEBIT-CARD', 'MONEY']),
})

export type FormAdressPaymentTypeFields = z.infer<typeof addressPaymentSchema>

export const Checkout: React.FC = () => {
  const formAdressPayment = useForm<FormAdressPaymentTypeFields>({
    resolver: zodResolver(addressPaymentSchema),
    defaultValues: {
      zip_code: '91522',
      city: 'Burbank',
      number: '4000',
      street: 'Warner Blvd',
      complement: '',
      district: 'Lost Angeles',
      state: 'CA',
    },
    shouldFocusError: true,
  })
  const { handleSubmit } = formAdressPayment

  const { createNewOrder } = useContext(OrdersContext)
  const { resetCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCreateNewOrder = (data: FormAdressPaymentTypeFields) => {
    const now = new Date()

    const deliveryStimativeInMinutes = 21
    const deliveryMaxTimeInMinutes = 31
    const newOrder: Order = {
      id: new Date().getTime().toString(),
      created_at: now,
      delivery_estimative: addMinutes(now, deliveryStimativeInMinutes),
      delivery_deadline: addMinutes(now, deliveryMaxTimeInMinutes),
      payment_method: data.payment_method,
      delivery: {
        city: data.city,
        district: data.district,
        street: data.street,
        number: data.number,
        state: data.state,
        complement: data.complement,
      },
    }

    createNewOrder(newOrder)
    resetCart()
    navigate(`/buy-success/${newOrder.id}`)
  }

  return (
    <FormProvider {...formAdressPayment}>
      <ContainerCheckout
        onSubmit={handleSubmit(handleCreateNewOrder)} //eslint-disable-line
      >
        <main>
          <section>
            <Labels>Complete your order</Labels>
            <CardDelivery />

            <CardPayment />
          </section>

          <section>
            <Labels>Selected Coffees</Labels>
            <CardProducts />
          </section>
        </main>
      </ContainerCheckout>
    </FormProvider>
  )
}
