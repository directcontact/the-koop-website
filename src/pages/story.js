export default class StoryPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderHeader() {
    return (
      <>
        <br />
        <h1 className="story__header">THE KOOP</h1>
        <div className="story__subheader u-margin-bottom-medium">
          KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
        </div>
      </>
    );
  }

  renderAbout() {
    return (
      <>
        <div className="story__text-row col-md-12">
          {/* <div className="u-margin-bottom-medium col-md-6"> */}
          <div className="col-md-6">
            <h3 className="story__text-title">
              NOT ALL FRIED CHICKENS ARE CREATED EQUAL
            </h3>
            <div className="story__text-content">
              <br />
              NEVER FROZEN - SPECIAL MARINADE - SPECIAL UNIQUE BATTER MIX
              <br />
              COOKED THE SAME WAY, EACH AND EVERY TIME TO DUPLICATE THE SAME
              TASTE UNIQUE BATTER MIX CREATE A BARRIER TO KEEP THE MEAT MOIST
              AND CRISPY OUT LOWER PRICES THAN COMPETITION: BRAND-NAME MEALS AT
              NO-FRILLS PRICES LARGER PORTIONS THAN THE COMPETITION
            </div>
          </div>

          {/* <div className="u-margin-botttom-medium col-md-6"> */}
          <div className="col-md-6">
            <h3 className="story__text-title">PHENOMENAL TASTE</h3>
            <div className="story__text-content">
              <br />
              IT IS DELICIOUS HOT, STILL GREAT THE NEXT DAY
              <br />
              ONE BITE, YOU WILL BE HOOKED
              <br />
              THE KOOP HAS DIVERSE MENU ITEMS TO SATISFY EVERY PALLET
              <br />
              <br />
              BAKED OR ROASTED FOR THE HEALTH-CONSCIOUS
              <br />
              CRISPY MORSELS FOR THE LITTLE ONES
              <br />
              SPICY FOR THE ADVENTUROUS
              <br />
              AUTHENTIC FOR THE DARING
            </div>
          </div>
        </div>
      </>
    );
  }

  renderFranchise() {
    return (
      <div className="story__greyBack col-md-12">
        <div className="story__text-column col-md-12">
          <br />
          <div className="story__text-title">FRANCHISE</div>
          <div className="story__text-content">
            <br />
            WE ARE LOOKING FOR CANDIDATES WHO ARE ENTHUSIASTIC TO START THEIR
            OWN CHICKEN KOOP.
            <br />
            PLEASE CONTACT STACY LEE AT 717-471-1602
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="story max-height">
          {this.renderHeader()}
          {this.renderAbout()}
        </div>
        <div className="story max-height">{this.renderFranchise()}</div>
      </>
    );
  }
}
