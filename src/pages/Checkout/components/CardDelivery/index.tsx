import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { MapPinLine } from 'phosphor-react'

import { CardBase, InfoRow } from '../shared.styles'

import { Input, InputsContainer } from './styles'

import { FormAdressPaymentTypeFields } from '../..'

export const CardDelivery: React.FC = () => {
  const theme = useTheme()
  const { register } = useFormContext<FormAdressPaymentTypeFields>()

  return (
    <CardBase>
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
          <Input placeholder="Postal Code" {...register('zip_code')} />
        </div>

        <div className="row-2">
          <Input placeholder="Street" {...register('street')} />
        </div>

        <div className="row-3">
          <Input placeholder="Number" {...register('number')} />
          <Input placeholder="Complement" {...register('complement')} />
        </div>

        <div className="row-4">
          <Input placeholder="District" {...register('district')} />
          <Input placeholder="City" {...register('city')} />
          <Input placeholder="ST" {...register('state')} />
        </div>
      </InputsContainer>
    </CardBase>
  )
}
