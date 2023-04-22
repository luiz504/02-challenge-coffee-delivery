import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  border-radius: 6px 36px;

  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem 1.25rem 1.25rem;
`

export const ThumbPlaceholder = styled.div`
  position: relative;
  min-height: 95px;
  margin-bottom: 0.75rem;
  > img {
    position: absolute;
    max-height: 120px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -20%);
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5));
  }
`

export const LabelsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 1rem;

  .label-badge {
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
  }
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  > h6 {
    font-family: 'Baloo 2' cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
  > p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-label']};
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};

    > strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.3;
    }
  }
`

export const ShoppingBtn = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  transition: all 150ms;

  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme['base-card']};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.purple};
  }

  &:active:not(:disabled) {
    transform: scale(1.1);
  }

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme['base-title']};
  }
`
