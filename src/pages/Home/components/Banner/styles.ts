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
    position: relative;

    display: grid;
    grid-template-columns: 1fr auto;

    .info-col {
      z-index: 1;
    }
  }

  @media (max-width: 1280px) {
    .content-delimitation {
      padding: 3.75rem 0;
      gap: 1rem 2rem;

      grid-template-columns: 1fr minmax(250px, 350px);

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    .content-delimitation {
      grid-template-columns: 1fr;
      .img-col {
        img {
          width: auto;
          max-width: 100%;
          max-height: 60%;
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          opacity: 0.4;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .img-col {
      img {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -5%);
        max-width: 95%;
      }
    }
  }
`

export const TitleAndSubSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.125rem;
  gap: 1rem;
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
    @media (max-width: 1280px) {
      filter: drop-shadow(1px 0px 0px ${({ theme }) => theme['base-text']});
    }
  }
`
export const SellPointsList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
      @media (max-width: 1280px) {
        filter: drop-shadow(1px 0px 0px ${({ theme }) => theme['base-text']});
      }
    }
  }
`
