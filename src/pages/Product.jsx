import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/BreadCrum/BreadCrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/Description/Description'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className='product'>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  )
}

export default Product
