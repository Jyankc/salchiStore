import { useSelector, useDispatch } from 'react-redux'
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import { addProductFilter } from '../../redux/actions/products.actions'

export const CategoryFilter = () => {
  const categories = useSelector(state => state.categories.data)
  const filters = useSelector(state => state.products.filter)
  const dispatch = useDispatch()

  if (categories.length === 0) return <Box>No hay categorías</Box>

  return (
    <Box m='1rem'>
      <Heading size='sm' mb='0.5rem'>Categorías</Heading>
      <UnorderedList ml='0'>
        {Array.isArray(categories) && categories.map(category => (
          <ListItem
            key={category.id + category.name}
            cursor='pointer'
            onClick={() => dispatch(addProductFilter({ name: 'category', value: category.id }))}
            color={Number(filters.category) === category.id ? '#000' : 'gray'}
            textDecor={Number(filters.category) === category.id ? 'underline' : undefined}
          >
            {category.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default CategoryFilter
