import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout'
import CartItemList from '@components/CartItemList'
import { useCart, useCartMutations } from '@store/Cart'
import CartSummary from '@components/CartSummary'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <CartItemList
        items={items}
        removeFromCart={removeFromCart}
      ></CartItemList>
      <Divider />
      <CartSummary totalAmount={count}></CartSummary>
    </Layout>
  )
}

export default CartPage
