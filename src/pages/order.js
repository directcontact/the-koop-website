import React from 'react';
import Cart from '../components/cart'

export default class OrderingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: {
        step: 'location',
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
    };
  }

  renderLocationSelection(navActive) {
      // location selection screen
      // choose between state college or camp hill (title on left, address + phone num on right)
      // unselected is cream/light tan color. selected is mocha brown color
  }

  renderOrderComponent(navActive) {
    switch (navActive.selection) {
      case 'chicken':
      case 'appetizers':
      case 'rice dishes':
      case 'trotter':
      case 'soups':
      case 'sides':
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <div className="ordering max-height">
            <div className="ordering__header">test</div>
        </div>
      </>
    );
  }
}