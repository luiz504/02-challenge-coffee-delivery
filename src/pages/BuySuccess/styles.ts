import styled from 'styled-components'

export const BuySuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;

  > main {
    width: 100%;
    max-width: 77rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    > section {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    > div.img-placeholder {
      margin-left: auto;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      > img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 3rem 1rem;
    > main {
      > div.img-placeholder {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    > main {
      grid-template-columns: 1fr;
    }
  }
`

export const TitleRow = styled.div`
  > h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  > span {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      102.89deg,
      ${({ theme }) => theme['yellow-dark']} 2.61%,
      ${({ theme }) => theme.purple} 98.76%
    );
    z-index: -1;

    border-radius: inherit;
    border: 1px solid transparent;
    background: linear-gradient(
        102.89deg,
        ${({ theme }) => theme['yellow-dark']} 2.61%,
        ${({ theme }) => theme.purple} 98.76%
      )
      border-box;
    -webkit-mask: linear-gradient(${({ theme }) => theme['base-white']} 0 0)
        padding-box,
      linear-gradient(${({ theme }) => theme['base-white']} 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(${({ theme }) => theme['base-white']} 0 0) padding-box,
      linear-gradient(${({ theme }) => theme['base-white']} 0 0);
    mask-composite: exclude;
  }
`

export const InforList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      color: ${({ theme }) => theme['base-white']};
    }
  }

  .info-section {
    p {
      font-size: 1rem;
      line-height: 130%;
    }
  }
`
