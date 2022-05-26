// import { postCartItem, deleteCartItem, deleteCart, getCart } from '../../services/cart'
import { ADD_CART_ITEM, UPDATE_CART, SET_CART_PRODUCTS } from '../constants'

// export const getUserCart = () => {
//   return async (dispatch) => {
//     try {
//       const response = await getCart()

//       dispatch({
//         type: GET_CART,
//         payload: response
//       })
//     } catch (error) {
//       dispatch({
//         type: GET_CART,
//         payload: error
//       })
//     }
//   }
// }

// export const clearCartItems = () => {
//   return async (dispatch) => {
//     try {
//       const response = await deleteCart()

//       dispatch({
//         type: CLEAR_CART_ITEMS,
//         payload: response
//       })
//     } catch (error) {
//       dispatch({
//         type: CLEAR_CART_ITEMS,
//         payload: error
//       })
//     }
//   }
// }

// export const removeCartItem = (productId) => {
//   return async (dispatch) => {
//     try {
//       const response = await deleteCartItem(productId)

//       dispatch({
//         type: DELETE_CART_ITEM,
//         payload: response
//       })
//     } catch (error) {
//       dispatch({
//         type: DELETE_CART_ITEM,
//         payload: error
//       })
//     }
//   }
// }

// export const addCartItem = (productId) => {
//   return async (dispatch) => {
//     try {
//       const response = await postCartItem(productId)

//       dispatch({
//         type: UPDATE_CART_USER,
//         payload: response
//       })
//     } catch (error) {
//       dispatch({
//         type: UPDATE_CART_USER,
//         payload: error
//       })
//     }
//   }
// }

// CART
export const setCartProducts = (products) => {
  return {
    type: SET_CART_PRODUCTS,
    payload: products
  }
}

export const updateCart = (cartItems) => {
  return {
    type: UPDATE_CART,
    payload: cartItems
  }
}

export const addCartItem = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product
  }
}
