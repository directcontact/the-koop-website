import React from 'react';
import Cart from '../components/cart'

export default class OrderingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: {
        step: 'LOCATION',
        selection: '',
        cart: [],
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
      ]
    };
  }

  renderSteps(navActive) {
    switch (navActive.step) {
      case 'LOCATION':
        // show location options 
        this.renderLocationSelection();
      case 'FOOD':
        // show menu 
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

  renderLocationSelection() {
    return (
      <div>
        PICK A LOCATION
      </div>
    );
      // location selection screen
      // choose between state college or camp hill (title on left, address + phone num on right)
      // unselected is cream/light tan color. selected is mocha brown color
  }

  renderOrderComponent(navActive) {
    switch (navActive.selection) {
      case 'CHICKEN':
      case 'APPETIZERS':
      case 'RICE DISHES':
      case 'TROTTER':
      case 'SOUPS':
      case 'SIDES':
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <div className="ordering max-height col-md-12">
          <div className="col-md-10">
            <div className="ordering__header">test</div>
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