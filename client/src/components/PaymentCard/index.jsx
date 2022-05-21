import { Box, Flex, VStack, Text, Circle, Icon } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { MdCheckCircleOutline as CheckIcon } from 'react-icons/md'
import { FaCreditCard } from 'react-icons/fa'
import { ReactComponent as MercadoPagoIcon } from '../../assets/logo/mercadoPago.svg'

export default function PaymentCard ({ id, paymentType, cardNumber, expirationDate, provider, onclick }) {
  const cardNumberHidden = cardNumber !== undefined ? `****-****-****-${cardNumber.slice(-4)}` : ''
  const selectedId = useSelector(state => state.order.userPaymentId)
  const imSelected = selectedId === id

  return (
    <Flex alignItems='center' bg='white' borderRadius={3} mt={2} mb={2} onClick={onclick}>
      <Flex w='100%' alignItems='center'>
        <Box m={4}>
          {cardNumber &&
            <Circle size='40px' bg='secondary' color='white'>
              <FaCreditCard />
            </Circle>}
          {id === 'MP' && <Icon as={MercadoPagoIcon} w='10rem' h='2.5rem' />}
        </Box>
        <VStack pt={3} pb={3} alignItems='flex-start'>
          <Text>{`${provider} ${paymentType} ${cardNumberHidden}`}</Text>
        </VStack>
      </Flex>
      <Flex m={5} justifyContent='center'>
        {imSelected && <CheckIcon size={20} color='#3182ce' />}
      </Flex>
    </Flex>
  )
}
