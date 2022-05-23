import axios from 'axios'
import store from '../redux/store'

const { token } = store.getState()
const endpoint = '/users'

export const sendToken = async (token) => {
  const { data } = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

export const updateUser = async function (newData) {
  const { data } = await axios.put(endpoint, newData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
