export default class CartPage extends React.Component {
  static async getInitialProps(ctx) {
    const state = ctx.store.getState();
    return {
      ...state,
    };
  }

  render() {
    return (
      <div className="cart">
        <div className="cart__main">How can we cater for you?</div>
        <div className="btn">ORDER</div>
      </div>
    );
  }
}
