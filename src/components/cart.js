import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Router from 'next/router';

const Cart = (props) => {
  
    // const { order } = props.order


  return (
    <>
      {/* <div className="ordering__cart"> */}
    <div>
        <div className="ordering__cart_header">
            <div className="ordering__cart_header-cartImg">
                <span><FontAwesomeIcon icon={faShoppingCart} size="2x" /></span> 
                <span>  # items</span>
            </div>
            <div className="ordering__cart_header-exit"
                onClick={() => Router.push('/')}
            >
                <span>EXIT ORDER   </span>
                <span>  <FontAwesomeIcon icon={faSignOutAlt} size="1x" /></span>
            </div>
        </div>

        <div className="ordering__cart_content">
            CART ITEMS WILL GO HERE
        </div>

        <div className="ordering__cart_total">
            TAX WILL GO HERE
            <br />
            TOTAL WILL GO HERE
            <br />
            <br />
            BUTTON WILL GO HERE
        </div>
        
    </div>
      {/* </div> */}
    </>
  );
};

export default Cart;