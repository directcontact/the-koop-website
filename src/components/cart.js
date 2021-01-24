import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

import Router from 'next/router';

const Cart = (props) => {
  
    // const { order } = props.order

console.log(props.cart)
  return (
    
    <>
      {/* <div className="ordering__cart"> */}
    <div>
        <div className="ordering__cart_header">
            <div className="ordering__cart_header-cartImg">
                <span><FontAwesomeIcon icon={faShoppingCart} size="2x" /></span> 
                <span>{props.totalQuant < 0 ? "YOUR CART IS EMPTY" : "  YOUR CART:  " + props.totalQuant + " ITEM(S) "}</span>
            </div>
            <div className="ordering__cart_header-exit"
                onClick={() => Router.push('/')}
            >
                <span>EXIT ORDER   </span>
                <span>  <FontAwesomeIcon icon={faSignOutAlt} size="1x" /></span>
            </div>
        </div>

        <div className="ordering__cart_content">
            {props.cart.map(item => {
              return (
                <>
                  <div className="ordering__cart_content-name">{item.item} </div>
                  <div className="ordering__cart_content-price">{item.price.toFixed(2)}</div>
                  <br />
                </>
              )
            })}
        </div>

        <div className="ordering__cart_total">
            <div className="ordering__cart_total-header">
              Tax:
            </div>
            <div className="ordering__cart_total-content">
              {props.subTotal >= 0 ? (props.subTotal * 0.06).toFixed(2) : (0.00).toFixed(2)}
            </div>
            <br />
            <div className="ordering__cart_total-header">
              TOTAL:
            </div> 
            <div className="ordering__cart_total-content">
              {props.subTotal >= 0 ? ((props.subTotal + (props.subTotal * 0.06))).toFixed(2) : (0.00).toFixed(2)}
            </div>
            <br /><br />
            <div className="ordering__orderButton"
            onClick={() => alert("PROCEED TO CHECKOUT")}>
              PROCEED TO CHECKOUT
            </div>
        </div>
        
    </div>
      {/* </div> */}
    </>
  );
};


const mapStateToProps = state => {
  return {
    cart: state.ordering.cart,
    totalQuant: state.ordering.totalQuant,
    subTotal: state.ordering.subTotal
  }
}


export default connect(mapStateToProps)(Cart)