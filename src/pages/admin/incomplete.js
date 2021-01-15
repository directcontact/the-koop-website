import React from 'react';
import OrderItem from '../../components/order-item';

class IncompletePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="incomplete">
        <div className="incomplete__headers">
          <div className="incomplete__headers-header">Incomplete Orders</div>
          <a className="incomplete__headers-btn">Select All</a>
          <a className="incomplete__headers-btn">Mark as Complete</a>
        </div>
        <div className="incomplete__total">X total</div>
        <form>
          {this.props.orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
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
  const res = await fetch(`${url}/api/orders?key=${key}`);
  const orders = await res.json();
  return {
    props: {
      orders,
    },
  };
}

export default IncompletePage;
