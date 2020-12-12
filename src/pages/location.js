export default class LocationPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderSClocation() {
    return (
      <>
        <div className="location__block col-md-12">
          <div className="location__block-first col-md-6">
              <strong>The Koop @ State College</strong>
              <div>
                129 Locust Ln, State College, PA 16801  <br />
                814-954-7807<br />
                <strong>Sun - Thurs</strong>: 11am - 9pm <br/>
                <strong>Fri - Sat</strong>: 11am - 10pm
              </div>
          </div>
            <div className="location__block-first_map col-md-6"> 
              map goes here
            </div>
        </div>
      </>
    )
  }

  renderCHlocation() {
    return (
      <>
        <div className="location__block col-md-12">
          <div className="location__block-second_map col-md-6">
            map goes here
          </div>  
            
          <div className="location__block-second col-md-6">
            <strong>The Koop @ Camp Hill</strong>
            <div>
              5 South 35th St, Camp Hill, PA 17011<br />
              717-695-7930<br />
              <strong>Sun - Thurs</strong>: 11am - 9pm <br/>
              <strong>Fri - Sat</strong>: 11am - 10pm
            </div>
          </div>
        </div>
      </>
    )
  }

  // renderMapGrey() {
  //   return (
  //     <div className="location__map-grey">
  //       MAP GOES HERE
  //     </div>
  //   )
  // }

  // renderMapWhite() {
  //   return (
  //     <div className="location__map-white">
  //       MAP GOES HERE
  //     </div>
  //   )
  // }


  render() {
    return (
      <>
        <div className="location max-height">
          {this.renderSClocation()}
        </div>
        <div className="location max-height">
          {this.renderCHlocation()}
        </div>
      </>
    );
  }
}
