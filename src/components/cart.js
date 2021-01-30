import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

import { removeItem } from '../redux/actions/ordering'

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
          {console.log(props.cart)}
            {props.cart.map(item => {
              return (
                <>
                  <div className="ordering__cart_content-name">
                    <span className="ordering__cart_content-name_remove"
                    onClick={() => props.removeItem(item)}
                    ><FontAwesomeIcon icon={faTimes} size='xs' /></span>    {item.size} {item.item} {item.type == 'chicken' ? ('(' + item.sauce + ')') : ''} x {item.quant}
                  </div>
                  <div className="ordering__cart_content-price">${(item.price * item.quant).toFixed(2)}</div>
                  <br />
              </>
              ) })}
        </div>

        <div className="ordering__cart_total">
            <div className="ordering__cart_total-header">
              Tax:
            </div>
            <div className="ordering__cart_total-content">
              ${props.subTotal >= 0 ? (props.subTotal * 0.06).toFixed(2) : (0.00).toFixed(2)}
            </div>
            <br />
            <div className="ordering__cart_total-header">
              TOTAL:
            </div> 
            <div className="ordering__cart_total-content">
              ${props.subTotal >= 0 ? ((props.subTotal + (props.subTotal * 0.06))).toFixed(2) : (0.00).toFixed(2)}
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

const mapDispatchToProps = {
  removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)