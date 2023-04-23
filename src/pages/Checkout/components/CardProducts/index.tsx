import React from 'react'

import { Counter } from '~/components/Counter'

import {
  BtnConfirm,
  ContainerCardProducts,
  PriceDescriptionSection,
  ProductRow,
  ProductsList,
  ProductNameAmountSection,
} from './styles'

import { ButtonBase } from '~/components/buttons/ButtonBase'
import { Trash } from 'phosphor-react'
import { Coffee } from '~/@types/Coffe'

export const CardProducts: React.FC = () => {
  const totalItems = Number(29.7).toFixed(2)
  const deliveryFee = Number(3.5).toFixed(2)
  const total = Number(29.7 + 3.5).toFixed(2)
  const cartList: (Coffee & { amount: number })[] = []

  return (
    <ContainerCardProducts>
      <ProductsList>
        {!!cartList.length &&
          cartList?.map((product, index, arr) => (
            <React.Fragment key={product.id}>
              <ProductRow>
                <div className="thumb-placeholder">
                  <img src={product.thumbnail_url} alt="" />
                </div>

                <ProductNameAmountSection>
                  <span>{product.name}</span>

                  <div>
                    <Counter size="small" />

                    <ButtonBase size="small">
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

        {!cartList.length && <div> Empty Cart</div>}
      </ProductsList>

      <PriceDescriptionSection>
        <div>
          <span>Total of Items</span> <span>$ {totalItems}</span>
        </div>

        <div>
          <span>Delivery</span> <span>$ {deliveryFee}</span>
        </div>

        <div>
          <strong>Total</strong> <strong>$ {total}</strong>
        </div>
      </PriceDescriptionSection>

      <footer>
        <BtnConfirm type="button">Confirm order</BtnConfirm>
      </footer>
    </ContainerCardProducts>
  )
}
