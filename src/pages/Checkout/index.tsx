import React from 'react'

import { CardDelivery } from './components/CardDelivery'
import { CardPayment } from './components/CardPayment'
import { CardProducts } from './components/CardProducts'

import { ContainerCheckout, Labels } from './styles'

export const Checkout: React.FC = () => (
  <ContainerCheckout>
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
)
