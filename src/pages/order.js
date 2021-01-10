import React from 'react';
import Cart from '../components/cart';

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
        active: 'selectedOrder'
      },
      currentSel: {
        quant: 0,
        type: '',
        sauce: '',
        size: '',
        price: 0.0
      }
    };
  }

  toggleLocationCSS(location) {

    if (this.state.order.location === null) {
      this.setState({
        ...this.state,
        order: {...this.state.order, location }
      })
    } else if (this.state.order.location !== location ) {
      this.setState({
        ...this.state,
        order: {...this.state.order, location }
      })
    } else if (this.state.order.location === location ) {
      this.setState({
        ...this.state,
        order: {...this.state.order, location: ''}
      })
    }

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
          if (strup === location) {
            active = order.active;
          }

          return (
            <div className="row">
              <div 
                className={`ordering__menuselect-inactive ${active} col-lg-12 `}
                onClick={() => 
                  this.setState({
                    ...this.state,
                    order: {
                      ...this.state.order,
                      location: location.name,
                      active: 'selectedOrder'
                    }
                  })
                }>
                    <div className="ordering__menuselect-inactive_header col-lg-4">
                      {location.name}
                    </div>
                    <div className="ordering__menuselect-inactive_content col-lg-8">
                      {location.address}
                      <br />
                      {location.phone}
                    </div>
              </div>
            </div>
          )
        })}

          {/* <div className="row">
            <div 
            className={ this.state.order.location === "State College" ? 
            'ordering__menuselect-active col-lg-12' : 
            'ordering__menuselect-inactive col-lg-12' }
            onClick={() => this.toggleLocationCSS("State College")}>
              <div className="ordering__menuselect-inactive_header col-lg-4">State College</div>
              <div className="ordering__menuselect-inactive_content col-lg-8">
                129 Locust Ln, State College, PA 16801
                <br />
                (814)-954-7807
              </div>
            </div>
          </div>
          <div className="row">
            <div
            className={ this.state.order.location === "Camp Hill" ? 
            'ordering__menuselect-active col-lg-12' : 
            'ordering__menuselect-inactive col-lg-12' }
            onClick={() => this.toggleLocationCSS("Camp Hill")}>
              <div className="ordering__menuselect-inactive_header col-lg-4">Camp Hill</div>
              <div className="col-lg-8">
                5 South 35th St, Camp Hill, PA 17011
                <br />
                (717)-695-7930
              </div>
            </div>
          </div> */}
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
        // show address input + time
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
                active = navActive.active;
              }
              return (
                <li
                  className={`ordering__nav-list--item ${active}`}
                  key={idx}
                  onClick={() =>
                    this.setState({
                      navActive: {
                        ...this.state.navActive,
                        // item: item.toLowerCase(),
                        step: step,
                        active: 'selected',
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

  renderChickenMenu(sauce, chickenItems) {
    const chickenTypes = ['Whole', 'Wings', 'Drumsticks', 'Boneless']
    const size = ['Small', 'Large']
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
            {return (
              <span className="ordering__container-menuContent col-lg-3">
                {type}
              </span>
            )})}
          </div>
        </div></div>
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
        // return <ChickenMenu sauce={sauce} prices={prices} />;
        return (this.renderChickenMenu(sauce, chickenItems))
      case 'APPETIZERS':
        // const appetizer = this.props.menu.items.filter(
        //   (item) => item.type === 'appetizer'
        // );
        // return <StandardMenu items={appetizer} />;
        return (<div>APPETIZERS</div>)
      case 'RICE DISHES':
        // const rice = this.props.menu.items.filter(
        //   (item) => item.type === 'rice'
        // );
        // return <StandardMenu items={rice} />;
        return (<div>RICE DISHES</div>)
      case 'TROTTER':
        // const trotter = this.props.menu.items.filter(
        //   (item) => item.type === 'trotter'
        // );
        // return <StandardMenu items={trotter} />;
        return (<div>TROTTER</div>)
      case 'SOUPS':
        // const soups = this.props.menu.items.filter(
        //   (item) => item.type === 'soup'
        // );
        // return <StandardMenu items={soups} />;
        return (<div>SOUPS</div>)
      case 'SIDES':
        // const sides = this.props.menu.items.filter(
        //   (item) => item.type === 'side'
        // );
        // return <StandardMenu items={sides} />;
        return (<div>SIDES</div>)
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
        {/* <hr className="solid u-margin-top-small" /> */}
        {/* <div className="ordering__container col-md-12"> */}
        <div className="row">
          <AnimateSharedLayout>
            {this.renderMenuComponent(navActive)}
          </AnimateSharedLayout>
          {/* <div className="ordering__container-header">MENU</div> */}
        </div>
      </>
    )
    // switch (navActive.selection) {
    //   case 'CHICKEN':
    //   case 'APPETIZERS':
    //   case 'RICE DISHES':
    //   case 'TROTTER':
    //   case 'SOUPS':
    //   case 'SIDES':
    //   default:
    //     return null;
    // }

  
  }



  render() {
    return (
      <>
        <div className="ordering max-height col-md-12">
          <div className="ordering col-md-10">
            <div className="ordering__container">{this.renderSteps(this.state.navActive)}</div>
            <div className="ordering">{this.renderOrderNav()}</div>
          </div>
          <div className="ordering col-md-2">
            CART WILL GO HERE
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