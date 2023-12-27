import React from 'react'
import './ReletedProducts.css'
import data_product from '../Assets/data'
import {Item} from '../Index'

function ReletedProducts() {
  return (
    <div className='reletedproducts'>
      <h1>Releted Products</h1>
      <hr />
      <div className="reletedproducts-item">
        {
          data_product.map((item, i) => {
            return <Item key={i}
            id={item.id}
            name = {item.name}
            image = {item.image}
            new_price = {item.new_price}
            old_price = {item.old_price}
            />
          })
        }
      </div>
    </div>
  )
}

export default ReletedProducts