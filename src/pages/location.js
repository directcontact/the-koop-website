import React from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/map'), {
  ssr: false,
  loading: () => (
    <div className="location__map-loading">
      LOADING...
    </div>
  )
});

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
            <strong>THE KOOP @ STATE COLLEGE</strong>
            <br />
            <br />
            <div>
              129 Locust Ln, State College, PA 16801 <br />
              <br />
              814-954-7807
              <br />
              <br />
              <strong>Sun - Thurs</strong>: 11am - 9pm <br />
              <strong>Fri - Sat</strong>: 11am - 10pm
            </div>
          </div>
          <div className="location__block-first_map col-md-6">
            <div className="location__map">
              <MapComponent coords={[40.7962341779397, -77.85778534626027]} />
            </div>
          </div>
        </div>
      </>
    );
  }

  renderCHlocation() {
    return (
      <>
        <div className="location__block col-md-12">
          <div className="location__block-second_map col-md-6">
            <div className="location__map">
              <MapComponent coords={[40.2390900080966, -76.94114703093386]} />
            </div>
          </div>

          <div className="location__block-second col-md-6">
            <strong>THE KOOP @ CAMP HILL</strong>
            <br />
            <br />
            <div>
              5 South 35th St, Camp Hill, PA 17011
              <br />
              <br />
              717-695-7930
              <br />
              <br />
              <strong>Sun - Thurs</strong>: 11am - 9pm <br />
              <strong>Fri - Sat</strong>: 11am - 10pm
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="location max-height">{this.renderSClocation()}</div>
        <div className="location max-height">{this.renderCHlocation()}</div>
      </>
    );
  }
}
