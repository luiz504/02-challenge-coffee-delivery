import React from 'react'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CardDelivery } from './components/CardDelivery'
import { CardPayment } from './components/CardPayment'
import { CardProducts } from './components/CardProducts'

import { ContainerCheckout, Labels } from './styles'

const addressPaymentSchema = z.object({
  zip_code: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2),
  district: z.string().min(1),
  number: z.number().optional(),
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
      number: 4000,
      street: 'Warner Blvd',
      complement: '',
      district: 'Lost Angeles',
      state: 'CA',
    },
    shouldFocusError: true,
  })
  const { handleSubmit } = formAdressPayment

  return (
    <FormProvider {...formAdressPayment}>
      <ContainerCheckout
        onSubmit={handleSubmit((data) => console.log('data', data))} //eslint-disable-line
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
