import React from 'react'
import { useTheme } from 'styled-components'
import { MapPinLine } from 'phosphor-react'

import { CardBase, InfoRow } from '../shared.styles'

import { Input, InputsContainer } from './styles'

export const CardDelivery: React.FC = () => {
  const theme = useTheme()

  return (
    <CardBase>
      <form>
        <InfoRow>
          <MapPinLine size={22} color={theme['yellow-dark']} />

          <div>
            <h1>Delivery Address</h1>
            <span>
              Please provide the address where you would like to receive your
              order
            </span>
          </div>
        </InfoRow>

        <InputsContainer>
          <div className="row-1">
            <Input placeholder="Postal Code" />
          </div>

          <div className="row-2">
            <Input placeholder="Street" />
          </div>

          <div className="row-3">
            <Input placeholder="Number" />
            <Input placeholder="Complement" />
          </div>

          <div className="row-4">
            <Input placeholder="Neighborhood" />
            <Input placeholder="City" />
            <Input placeholder="ST" />
          </div>
        </InputsContainer>
      </form>
    </CardBase>
  )
}
