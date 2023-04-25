import styled from 'styled-components'

export const ContainerCheckout = styled.form`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;

  main {
    max-width: 77rem;
    display: grid;
    grid-template-columns: minmax(500px, 640px) 448px;
    gap: 8rem;

    > section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    @media (max-width: 1280px) {
      width: 100%;
      gap: 1rem;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media (max-width: 1024px) {
      max-width: 600px;
      grid-template-columns: 1fr;
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
