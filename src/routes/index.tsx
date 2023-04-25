import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '~/layouts/DefaultLayout'
import { BuySuccess } from '~/pages/BuySuccess'
import { Checkout } from '~/pages/Checkout'
import { Home } from '~/pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/buy-success/:orderId" element={<BuySuccess />} />
      </Route>
    </Routes>
  )
}
