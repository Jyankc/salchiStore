import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Flex, Text, Box } from '@chakra-ui/react'

export default function ReviewCard ({ rating, review, productId, productName, productImage }) {
  return (
    <Box boxShadow='md' width='100%' minHeight='75px'>

      <Text fontSize='1.2rem' fontWeight='600'>{productName}</Text>

      <Text>{review}</Text>

      <Flex alignSelf='flex-end' alignItems='center' justifyContent='center'>{rating} <AiFillStar size={20} color='orange' /></Flex>
    </Box>

  )
}
