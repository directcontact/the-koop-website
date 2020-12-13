

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
            <div className="location__block-first_map col-md-6"> MAP GOES HERE
              {/* <div id="mapid">
                <MapContainer center={[40.79629915489803, -77.85769951576074]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[40.79629915489803, -77.85769951576074]}>
                      <Popup>
                        The Koop @ State College <br />
                        129 Locust Ln, State College, PA 16801<br />
                        814-954-7807
                      </Popup>
                    </Marker>
                </MapContainer>
              </div> */}
            </div>
        </div>
      </>
    )
  }

  renderCHlocation() {
    return (
      <>
        <div className="location__block col-md-12">
          <div className="location__block-second_map col-md-6"> MAP GOES HERE
            {/* <div classname="location__map">
              <MapContainer center={[40.239090007995536, -76.94114703111805]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[40.239090007995536, -76.94114703111805]}>
                    <Popup>
                      The Koop @ Camp Hill <br />
                      5 South 35th Street, Camp Hill, PA 17011<br />
                      717-695-7930
                    </Popup>
                  </Marker>
              </MapContainer>
            </div> */}
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
