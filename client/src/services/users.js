import axios from 'axios'
import store from '../redux/store'

const endpoint = '/users'

export const sendToken = async (token) => {
  const { data } = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

export const getUsers = async () => {
  const { token } = store.getState().users
  const { data } = await axios.get('/', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

export const updateUser = async function (newData) {
  const { token } = store.getState().users
  let urlString = endpoint
  if (newData.userId) urlString += `/${newData.userId}`

  const { data } = await axios.put(urlString, newData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
