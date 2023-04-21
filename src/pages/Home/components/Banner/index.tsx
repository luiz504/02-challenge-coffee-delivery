import React from 'react'
import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeImg from '~/assets/coffee-banner.webp'

import { BannerContainer, TitleAndSubSection, SellPointsList } from './styles'

export const Banner: React.FC = () => {
  const theme = useTheme()
  return (
    <BannerContainer>
      <div className="content-delimitation">
        <div className="info-col">
          <TitleAndSubSection>
            <h1>Find the perfect coffee for any time of the day</h1>
            <p>
              With Coffee Delivery, you can receive your coffee wherever you
              are, at any time
            </p>
          </TitleAndSubSection>

          <SellPointsList>
            <li>
              <div
                className="circle"
                style={{ background: theme['yellow-dark'] }}
              >
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Simple and secure purchase</span>
            </li>

            <li>
              <div
                className="circle"
                style={{ background: theme['base-text'] }}
              >
                <Package size={16} weight="fill" />
              </div>
              <span>Packaging keeps the coffee intact</span>
            </li>

            <li>
              <div className="circle" style={{ background: theme.yellow }}>
                <Timer size={16} weight="fill" />
              </div>
              <span>Fast and tracked delivery</span>
            </li>

            <li>
              <div className="circle" style={{ background: theme.purple }}>
                <Coffee size={16} weight="fill" />
              </div>
              <span>The coffee arrives fresh to you</span>
            </li>
          </SellPointsList>
        </div>

        <img src={coffeeImg} alt="" draggable={false} loading="eager" />
      </div>
    </BannerContainer>
  )
}
