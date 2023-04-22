import { Minus, Plus } from 'phosphor-react'
import React, { useState } from 'react'

import { CounterContainer, Btn } from './styles'

type CounterProps = {
  defaultValue?: number
  max?: number
}
export const Counter: React.FC<CounterProps> = ({
  defaultValue = 0,
  max = Infinity,
}) => {
  const [value, setValue] = useState(defaultValue)

  const handleIncrement = () => {
    setValue((prev) => {
      const newValue = prev + 1
      if (newValue > max) return prev

      return newValue
    })
  }

  const handleDecrement = () => {
    setValue((prev) => {
      const newValue = prev - 1

      if (newValue < 0) return prev

      return newValue
    })
  }

  return (
    <CounterContainer>
      <Btn
        className="minus"
        disabled={value <= 0}
        type="button"
        onClick={handleDecrement}
      >
        <Minus size={14} weight="bold" />
      </Btn>

      <span>{value}</span>

      <Btn
        className="plus"
        type="button"
        disabled={value === max}
        onClick={handleIncrement}
      >
        <Plus size={14} weight="bold" />
      </Btn>
    </CounterContainer>
  )
}
