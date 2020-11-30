export default class CateringPage extends React.Component {
  static async getInitialProps(ctx) {
    const state = ctx.store.getState();
    return {
      ...state,
    };
  }

  render() {
    return (
      <div className="catering">
        <div className="catering__header u-margin-bottom-medium">
          How can we cater for you?
        </div>
        <div className="btn">ORDER</div>
      </div>
    );
  }
}
