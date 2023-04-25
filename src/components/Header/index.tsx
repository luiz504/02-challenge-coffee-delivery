import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from '~/assets/logo.svg'

import { HeaderContainer, BtnLocation, BtnCard } from './styles'

import { CartContext } from '~/context/cart'

export const Header = () => {
  const navigate = useNavigate()

  const { products } = useContext(CartContext)

  const amountOfProducts = products.reduce((prev, cur) => {
    if (cur.amount > 0) {
      return prev + cur.amount
    }
    return prev
  }, 0)

  return (
    <HeaderContainer>
      <div className="content-delimitation">
        <Link to="/">
          <Logo />
        </Link>

        <div className="btns-row">
          <BtnLocation type="button">
            <MapPin weight="fill" size={22} />
            <span>Burbank, CA</span>
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
