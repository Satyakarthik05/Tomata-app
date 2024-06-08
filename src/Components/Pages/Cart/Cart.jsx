import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Context/StoreContext'

const Cart = () => {
  
  const{cartItems,food_list,removeFromCart}=  useContext(StoreContext);


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>TOtal</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <b>{0}</b>
              <hr />
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <b>{0}</b>
              <hr />
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you a promo code,Enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code'/>
            <button>submit</button>
          </div>
        </div>
      </div>
        
      </div>
      
    </div>
  )
}

export default Cart
