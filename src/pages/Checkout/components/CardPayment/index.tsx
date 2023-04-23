import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { CardBase, InfoRow } from '../shared.styles'
import { BtnsRows, PaymentOptionBtn } from './styles'

type PaymentMethod = 'CREDIT-CARD' | 'DEBIT-CARD' | 'MONEY'

export const CardPayment: React.FC = () => {
  const theme = useTheme()

  const [paymentMethod, setpaymentMethod] = useState<PaymentMethod | null>(null)

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
          onClick={() => setpaymentMethod('CREDIT-CARD')}
          selected={paymentMethod === 'CREDIT-CARD'}
          aria-label="Payment Method Credit Card"
        >
          <CreditCard size={16} /> Credit Card
        </PaymentOptionBtn>

        <PaymentOptionBtn
          type="button"
          onClick={() => setpaymentMethod('DEBIT-CARD')}
          selected={paymentMethod === 'DEBIT-CARD'}
          aria-label="Payment Method Debit Card"
        >
          <Bank size={16} /> Debit Card
        </PaymentOptionBtn>

        <PaymentOptionBtn
          type="submit"
          onClick={() => setpaymentMethod('MONEY')}
          selected={paymentMethod === 'MONEY'}
          aria-label="Payment Method Money"
        >
          <Money size={16} /> Money
        </PaymentOptionBtn>
      </BtnsRows>
    </CardBase>
  )
}
