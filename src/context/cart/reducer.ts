import { produce } from 'immer'

import { Coffee } from '~/@types/Coffe'

export interface Product extends Coffee {
  amount: number
}

export type ProductsState = {
  products: Product[]
}

export type ActionType =
  | { type: 'INCREMENT_PRODUCT'; payload: { product: Coffee } }
  | { type: 'DECREMENT_PRODUCT'; payload: { product_id: string } }
  | { type: 'REMOVE_ALL_PRODUCT'; payload: { product_id: string } }

export function productsReducer(state: ProductsState, actions: ActionType) {
  switch (actions.type) {
    case 'INCREMENT_PRODUCT': {
      return produce(state, (draft) => {
        const productId = actions.payload.product.id
        const sameProductIndex = draft.products.findIndex(
          (p) => p.id === productId,
        )
        if (sameProductIndex < 0) {
          draft.products.push({
            ...actions.payload.product,
            amount: 1,
          })
        } else {
          const oldValue = draft.products[sameProductIndex].amount
          draft.products[sameProductIndex].amount = oldValue + 1
        }
      })
    }
    case 'DECREMENT_PRODUCT': {
      return produce(state, (draft) => {
        const productId = actions.payload.product_id
        const sameProductIndex = draft.products.findIndex(
          (p) => p.id === productId,
        )

        if (sameProductIndex < 0) return state

        const oldAmount = draft.products[sameProductIndex].amount

        if (oldAmount < 2) {
          draft.products.splice(sameProductIndex)
        } else {
          draft.products[sameProductIndex].amount = oldAmount - 1
        }
      })
    }
    case 'REMOVE_ALL_PRODUCT': {
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === actions.payload.product_id,
        )

        if (productIndex < 0) return state

        draft.products.splice(productIndex)
      })
    }
    default: {
      return state
    }
  }
}
