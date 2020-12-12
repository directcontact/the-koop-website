export default class IndexPage extends React.Component {
  // handleEmailButton() {
  //   const value = document.querySelector('.main__input').value;
  //   fetch('/api/email', {
  //     method: 'POST',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       value: value,
  //     }),
  //   });
  // }

  renderHomeScreen() {
    return (
      <>
        <div className="main max-height">
          <div className="main__container">
            <h1 className="main__container-header">THE KOOP</h1>
            <h2 className="main__container-subheader">
              KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
            </h2>
          </div>
        </div>
        {/* <input placeholder="Input your email here" className="main__input" />
        <button
          className="main__button"
          onClick={() => this.handleEmailButton()}
        >
          Send email
        </button> */}
      </>
    );
  }

  render() {
    return <>{this.renderHomeScreen()}</>;
  }
}
