import React from 'react';
import OrderItem from '../../components/order-item';

class IncompletePage extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  handleSelectAll() {
    this.setState({ checked: !this.state.checked });
    console.log(this.state);
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let checkbox of checkboxes) {
      checkbox.checked = this.state.checked;
    }
  }

  render() {
    return (
      <div className="incomplete">
        <div className="incomplete__header">
          <div className="incomplete__header-text">Incomplete Orders</div>
          <a className="incomplete__header-btn" onClick={this.handleSelectAll}>
            {this.state.checked ? 'Select All' : 'Deselect All'}
          </a>
          <a className="incomplete__header-btn">Mark as Complete</a>
        </div>
        <div className="incomplete__total">
          {this.props.orders.length} total
        </div>
        <form>
          {this.props.orders
            ? this.props.orders.map((order, idx) => (
                <>
                  <OrderItem key={order.id} order={order} />
                  {this.props.orders.length != idx + 1 ? (
                    <hr
                      className="incomplete__divider"
                      key={`${order.id}_divider`}
                    />
                  ) : null}
                </>
              ))
            : null}
        </form>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const url =
    process.env.NODE_ENV !== 'production'
      ? process.env.DEV_URL
      : process.env.PROD_URL;
  const key = process.env.API_KEY;
  try {
    const res = await fetch(`${url}/api/orders?key=${key}`);
    const orders = await res.json();
    return {
      props: {
        orders,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default IncompletePage;
