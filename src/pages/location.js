export default class LocationPage extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [
        {
          title: "The Koop @ State College",
          address: "129 Locust Ln, State College, PA 16801",
          phone: "814-954-7807",
          days: [
            "Sun - Thurs", "Fri - Sat"
          ],
          hours: [
            "11am - 9pm", "11am - 10pm"
          ]
        },
        {
          title: "The Koop @ Camp Hill",
          address: "5 South 35th St, Camp Hill, PA 17011",
          phone: "717-695-7930",
          days: [
            "Sun - Thurs", "Fri - Sat"
          ],
          hours: [
            "11am - 9pm", "11am - 10pm"
          ]
        }
      ]
    };
  }

  renderSClocation() {
    let location1 = this.state.locations[0]
    return (
      <div className="location__greybg">
          <div className="location_text">
            <strong>{location1.title}</strong>
            <p>
              {location1.address}<br />
              {location1.phone}<br />
              <strong>{location1.days[0]}</strong>: {location1.hours[0]} <br/>
              <strong>{location1.days[1]}</strong>: {location1.hours[1]}
            </p>
          </div>
          <div className="location__display-right">
            <div className="location__map">
              map goes here
            </div>
          </div>
      </div>
    )
  }

  renderCHlocation() {
    let location2 = this.state.locations[1]
    return (
      <div className="location__whitebg">
        <div className="location__map">map goes here</div>
        <div className="location__display-right">
          <div className="location_text">
            <strong>{location2.title}</strong>
            <p>
              {location2.address}<br />
              {location2.phone}<br />
              <strong>{location2.days[0]}</strong>: {location2.hours[0]} <br/>
              <strong>{location2.days[1]}</strong>: {location2.hours[1]}
            </p>
          </div>
        </div>
      </div>
    )
  }

  renderMapGrey() {
    return (
      <div className="location__map-grey">
        MAP GOES HERE
      </div>
    )
  }

  renderMapWhite() {
    return (
      <div className="location__map-white">
        MAP GOES HERE
      </div>
    )
  }


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
