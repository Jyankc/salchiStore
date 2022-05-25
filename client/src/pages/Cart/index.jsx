import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Heading, Text, Flex, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { setOrderItems } from '../../redux/actions/orders.actions'
import CartItemContainer from '../../components/CartItemContainer'
import ModalLogin from '../../components/ModalLogin'
import WishList from '../../components/WishList'

export const Cart = () => {
  const cartProducts = useSelector(state => state.cart.items)
  const [modal, setModal] = useState(false)
  const userId = useSelector(state => state.users.user.id)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const totalProductCount = cartProducts.reduce((acc, p) => acc + (p.quantity * p.price), 0).toString().split('.')[0]

  const handleSubmit = () => {
    dispatch(setOrderItems())
    userId ? navigate('/addresses') : setModal(true)
  }

  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Flex mt='1rem' flexDirection='column' justifyContent='center' alignItems='center'>
        <Tabs w='61.3rem'>
          <TabList color='accent' _active={{ color: 'accent' }}>
            <Tab>Carrito</Tab>
            <Tab>Lista de deseos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CartItemContainer />
              <Flex w='61.3rem' flexDirection='column' justifyContent='center' alignItems='flex-end'>
                {totalProductCount > 0 &&
                  <>
                    <Text mt='3.4rem' mb='3.4rem' fontSize='1.5rem'>Total: ${totalProductCount} </Text>
                    <Button mb='2rem' onClick={handleSubmit} bg='accent' color='secondary'>Continuar compra</Button>
                  </>}
              </Flex>
            </TabPanel>
            <TabPanel>
              <WishList />
            </TabPanel>
          </TabPanels>

        </Tabs>
      </Flex>
      <ModalLogin state={modal} setState={setModal}>
        <Heading color='black' textAlign='center'>No has iniciado sesión</Heading>
        <Text color='black' mt={2} textAlign='center'>Para seguir con tu compra debes registrarte o iniciar sesión.</Text>
      </ModalLogin>
    </Flex>

  )
}

export default Cart
