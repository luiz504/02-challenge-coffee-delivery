import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  .content-delimitation {
    width: 100%;
    max-width: 77rem;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      border-radius: 4px;
      &:focus {
        outline-color: ${({ theme }) => theme['purple-dark']};
        outline-offset: 3px;
      }
    }

    .btns-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`

const BtnBase = styled.button`
  padding: 0.8rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: all 150ms;

  &:hover {
    transform: scale(1.05);
  }
`

export const BtnLocation = styled(BtnBase)`
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3rem;

  > svg {
    color: ${({ theme }) => theme['base-text']};
    transform: translateY(-10%);
  }
  &:focus {
    outline-color: ${({ theme }) => theme['purple-dark']};
  }
`

export const BtnCard = styled(BtnBase)`
  position: relative;
  background: ${({ theme }) => theme['yellow-light']};
  outline-color: transparent;
  &:focus {
    outline-color: ${({ theme }) => theme['yellow-dark']};
  }

  > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  .counter {
    position: absolute;
    bottom: 100%;
    left: 100%;
    transform: translate(-60%, 60%);
    height: 20px;
    min-width: 20px;

    border-radius: 9999px;
    padding: 0 0.25rem;

    background-color: ${({ theme }) => theme['yellow-dark']};
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-white']};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
