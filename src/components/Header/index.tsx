import { MapPin, ShoppingCart } from 'phosphor-react'

import { ReactComponent as Logo } from '~/assets/logo.svg'

import { HeaderContainer, BtnLocation, BtnCard } from './styles'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const amountOfProducts = 3

  return (
    <HeaderContainer>
      <div className="content-delimitation">
        <Link to="/">
          <Logo />
        </Link>

        <div className="btns-row">
          <BtnLocation type="button">
            <MapPin weight="fill" size={22} />
            <span>New Yort, NY</span>
          </BtnLocation>

          <BtnCard
            type="button"
            aria-label={`amount of products ${amountOfProducts}`}
            onClick={() => navigate('/checkout')}
          >
            <ShoppingCart size={22} weight="fill" />
            {amountOfProducts > 0 && (
              <div className="counter">{amountOfProducts}</div>
            )}
          </BtnCard>
        </div>
      </div>
    </HeaderContainer>
  )
}
