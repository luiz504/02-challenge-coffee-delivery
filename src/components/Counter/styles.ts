import styled, { css } from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  > span {
    padding: 0.1rem 0.25rem;
    color: ${({ theme }) => theme['base-title']};
    font-size: 1rem;
    line-height: 1.3;
    cursor: default;
  }
`

export const Btn = styled.button<{ size?: 'regular' | 'small' }>`
  color: ${({ theme }) => theme.purple};
  background-color: ${({ theme }) => theme['base-button']};

  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.minus {
    padding: 0.75rem 0.25rem 0.75rem 0.5rem;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  &.plus {
    padding: 0.75rem 0.5rem 0.75rem 0.25rem;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      &.minus {
        padding: 0.6156rem 0.25rem 0.6156rem 0.5rem;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
      }

      &.plus {
        padding: 0.6156rem 0.5rem 0.6156rem 0.25rem;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
      }
    `}

  &:disabled {
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    color: ${({ theme }) => theme['purple-dark']};
  }
  &:active:not(:disabled) {
    transform: scale(1.1);
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.purple};
  }
`
