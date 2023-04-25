import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

import {
  CoffeCardContainer,
  ThumbPlaceholder,
  LabelsList,
  InfoBox,
  Footer,
  ShoppingBtn,
} from './styles'

import { Counter } from '~/components/Counter'

import { CartContext } from '~/context/cart'

import { Coffee } from '~/@types/Coffe'

type CoffeeCardProps = {
  item: Coffee
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => {
  const navigate = useNavigate()
  const { products, incrementProductAmount, decrementProductAmount } =
    useContext(CartContext)
  const formatedPrice = Number(item.price).toFixed(2)

  const amountOfProduct =
    products.find((product) => product.id === item.id)?.amount || 0

  const handleDecrement = () => {
    decrementProductAmount(item.id)
  }

  const handleIncrement = () => {
    incrementProductAmount(item)
  }
  const handleCheckoutFromProduct = () => {
    if (amountOfProduct < 1) {
      handleIncrement()
    }
    navigate('/checkout')
  }

  return (
    <CoffeCardContainer>
      <ThumbPlaceholder>
        <img src={item.thumbnail_url} alt={item.name} />
      </ThumbPlaceholder>

      <LabelsList>
        {item.labels.map((label) => (
          <span key={label} className="label-badge">
            {label}
          </span>
        ))}
      </LabelsList>

      <InfoBox>
        <h6>{item.name}</h6>
        <p>{item.description}</p>
      </InfoBox>

      <Footer>
        <span>
          $ <strong>{formatedPrice}</strong>
        </span>

        <Counter
          value={amountOfProduct}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />

        <ShoppingBtn
          type="button"
          aria-label="checkout-product"
          onClick={handleCheckoutFromProduct}
        >
          <ShoppingCart size={22} weight="fill" />
        </ShoppingBtn>
      </Footer>
    </CoffeCardContainer>
  )
}
