import React from 'react';
import Cart from '../components/cart';

// import fs from 'fs';
import { AnimateSharedLayout } from 'framer-motion';


export default class OrderingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: {
        step: 'LOCATION',
        selection: 'chicken',
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
      order: {
        location: null,
        food: {},
        address: {},

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
    }

  }

  renderLocationSelection() {
    let order = this.state.order

    return (
      <>
      <div className="row">
        <div className="ordering__container-header">
          PICK A LOCATION
        </div>
      </div>
      <div className="row">
        <div className="ordering__container-content">
          <div className="row">
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
          </div>
        </div>
      </div>
      </>
    );
      // location selection screen
      // choose between state college or camp hill (title on left, address + phone num on right)
      // unselected is cream/light tan color. selected is mocha brown color
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


  // renderMenuComponent(navActive) {
  //   switch (navActive.selection) {
  //     case 'chicken':
  //       const sauce = this.props.menu.chicken.items.filter(
  //         (item) => item.type === 'chicken'
  //       );
  //       const prices = this.props.menu.chicken.prices.filter(
  //         (price) => price.item === 'chicken'
  //       );
  //       return <ChickenMenu sauce={sauce} prices={prices} />;
  //     case 'appetizers':
  //       const appetizer = this.props.menu.items.filter(
  //         (item) => item.type === 'appetizer'
  //       );
  //       return <StandardMenu items={appetizer} />;
  //     case 'rice dishes':
  //       const rice = this.props.menu.items.filter(
  //         (item) => item.type === 'rice'
  //       );
  //       return <StandardMenu items={rice} />;
  //     case 'trotter':
  //       const trotter = this.props.menu.items.filter(
  //         (item) => item.type === 'trotter'
  //       );
  //       return <StandardMenu items={trotter} />;
  //     case 'soups':
  //       const soups = this.props.menu.items.filter(
  //         (item) => item.type === 'soup'
  //       );
  //       return <StandardMenu items={soups} />;
  //     case 'sides':
  //       const sides = this.props.menu.items.filter(
  //         (item) => item.type === 'side'
  //       );
  //       return <StandardMenu items={sides} />;
  //     default:
  //       return null;
  //   }
  // }


  renderOrderComponent() {
    const navActive = this.state.navActive;
    const navItems = this.state.menuItems;

    return (
      <>
        <div className="ordering__menuNav">
            <ul className="ordering__menuNav-list u-margin-bottom-small">
            {navItems.map((item, idx) => {
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
                        selection: item.toLowerCase(),
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
        <div className="ordering__container">
          {/* <AnimateSharedLayout>
            {this.renderMenuComponent(navActive)}
          </AnimateSharedLayout> */}
          <div className="ordering__container-header">MENU</div>
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

// export async function getStaticProps(ctx) {
//   const file = fs.readFileSync('./public/static/data/items.json');
//   const menu = JSON.parse(file);
//   return {
//     props: {
//       menu,
//     },
//   };
// }