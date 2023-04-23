import styled, { css } from 'styled-components'
import { ButtonBase } from '~/components/buttons/ButtonBase'

export const BtnsRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const PaymentOptionBtn = styled(ButtonBase)<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background: ${({ theme }) => theme['purple-light']};
          border-color: ${({ theme }) => theme.purple};
        `
      : css`
          &:hover:not(:disabled) {
            background: ${({ theme }) => theme['base-hover']};
          }
        `}
`
