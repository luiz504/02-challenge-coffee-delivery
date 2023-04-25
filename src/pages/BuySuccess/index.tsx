import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { differenceInMinutes } from 'date-fns'

import deliveryImg from '~/assets/delivering.png'

import { Order, OrdersContext } from '~/context/orders'

import {
  BuySuccessContainer,
  CardInfo,
  InforList,
  InfoBlock,
  TitleRow,
} from './styles'

import { PaymentMethod } from '../Checkout/components/CardPayment'

export const BuySuccess: React.FC = () => {
  const navigate = useNavigate()
  const { orderId } = useParams()
  const theme = useTheme()

  const { orders } = useContext(OrdersContext)

  const orderData = orders.find((order) => order.id === orderId)

  useEffect(() => {
    if (!orderData) navigate('/')
  }, [orderData, navigate])
  if (!orderData) return null

  const { delivery } = orderData as Order

  const paymentDict: Record<PaymentMethod, string> = {
    'CREDIT-CARD': 'Credit Card',
    'DEBIT-CARD': 'Debit Card',
    MONEY: 'Money',
  }

  const deliveryStimatedTime = differenceInMinutes(
    orderData.delivery_estimative,
    new Date(),
  )
  const deliveryDeadlineTime = differenceInMinutes(
    orderData.delivery_deadline,
    new Date(),
  )

  return (
    <BuySuccessContainer>
      <main>
        <section>
          <TitleRow>
            <h1>Yay! Order confirmed</h1>
            <span>Now just wait and soon the coffee will arrive to you</span>
          </TitleRow>

          <CardInfo>
            <InforList>
              <InfoBlock>
                <div className="circle" style={{ background: theme.purple }}>
                  <MapPin size={16} />
                </div>
                <div className="info-section">
                  <p>
                    Delivery at{' '}
                    <strong>
                      {delivery.street}, {delivery.number}
                      {delivery.complement ? `, ${delivery.complement}` : ''}
                    </strong>
                    <br />
                    {delivery.district} {' - '} {delivery.city},{' '}
                    {delivery.state}
                  </p>
                </div>
              </InfoBlock>
              <InfoBlock>
                <div className="circle" style={{ background: theme.yellow }}>
                  <Timer size={16} />
                </div>
                <div className="info-section">
                  <p>
                    Estimated delivery time
                    <br />
                    <strong>
                      {deliveryStimatedTime} minutes to {deliveryDeadlineTime}{' '}
                      minutes
                    </strong>
                  </p>
                </div>
              </InfoBlock>
              <InfoBlock>
                <div
                  className="circle"
                  style={{ background: theme['yellow-dark'] }}
                >
                  <CurrencyDollar size={16} />
                </div>
                <div className="info-section">
                  <p>
                    Payment on delivery
                    <br />
                    <strong>{paymentDict[orderData.payment_method]}</strong>
                  </p>
                </div>
              </InfoBlock>
            </InforList>
          </CardInfo>
        </section>

        <div className="img-placeholder">
          <img draggable={false} src={deliveryImg} alt="" />
        </div>
      </main>
    </BuySuccessContainer>
  )
}
