import React from 'react'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { CardBase, InfoRow } from '../shared.styles'
import { BtnsRows, PaymentOptionBtn, ErrorFeedback } from './styles'

import { FormAdressPaymentTypeFields } from '../..'

export type PaymentMethod = 'CREDIT-CARD' | 'DEBIT-CARD' | 'MONEY'

export const CardPayment: React.FC = () => {
  const theme = useTheme()
  const {
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<FormAdressPaymentTypeFields>()

  const paymentSelected = watch('payment_method')

  const paymentError = errors.payment_method

  function handleSelectPaymentMethod(method: PaymentMethod) {
    clearErrors('payment_method')
    setValue('payment_method', method)
  }

  return (
    <CardBase>
      <InfoRow>
        <CurrencyDollar size={22} color={theme.purple} />

        <div>
          <h1>Payment</h1>
          <span>
            Payment is made upon delivery. Choose the payment method you prefer
          </span>
        </div>
      </InfoRow>

      <BtnsRows>
        <PaymentOptionBtn
          type="button"
          onClick={() => handleSelectPaymentMethod('CREDIT-CARD')}
          selected={paymentSelected === 'CREDIT-CARD'}
          aria-label="Payment Method Credit Card"
        >
          <CreditCard size={16} /> Credit Card
        </PaymentOptionBtn>

        <PaymentOptionBtn
          type="button"
          onClick={() => handleSelectPaymentMethod('DEBIT-CARD')}
          selected={paymentSelected === 'DEBIT-CARD'}
          aria-label="Payment Method Debit Card"
        >
          <Bank size={16} /> Debit Card
        </PaymentOptionBtn>

        <PaymentOptionBtn
          type="submit"
          onClick={() => handleSelectPaymentMethod('MONEY')}
          selected={paymentSelected === 'MONEY'}
          aria-label="Payment Method Money"
        >
          <Money size={16} /> Money
        </PaymentOptionBtn>

        {paymentError && <ErrorFeedback>Select a payment method</ErrorFeedback>}
      </BtnsRows>
    </CardBase>
  )
}
