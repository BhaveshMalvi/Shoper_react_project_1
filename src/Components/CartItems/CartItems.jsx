import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Types</p>
        <p>Quentity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null; // Add this line to handle the case when cartItems[e.id] <= 0
        })
      }
      
      <div className='cartitems-down'>
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKBOX</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a prommo code, Enrter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;