import React, { useEffect } from 'react'
import ReviewCard from '../ReviewCard'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserReviews } from '../../redux/actions'

export default function Reviews () {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const reviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(getUserReviews(token))
  }, [])//eslint-disable-line

  // const array = [
  //   {
  //     rating: 5,
  //     review: 'Esta piola el producto',
  //     product: {
  //       id: 1,
  //       name: 'DestapaCorchos',
  //       image: 'IMAGEN'
  //     }
  //   }
  // ]
  return (
    <>
      <div className={s.container}>{reviews.length > 0
        ? reviews.map(r => (
          <ReviewCard
            key={r.product.id}
            rating={r.rating}
            review={r.review}
            productId={r.product.id}
            productName={r.product.name}
            productImage={r.product.image}
          />
        ))
        : 'No tienes reseñas.'}
      </div>{/* eslint-disable-line */}
    </>
  )
}
