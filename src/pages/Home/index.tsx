import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'

import { HomeContainer, CoffeeList } from './styles'

import { coffeeList } from './coffeeList'

export const Home = () => (
  <HomeContainer>
    <Banner />
    <main>
      <div className="content-delimitation">
        <h2>Our Coffees</h2>

        <CoffeeList>
          {coffeeList.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </CoffeeList>
      </div>
    </main>
  </HomeContainer>
)
