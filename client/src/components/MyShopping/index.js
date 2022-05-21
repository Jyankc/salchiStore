import React, { useEffect } from 'react'
import CardOrder from '../CardOrder'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersByUser } from '../../redux/actions'

export default function MyShopping () {
  const dispatch = useDispatch()

  const token = useSelector(state => state.token)
  const orders = useSelector(state => state.orders)

  useEffect(() => {
    dispatch(getOrdersByUser(token))
  }, [])//eslint-disable-line

  return (
    <div>{orders.length && orders.map(p => (
      <CardOrder key={p.id} id={p.id} total={p.total} date={p.createdAt} orderItems={p.products} />
    ))}
    </div>
  )
}