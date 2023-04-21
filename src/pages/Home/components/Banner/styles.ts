import styled from 'styled-components'
import background from '~/assets/Background.svg'

export const BannerContainer = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;

  padding: 1rem;

  display: flex;
  justify-content: center;

  .content-delimitation {
    width: 100%;
    max-width: 77rem;
    gap: 1rem 3.5rem;
    padding: 4.75rem 0;

    display: grid;
    grid-template-columns: 1fr auto;
  }
`

export const TitleAndSubSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.125rem;
  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
  }
  > p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
export const SellPointsList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem 2.5rem;

  > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    .circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme['base-white']};
    }
    > span {
      line-height: 1.3;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
