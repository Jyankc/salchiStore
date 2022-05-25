import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'
import { Flex, Box } from '@chakra-ui/react' //eslint-disable-line

export const CartItemContainer = () => {
  const cartProducts = useSelector(state => state.cart.localItems)

  return (
    <>
      {cartProducts.length
        ? <Flex mt='1rem' mr='7.3rem' ml='7.3rem' flexDirection='column' alignItems='center'>
          {cartProducts.map((product) => (
            <CartItem key={product.id + product.name} product={product} />))}
          {/* eslint-disable-next-line */}
          </Flex>
        : <Box h='20vh'>No hay productos en el carrito</Box>}
    </>
  )
}

export default CartItemContainer