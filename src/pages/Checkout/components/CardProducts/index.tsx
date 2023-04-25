import React, { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '~/components/Counter'
import { ButtonBase } from '~/components/buttons/ButtonBase'

import {
  BtnConfirm,
  ContainerCardProducts,
  PriceDescriptionSection,
  ProductRow,
  ProductsList,
  ProductNameAmountSection,
} from './styles'

import { CartContext } from '~/context/cart'
import { Product } from '~/reducers/products/reducer'
import { useNavigate } from 'react-router-dom'

export const CardProducts: React.FC = () => {
  const navigate = useNavigate()
  const {
    products,
    incrementProductAmount,
    decrementProductAmount,
    removeProductFromCart,
  } = useContext(CartContext)

  const totalProductsPrice = products.reduce((prev, cur) => {
    if (cur.price > 0) {
      const totalprice = cur.price * cur.amount
      return prev + totalprice
    }
    return prev
  }, 0)
  const isCartEmpty = !products.length

  const deliveryPrice = isCartEmpty ? 0 : 5

  const totalItemsFixed = Number(totalProductsPrice).toFixed(2)
  const deliveryPriceFixed = Number(deliveryPrice).toFixed(2)
  const totalFixed = Number(totalProductsPrice + deliveryPrice).toFixed(2)

  const handleIncrementProduct = (product: Product) => {
    incrementProductAmount(product)
  }
  const handleDecrementProduct = (productId: string) => {
    decrementProductAmount(productId)
  }
  const handleRemoveProduct = (productId: string) => {
    removeProductFromCart(productId)
  }

  return (
    <ContainerCardProducts>
      <ProductsList>
        {!!products.length &&
          products?.map((product, index, arr) => (
            <React.Fragment key={product.id}>
              <ProductRow>
                <div className="thumb-placeholder">
                  <img src={product.thumbnail_url} alt="" />
                </div>

                <ProductNameAmountSection>
                  <span>{product.name}</span>

                  <div>
                    <Counter
                      size="small"
                      value={product.amount}
                      onDecrement={() => handleDecrementProduct(product.id)}
                      onIncrement={() => handleIncrementProduct(product)}
                    />

                    <ButtonBase
                      size="small"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <Trash size={16} /> REMOVE
                    </ButtonBase>
                  </div>
                </ProductNameAmountSection>

                <div>
                  <strong>
                    $ {Number(product.amount * product.price).toFixed(2)}
                  </strong>
                </div>
              </ProductRow>

              {index + 1 < arr.length && <hr />}
            </React.Fragment>
          ))}

        {!products.length && <div> Empty Cart</div>}
      </ProductsList>

      <PriceDescriptionSection>
        <div>
          <span>Total of Items</span> <span>$ {totalItemsFixed}</span>
        </div>

        <div>
          <span>Delivery</span> <span>$ {deliveryPriceFixed}</span>
        </div>

        <div>
          <strong>Total</strong> <strong>$ {totalFixed}</strong>
        </div>
      </PriceDescriptionSection>

      <footer>
        {isCartEmpty && (
          <BtnConfirm type="button" onClick={() => navigate('/')}>
            Go to Coffees Catalog
          </BtnConfirm>
        )}

        {!isCartEmpty && <BtnConfirm type="submit">Confirm order</BtnConfirm>}
      </footer>
    </ContainerCardProducts>
  )
}
