import React from 'react';
import Cart from '../components/cart';


export default class OrderingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      navActive: {
        step: 'LOCATION',
        selection: '',
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
        location: '',
        food: {},
        address: {},

      }
    };
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
            <div className="ordering__menuselect-inactive col-lg-12"
            onClick={() => this.setState({...this.state, order: {...this.state.order, location: "State College"}})}>
              <div className="ordering__menuselect-inactive_header col-lg-4">State College</div>
              <div className="ordering__menuselect-inactive_content col-lg-8">
                129 Locust Lane, State College, PA 16801
                <br />
                (814)-954-7807
              </div>
            </div>
          </div>
          <div className="row">
            <div className="ordering__menuselect-inactive col-lg-12"
            onClick={() => this.setState({...this.state, order: {...this.state.order, location: "Camp Hill"}})}>
              <div className="ordering__menuselect-inactive_header col-lg-4">Camp Hill</div>
              <div className="col-lg-8">
                5 South 35th Street, Camp Hill, PA 17011
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



  renderOrderComponent(navActive) {
    return (
      <>
        <div className="ordering__header">MENU</div>
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