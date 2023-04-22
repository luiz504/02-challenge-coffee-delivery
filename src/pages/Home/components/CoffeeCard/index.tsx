import { ShoppingCart } from 'phosphor-react'

import {
  CoffeCardContainer,
  ThumbPlaceholder,
  LabelsList,
  InfoBox,
  Footer,
  ShoppingBtn,
} from './styles'

import { Coffee } from '~/@types/Coffe'
import { Counter } from './Counter'

type CoffeeCardProps = {
  item: Coffee
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => {
  const formatedPrice = Number(item.price).toFixed(2)

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

        <Counter />

        <ShoppingBtn type="button">
          <ShoppingCart size={22} weight="fill" />
        </ShoppingBtn>
      </Footer>
    </CoffeCardContainer>
  )
}
