const OrderItem = (props) => {
  const { order } = props;
  const totalItems = order.items.length;
  const totalPrice = order.items.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  return (
    <div className="orderitem">
      <input type="checkbox" />
      <div className="orderitem__container">
        <h4 className="orderitem__container-header">{order.name}</h4>
        <h4 className="orderitem__container-header">{order.pickup}</h4>
        <div className="orderitem__container-notes">
          Notes (if any)
          <div className="orderitem__container-notes--content">
            {order.notes}
          </div>
        </div>
        {order.items.map((item) => (
          <div className="orderitem__container-item">
            <div className="orderitem__container-item--name">{item.name}</div>
            <div className="orderitem__container-item--price">{item.price}</div>
          </div>
        ))}
        <div className="orderitem__container-total">
          <div className="orderitem__container-total--items">{totalItems}</div>
          <div className="orderitem__container-total--prices">{totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
