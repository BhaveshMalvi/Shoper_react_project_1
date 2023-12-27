import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DescriptionBox/DiscriptionBox';
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts';

function Product() {
  
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <ReletedProducts />
    </div>
  )
}

export default Product