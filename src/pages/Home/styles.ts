import styled from 'styled-components'

export const HomeContainer = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    .content-delimitation {
      width: 100%;
      max-width: 77rem;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      gap: 2rem;
      > h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;
        color: ${({ theme }) => theme['base-subtitle']};
      }
    }
  }
`

export const CoffeeList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
  margin-bottom: 2rem;
`
