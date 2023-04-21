import { ShoppingCart } from 'phosphor-react'

import { CoffeCardContainer } from './styles'

import { Coffee } from '~/@types/Coffe'

type CoffeeCardProps = {
  item: Coffee
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => (
  <CoffeCardContainer>
    <div>
      <img src={item.thumbnail_url} alt={item.name} />
    </div>

    <div>
      {item.labels.map((label) => (
        <div key={label}>{label}</div>
      ))}
    </div>
    <div>
      <h6>{item.name}</h6>
      <p>{item.description}</p>
    </div>
    <footer>
      <span>${item.price}</span>
      <div>+ 1 -</div>
      <button type="button">
        <ShoppingCart size={22} weight="fill" />
      </button>
    </footer>
  </CoffeCardContainer>
)
