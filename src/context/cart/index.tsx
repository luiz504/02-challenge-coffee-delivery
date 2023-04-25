import React, { ReactNode, createContext, useReducer } from 'react'
import { Coffee } from '~/@types/Coffe'

import { Product, productsReducer } from '~/reducers/products/reducer'

type CartContextType = {
  products: Product[]
  incrementProductAmount: (produdct: Coffee) => void
  decrementProductAmount: (produdctId: string) => void
  removeProductFromCart: (produdctId: string) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    products: [],
  })

  const { products } = productsState

  const incrementProductAmount = (product: Coffee) => {
    if (product.id) {
      dispatchProducts({ type: 'INCREMENT_PRODUCT', payload: { product } })
    }
  }
  const decrementProductAmount = (productId: string) => {
    if (productId) {
      dispatchProducts({
        type: 'DECREMENT_PRODUCT',
        payload: { product_id: productId },
      })
    }
  }
  const removeProductFromCart = (productId: string) => {
    if (productId) {
      dispatchProducts({
        type: 'REMOVE_PRODUCT',
        payload: { product_id: productId },
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        incrementProductAmount,
        decrementProductAmount,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
