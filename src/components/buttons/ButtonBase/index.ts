import styled, { css } from 'styled-components'

export const ButtonBase = styled.button.attrs((props) => ({
  type: 'button',
  size: 'regular',
  ...props,
}))<{
  size?: 'regular' | 'small'
}>`
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  cursor: pointer;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: capitalize;
  outline-color: ${({ theme }) => theme.purple};
  display: flex;
  align-items: center;
  transition: all 150ms;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.406rem 0.5rem;
      gap: 0.25rem;
    `}

  &:active:not(:disabled) {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.purple};
  }
`
