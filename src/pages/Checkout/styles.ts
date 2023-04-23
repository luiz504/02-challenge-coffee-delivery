import styled from 'styled-components'

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;

  main {
    max-width: 77rem;
    display: grid;
    grid-template-columns: minmax(640px, 1fr) 448px;
    gap: 8rem;

    > section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`
export const Labels = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-bottom: 0.75rem;
`
