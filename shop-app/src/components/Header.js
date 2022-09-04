import React from 'react';
import { useState } from 'react';
import { FaShoppingCart} from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
        {props.orders.map( el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}

        <p className='total-price'>Total price : {new Intl.NumberFormat().format(summa)}$</p> 
        </div>)
        }

      const showNothing = () =>{
        return(<div className='empty'>
           <h2>No items</h2>
        </div>)
      }

export default function Header(props) {

  let [cartOpen,setCartOpen] = useState(false)
  return (
    <header>
        <div className='nav'>
            {/* <span className='logo'>Shop app</span>
            <ul className='nav'>
              <li>Home</li>
              <li>Contact us</li>
              

            </ul> */}
            <a href="/" className='site-title'>Shop-app</a>
            <ul>
              <li>
                  <a href="/contact">Contact Us</a> 
                 
              </li>
            </ul>

            <FaShoppingCart  onClick={() => setCartOpen(cartOpen = !cartOpen)}className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen &&(
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                 showOrders(props): showNothing()}
              
                

              </div>

            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
