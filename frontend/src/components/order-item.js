const OrderItem = (props) => {
  const { order } = props;
  const totalItems = order.items.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  const totalPrice = order.items.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const tax = parseFloat((totalPrice * 0.06).toFixed(2));

  return (
    <div className="orderitem">
      <input className="orderitem__checkbox" type="checkbox" />
      <div className="orderitem__container">
        <h4 className="orderitem__container-header">{order.name}</h4>
        <h4 className="orderitem__container-header">Pickup: {order.pickup}</h4>
        <div className="orderitem__container-notes">
          Notes (if any): {order.notes}
        </div>
        <div className="orderitem__container-list">
          {order.items.map((item) => (
            <div
              className="orderitem__container-list--item"
              key={`${order.id}_${item.name}_${item.price}`}
            >
              <div
                className="orderitem__container-list--item---name"
                key={`${order.id}_${item.name}`}
              >
                {item.name} x {item.quantity}
              </div>
              <div
                className="orderitem__container-list--item---price"
                key={`${order.id}_${item.price}`}
              >
                ${item.price}
              </div>
            </div>
          ))}

          <hr className="orderitem__container-list--divider" />

          <div className="orderitem__container-list--total">
            <div className="orderitem__container-list--total---items">
              {totalItems} Item(s)
            </div>
            <div className="orderitem__container-list--total---prices">
              ${totalPrice + tax}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
