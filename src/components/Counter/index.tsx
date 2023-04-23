import React from 'react'
import { Minus, Plus } from 'phosphor-react'

import { CounterContainer, Btn } from './styles'

type CounterProps = {
  size?: 'regular' | 'small'
  onDecrement?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onIncrement?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disablePlus?: boolean
  disableMinus?: boolean
  value?: number
}

export const Counter: React.FC<CounterProps> = ({
  size = 'regular',
  value = 0,
  onDecrement,
  onIncrement,
  disableMinus,
  disablePlus,
}) => {
  return (
    <CounterContainer>
      <Btn
        className="minus"
        disabled={disableMinus || value <= 0}
        type="button"
        onClick={onDecrement}
        size={size}
      >
        <Minus size={14} weight="bold" />
      </Btn>

      <span>{value}</span>

      <Btn
        className="plus"
        type="button"
        disabled={disablePlus}
        onClick={onIncrement}
        size={size}
      >
        <Plus size={14} weight="bold" />
      </Btn>
    </CounterContainer>
  )
}
