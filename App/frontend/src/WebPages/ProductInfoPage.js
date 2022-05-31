import React from 'react'
import {useParams} from 'react-router-dom'

const ProductInfoPage = () => {
  const params = useParams();
  const {id} = params;

  return (
  <h1>{`${id}`}</h1>
  )
}

export default ProductInfoPage