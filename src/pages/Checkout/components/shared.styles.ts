import styled from 'styled-components'

export const CardBase = styled.div`
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;

  margin-bottom: 2rem;

  > div {
    > h1 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      color: ${({ theme }) => theme['base-subtitle']};
    }
    > span {
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`
