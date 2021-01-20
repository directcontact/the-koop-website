import React from 'react';
import Cart from '../components/cart';
import Link from 'next/link';

import fs from 'fs';
import { AnimateSharedLayout } from 'framer-motion';


export default class OrderingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: {
        step: 'LOCATION',
        selection: 'CHICKEN',
        // cart: [],
        active: 'selected',
      },
      menuItems: [
        'CHICKEN',
        'APPETIZERS',
        'RICE DISHES',
        'TROTTER',
        'SOUPS',
        'SIDES',
      ],
      steps: [
        'LOCATION',
        'FOOD',
        'PICKUP',
      ],
      locations: [
        {
          name: 'State College',
          address: '129 Locust Ln, State College, PA 16801',
          phone: '(814)-954-7807'
        },
        {
          name: 'Camp Hill',
          address: '5 South 35th St, Camp Hill, PA 17011',
          phone: '(717)-695-7930'
        },
      ],
      order: {
        location: '',
        food: {
          chicken: [],
          appetizers: [],
          rice: [],
          trotter: [],
          soups: [],
          sides: []  
        },
        address: {},
        name: '',
        notes: '',
        time: '',
        totalQuant: 0,
        activeLocation: 'selectedLocation',
        active: 'selectedOrder'
      },
      currentSel: {
        quant: 1,
        type: '',
        sauce: '',
        size: '',
        side: '',
        price: 0.0
      },
      times: [
       '11:30 am', '11:45 am', '12:00 pm', '12:15 pm', '12:30 pm', '12:45 pm',
       '1:00 pm', '1:15 pm', '1:30 pm', '1:45 pm', '2:00 pm', '2:15 pm',
       '2:30 pm', '2:45 pm', '3:00 pm', '3:15 pm', '3:30 pm', '3:45 pm',
       '4:00 pm', '4:15 pm', '4:30 pm', '4:45 pm', '5:00 pm', '5:15 pm',
       '5:30 pm', '5:45 pm', '6:00 pm', '6:15 pm', '6:30 pm', '6:45 pm',
       '7:00 pm', '7:15 pm', '7:30 pm', '7:45 pm', '8:00 pm', '8:15 pm',
       '8:30 pm', '9:00 pm'
      ]
    };
  }


  renderLocationSelection() {
    let order = this.state.order
    let locations = this.state.locations

    return (
      <>
      <div className="row">
        <div className="ordering__container-header">
          PICK A LOCATION
        </div>
      </div>
      <div className="row">
        <div className="ordering__container-content">

        {locations.map((location) => {
          let active = '';
          let strup = order.location;
          if (strup === location.name) {
            active = order.activeLocation;
          }

          return (
            <div className="row">
              <div 
                className={`ordering__menuselect-main ${active} col-md-12`}
                onClick={() => 
                  this.setState({
                    ...this.state,
                    order: {
                      ...this.state.order,
                      location: this.state.order.location === location.name ? '' : location.name,
                      activeLocation: 'selectedLocation'
                    }
                  })
                }>
                    <div className="ordering__menuselect-main_header col-md-4">
                      {location.name}
                    </div>
                    <div className="ordering__menuselect-main_content col-md-8">
                      {location.address}
                      <br />
                      {location.phone}
                    </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      </>
    );
  }

  renderSteps(navActive) {
    switch (navActive.step) {
      case 'LOCATION':
        // show location options 
        return this.renderLocationSelection();
      case 'FOOD':
        // show menu 
        return this.renderOrderComponent();
      case 'PICKUP':
        return this.renderPickUpForm();
      default:
        return null;
    }
  }

  renderOrderNav() {
    const navActive = this.state.navActive;
    const navSteps = this.state.steps;

    return (
      <div className="ordering__nav">
          <ul className="ordering__nav-list u-margin-bottom-small">
              {navSteps.map((step, idx) => {
              let active = '';
              let strup = navActive.step.toUpperCase();
              if (strup === step) {
                active = navActive.active
              }
              return (
                <li
                  className={`ordering__nav-list--item ${active}`}
                  key={idx}
                  onClick={() =>
                    this.setState({
                      navActive: {
                        ...this.state.navActive,
                        step: step,
                      },
                    })
                  }
                >
                  {step}
                </li>
              );
            })}
          </ul>
      </div>
    );
  }


  renderChickenMenu(sauces, chickenItems) {
    const chickenTypes = ['Whole', 'Wings', 'Drumsticks', 'Boneless']
    const sizes = ['Small', 'Large']
    const sides = ['White Rice', 'Pickled Radish']

    return (
      <>
      <div className="ordering__container-content">
        <div className="row">
          <div className="ordering__container-header">
            CHOOSE YOUR CHICKEN
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-menuContent col-lg-12">
            {chickenTypes.map((type) =>
            {
              let active = '';
              let strup = this.state.currentSel.item;
              if (strup === type) {
                active = 'selectedOrder';
              }
              return (
              <span 
                className={`ordering__container-menuContent ${active} col-lg-3`}
                onClick={() => 
                  this.setState({
                    ...this.state,
                    currentSel: {
                      ...this.state.currentSel,
                      type: 'chicken',
                      item: this.state.currentSel.item === type ? '' : type,
                      active: 'selectedOrder'
                    }
                  })
                }
              >
                <span className='ordering__container-menuContent_text'>{type}</span>
              </span>
            )})}
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-header">
            CHOOSE SIZE
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-menuContent col-lg-12">
            {sizes.map((size) =>
            { 
              let active = '';
              let strup = this.state.currentSel.size;
              if (strup === size) {
                active = 'selectedOrder'
              }
            return (
              <span 
                className={`ordering__container-menuContent ${active} col-lg-6`}
                onClick={() => this.setState({
                  ...this.state,
                  currentSel: {
                    ...this.state.currentSel,
                      size: this.state.currentSel.size === size ? '' : size,
                      active: 'selectedOrder'
                  }
                })}
              >
                <span className='ordering__container-menuContent_text'>{size}</span>
              </span>
            )})}
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-header">
            CHOOSE SIDE
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-menuContent col-lg-12">
            {sides.map((side) =>
            {
              let active = '';
              let strup = this.state.currentSel.side;
              if (strup === side) {
                active = 'selectedOrder';
              }
              return (
              <span 
                className={`ordering__container-menuContent ${active} col-lg-6`}
                onClick={() => this.setState({
                  ...this.state,
                  currentSel: {
                    ...this.state.currentSel,
                    side: this.state.currentSel.side === side ? '' : side,
                    active: 'selectedOrder'
                  }
                })}
              >
                <span className='ordering__container-menuContent_text'>{side}</span>
              </span>
            )})}
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-header">
            CHOOSE SAUCE
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-sauce">
            {sauces.map((sauce) =>
              {
                let active = '';
                let strup = this.state.currentSel.sauce;
                if (strup === sauce) {
                  active = 'selectedLocation';
                }
                return (
                <span 
                  className={`ordering__container-sauce_button ${active}`}
                  onClick={() => this.setState({
                    ...this.state,
                    currentSel: {
                      ...this.state.currentSel,
                      sauce: this.state.currentSel.sauce === sauce ? '' : sauce,
                      active: 'selectedLocation'
                    }
                  })}
                >
                  <div className='ordering__container-sauce_button_content'>
                      <img className="ordering__container-sauce_button_content--img" src={sauce.src} />
                    <span>{sauce.name}</span>
                  </div>
                  
                </span>
            )})}
          </div>
        </div>

        <div className="row">
          <div className="ordering__container-header">
            ADD TO CART
          </div>
        </div>


      </div>
      </>
    )
  }

  addToCart() {
    // add currentSel to cart
    this.setState({
      ...this.state,
      currentSel: {
        quant: 1,
        type: '',
        item: '',
        sauce: '',
        size: '',
        side: '',
        price: 0.0
      }
    })
  }


  renderOtherMenus(types) {
    return (
      <>
        <div className="ordering__container-content">
          {
            types.map(type => 
              {
                let active = '';
                let strup = this.state.currentSel.item;
                if (strup === type.name) {
                active = 'selectedLocation';
                }
              
                return (
                  <div 
                    className={`ordering__container-other_button ${active}`}
                    onClick={() => this.setState({
                      ...this.state,
                      currentSel: {
                        ...this.state.currentSel,
                        type: type.type,
                        item: this.state.currentSel.item === type.name ? '' : type.name,
                        price: type.price,
                        active: 'selectedLocation'
                      }
                    })}
                  >
                    <div className='ordering__container-other_button_left'>
                      <span className='ordering__container-other_button_left-header'>
                        {type.name}
                      </span>
                      {type.description}
                    </div>
                    <div className='ordering__container-other_button_right'>
                      ${type.price}
                    </div>
                  </div>
                )
              }
            )
          }
        </div>
      </>
    )
  }


  renderMenuComponent(navActive) {
    switch (navActive.selection) {
      case 'CHICKEN':
        const sauce = this.props.menu.chicken.items.filter(
          (item) => item.type === 'chicken'
        );
        const chickenItems = this.props.menu.chicken.prices.filter(
          (price) => price.item === 'chicken'
        );
        return (this.renderChickenMenu(sauce, chickenItems))
      case 'APPETIZERS':
        const appetizers = this.props.menu.items.filter(
          (item) => item.type === 'appetizer'
        );
        // 
        return (this.renderOtherMenus(appetizers))
      case 'RICE DISHES':
        const rice = this.props.menu.items.filter(
          (item) => item.type === 'rice'
        );
        return (this.renderOtherMenus(rice))
      case 'TROTTER':
        const trotter = this.props.menu.items.filter(
          (item) => item.type === 'trotter'
        );
        return (this.renderOtherMenus(trotter))
      case 'SOUPS':
        const soups = this.props.menu.items.filter(
          (item) => item.type === 'soup'
        );
        return (this.renderOtherMenus(soups))
      case 'SIDES':
        const sides = this.props.menu.items.filter(
          (item) => item.type === 'side'
        );
        return (this.renderOtherMenus(sides))
      default:
        return null;
    }
  }


  renderOrderComponent() {
    const navActive = this.state.navActive;
    const menuItems = this.state.menuItems;

    return (
      <>
        
        <div className="ordering__menuNav row">
            <ul className="ordering__menuNav-list u-margin-bottom-small">
            {menuItems.map((item, idx) => {
              let active = '';
              let strup = navActive.selection.toUpperCase();
              if (strup === item) {
                active = navActive.active;
              }
              return (
                <li
                  className={`ordering__menuNav-list--item ${active}`}
                  key={idx}
                  onClick={() =>
                    this.setState({ ...this.state, 
                      navActive: {
                        ...this.state.navActive,
                        selection: item,
                        active: 'selected',
                      },
                    })
                  }
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row">
          <AnimateSharedLayout>
            {this.renderMenuComponent(navActive)}
          </AnimateSharedLayout>
        </div>
      </>
    )
  }

  renderPickUpForm() {
    const times = this.state.times

    return (
      <>
      <div className="ordering__container-content">
        <div className="ordering__form col-md-12">
            <div className="ordering__form-left col-md-6">
              <div className="row">
                <span className="ordering__form-header">
                  NAME FOR THE ORDER
                </span>
                <div className="ordering__form-left_input"> 
                  <input type="text" placeholder="First and last name" style={{border: 0}}
                    value={this.state.order.name} />
                </div>
              </div>
              <br /><br />
              <div className="row">
                <span className="ordering__form-header">
                  NOTES FOR THE ORDER
                </span>
                <div className="ordering__form-left_textarea">
                  <textarea type="text" placeholder="e.g., Extra napkins pls" style={{border: 0}} 
                    value={this.state.order.notes} />
                </div>
              </div>
            </div>

            <div className="ordering__form-right col-md-6">
              <div className="row">
                <div className="ordering__form-header">
                  SET UP A PICK UP TIME
                </div>
              </div>

              <div className="row">
                <div className='ordering__form-right_list'>
                  {times.map((time) =>
                    {
                      let active = '';
                      let strup = this.state.order.time;
                      if (strup === time) {
                        active = 'selectedLocation';
                      }
                      return (
                      <div 
                        className={`ordering__form-right_list--button ${active}`}
                        onClick={() => this.setState({
                          ...this.state,
                          order: {
                            ...this.state.order,
                            time: this.state.order.time === time ? '' : time,
                            active: 'selectedLocation'
                          }
                        })}
                      >
                        {time}
                      </div>
                  )})}
                </div>
              </div>
            </div>
        </div>
      </div>
      
      <div className="ordering__form-extra"><br />
          Please allow up to 30-45 min for us to prepare your order.
      </div>
      </>
    )
  }




  render() {
    return (
      <>

        <div className="ordering max-height col-md-12">
          <div className="ordering col-md-9">
            <div className="ordering__container">{this.renderSteps(this.state.navActive)}</div>
            <div className="ordering">{this.renderOrderNav()}</div>
          </div>
          <div className="ordering__cart max-height col-md-3">
            {/* CART WILL GO HERE */}
            <Cart order={this.state.order.totalQuant} />
          </div>
        </div>
      </>
    );
  }
}

export async function getStaticProps(ctx) {
  const file = fs.readFileSync('./public/static/data/items.json');
  const menu = JSON.parse(file);
  return {
    props: {
      menu,
    },
  };
}