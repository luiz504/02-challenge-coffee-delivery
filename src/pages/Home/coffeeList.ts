import { Coffee } from '~/@types/Coffe'

import tradicionalEspressoThumb from '~/assets/thumbnail-coffee/tradicional-espresso.webp'
import americanEspressoThumb from '~/assets/thumbnail-coffee/american-espresso.webp'
import creamyEspressoThumb from '~/assets/thumbnail-coffee/creamy-espresso.webp'
import icedEspressoThumb from '~/assets/thumbnail-coffee/iced-espresso.webp'
import coffeeWithMilkThumb from '~/assets/thumbnail-coffee/coffee-with-milk.webp'
import latteThumb from '~/assets/thumbnail-coffee/latte.webp'
import capuccinoThumb from '~/assets/thumbnail-coffee/capuccino.webp'
import macchiatoThumb from '~/assets/thumbnail-coffee/macchiato.webp'
import mochaccimoThumb from '~/assets/thumbnail-coffee/mochaccino.webp'
import hotChocolateThumb from '~/assets/thumbnail-coffee/hot-chocolate.webp'
import cubanThumb from '~/assets/thumbnail-coffee/cuban.webp'
import hawaiianThumb from '~/assets/thumbnail-coffee/hawaiian.webp'
import arabicThumb from '~/assets/thumbnail-coffee/arabic.webp'
import irishThumb from '~/assets/thumbnail-coffee/irish.webp'

const coffeeDict: Record<string, Omit<Coffee, 'id'>> = {
  espresso_tradicional: {
    name: 'Traditional Espresso',
    description: 'The traditional coffee made with hot water and ground beans',
    labels: ['TRADICIONAL'],
    thumbnail_url: tradicionalEspressoThumb,
    price: 9.9,
  },
  american_expresso: {
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    labels: ['TRADICIONAL'],
    thumbnail_url: americanEspressoThumb,
    price: 9.9,
  },
  creamy_espresso: {
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    labels: ['TRADICIONAL'],
    thumbnail_url: creamyEspressoThumb,
    price: 9.9,
  },
  iced_espresso: {
    name: 'Iced Espresso',
    description: 'Beverage made with espresso and ice cubes',
    labels: ['TRADICIONAL', 'ICED'],
    thumbnail_url: icedEspressoThumb,
    price: 9.9,
  },
  coffe_with_milk: {
    name: 'Coffee with Milk',
    description: 'Half and half of traditional espresso with steamed milk',
    labels: ['TRADICIONAL', 'WITH MILK'],
    thumbnail_url: coffeeWithMilkThumb,
    price: 9.9,
  },
  latte: {
    name: 'Latte',
    description:
      'One shot of espresso with double the amount of milk and creamy foam',
    labels: ['TRADICIONAL', 'WITH MILK'],
    thumbnail_url: latteThumb,
    price: 9.9,
  },
  capuccino: {
    name: 'Capuccino',
    description:
      'Coffee made with equal parts espresso, steamed milk, and frothy milk foam on top',
    labels: ['TRADICIONAL', 'WITH MILK'],
    thumbnail_url: capuccinoThumb,
    price: 9.9,
  },
  macchiato: {
    name: 'Macchiato',
    description: 'Espresso mixed with a little hot milk and foam',
    labels: ['TRADICIONAL', 'WITH MILK'],
    thumbnail_url: macchiatoThumb,
    price: 9.9,
  },
  mochaccino: {
    name: 'Mochaccino',
    description: 'Espresso with chocolate syrup, a little milk, and foam',
    labels: ['TRADICIONAL', 'WITH MILK'],
    thumbnail_url: mochaccimoThumb,
    price: 9.9,
  },
  hot_chocolate: {
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    labels: ['SPECIAL', 'WITH MILK'],
    thumbnail_url: hotChocolateThumb,
    price: 12.9,
  },
  cuban: {
    name: 'Cuban',
    description: 'Iced coffee drink with rum, cream, and mint',
    labels: ['SPECIAL', 'ALCOHOLIC', 'ICED'],
    thumbnail_url: cubanThumb,
    price: 15.0,
  },
  hawaiian: {
    name: 'Hawaiian',
    description: 'Sweetened drink made with coffee and coconut milk',
    labels: ['SPECIAL'],
    thumbnail_url: hawaiianThumb,
    price: 9.9,
  },
  arabic: {
    name: 'Arabic',
    description: 'Drink made with Arabica coffee beans and spices',
    labels: ['SPECIAL'],
    thumbnail_url: arabicThumb,
    price: 12.0,
  },
  irish: {
    name: 'Irish',
    description:
      'Drink made with coffee, Irish whiskey, sugar, and whipped cream',
    labels: ['SPECIAL', 'ALCOHOLIC'],
    thumbnail_url: irishThumb,
    price: 15.0,
  },
}

export const coffeeList: Coffee[] = Object.entries(coffeeDict).map(
  ([key, value]) => ({
    ...value,
    id: key,
  }),
)
