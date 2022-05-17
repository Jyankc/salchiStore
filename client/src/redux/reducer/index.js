
import {
  GET_PRODUCTS,
  GET_BRANDS,
  GET_CATEGORIES,
  GET_PRODUCT_DETAILS,
  ADD_FILTER_PARAM,
  CLEAR_FILTER_PARAMS,
  SET_ORDER_TYPE,//eslint-disable-line
  SET_CART_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_CART_ITEM,
  LOG_IN,
  LOG_OUT,
  SET_USER_PAYMENT,
  SET_USER_ADDRESS,
  SET_ORDER_ITEMS,
  CREATE_ORDER
} from '../constants'

const initialState = {
  products: [],
  cartProducts: [],
  brands: [],
  categories: [],
  options: {},
  product: {},
  user: {},
  order: {},
  token: window.localStorage.getItem('token')

}
const reducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }

    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        product: payload

      }

    case ADD_FILTER_PARAM:
      return {
        ...state,
        options: {
          ...state.options,
          [payload.name]: [payload.value]
        }
      }

    case CLEAR_FILTER_PARAMS:
      return {
        ...state,
        options: {}
      }

    case GET_BRANDS:
      return {
        ...state,
        brands: payload
      }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }

    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: payload }

    case ADD_PRODUCT_TO_CART:
      if (state.cartProducts.find(product => product.id === payload.id) !== undefined) {
        return {
          ...state,
          cartProducts: state.cartProducts
            .map(p => p.id === payload.id ? { ...p, quantity: p.quantity + 1 } : p)
        }
      }
      return { ...state, cartProducts: [...state.cartProducts, { ...payload, quantity: 1 }] }

    case REMOVE_PRODUCT_FROM_CART:
      if (state.cartProducts.find(product => product.id === payload.id).quantity === 1) {
        return {
          ...state,
          cartProducts: state.cartProducts
            .filter(p => p.id !== payload.id)
        }
      }
      return {
        ...state,
        cartProducts: state.cartProducts
          .map(p => p.id === payload.id ? { ...p, quantity: p.quantity - 1 } : p)
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(p => p.id !== payload.id)
      }

    case SET_USER_PAYMENT:
      return {
        ...state,
        order: {
          ...state.order,
          userPaymentId: payload
        }
      }

    case SET_USER_ADDRESS:
      return {
        ...state,
        order: {
          ...state.order,
          userAddressId: payload
        }
      }

    case SET_ORDER_ITEMS:
      return {
        ...state,
        order: {
          ...state.order,
          orderItems: state.cartProducts
        }
      }
    case CREATE_ORDER:
      return {
        ...state
        // order: payload
      }

    case LOG_IN:
      return {
        ...state,
        user: payload.user,
        token: payload.token
      }

    case LOG_OUT:
      return {
        ...state,
        user: {},
        token: ''
      }

    default:
      return state
  }
}

export default reducer
