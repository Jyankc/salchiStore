import { Box, Flex, VStack, Text, Circle } from '@chakra-ui/react'
import { BsFillCheckCircleFill as CheckIcon } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function AddressCard ({ id, streetName, houseNumber, postalCode, city, state, country, onclick }) {
  const selectedId = useSelector(state => state.order.userAddressId)
  const imSelected = selectedId === id
  return (
    <Flex alignItems='center' bg='white' borderRadius={3} mt={2} mb={2} onClick={onclick}>
      <Flex w='100%' alignItems='center'>
        <Box m={4}>
          <Circle size='40px' bg='secondary' color='white'><FaMapMarkerAlt size={20} /></Circle>
        </Box>
        <VStack pt={3} pb={3} alignItems='flex-start'>
          <Text>{`Calle ${streetName} # ${houseNumber}, ${postalCode}.`}</Text>
          <Text>{`${city}, ${state} - ${country}.`}</Text>
        </VStack>
      </Flex>
      <Flex m={5} justifyContent='center'>
        {imSelected && <CheckIcon size={20} color='#3182ce' />}
      </Flex>
    </Flex>
  )
}
