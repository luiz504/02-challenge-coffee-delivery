import styled from 'styled-components'
import { CardBase } from '../shared.styles'

export const ContainerCardProducts = styled(CardBase)`
  border-radius: 6px 44px;

  > footer {
    display: flex;
    justify-content: center;
  }
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  gap: 1.5rem;

  > hr {
    width: 100%;

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  }
`
export const EmptyFeedBack = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto;
  gap: 1.25rem;
  padding: 0.5rem 0rem;

  .thumb-placeholder {
    display: flex;
    height: 64px;
    > img {
      max-width: 64px;
    }
  }
`
export const ProductNameAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PriceDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    line-height: 130%;
    > span {
      font-size: 0.875rem;
    }
    > strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`
export const BtnConfirm = styled.button`
  user-select: none;
  width: 100%;
  background-color: ${({ theme }) => theme.yellow};
  padding: 0.75rem;
  border-radius: 6px;
  border: 0;

  transition: all 150ms;
  cursor: pointer;

  color: ${({ theme }) => theme['base-white']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
  &:active:not(:disabled) {
    transform: scale(1.1);
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme['yellow-dark']};
  }
`
