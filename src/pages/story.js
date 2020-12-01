export default class StoryPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderHeader() {
    return (
      <div>
        <br />
          <h1 className="story__header">THE KOOP</h1>
          <p className="story__subheader u-margin-bottom-medium">
              KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
          </p>
      </div>
    );
  }

  renderAbout() {
    return (
      <div>
          <div className="story__text u-margin-bottom-medium">
            <div className="story__title">NOT ALL FRIED CHICKENS ARE CREATED EQUAL</div>

            NEVER FROZEN - SPECIAL MARINADE - SPECIAL UNIQUE BATTER MIX<br />
            COOKED THE SAME WAY, EACH AND EVERY TIME TO DUPLICATE THE SAME TASTE
            UNIQUE BATTER MIX CREATE A BARRIER TO KEEP THE MEAT MOIST AND CRISPY OUT
            LOWER PRICES THAN COMPETITION: BRAND-NAME MEALS AT NO-FRILLS PRICES
            LARGER PORTIONS THAN THE COMPETITION<br /><br />

            <div className="story__title">PHENOMENAL TASTE</div>

            IT IS DELICIOUS HOT, STILL GREAT THE NEXT DAY<br />
            ONE BITE, YOU WILL BE HOOKED<br />
            THE KOOP HAS DIVERSE MENU ITEMS TO SATISFY EVERY PALLET<br /><br />

            BAKED OR ROASTED FOR THE HEALTH-CONSCIOUS<br />
            CRISPY MORSELS FOR THE LITTLE ONES<br />
            SPICY FOR THE ADVENTUROUS<br />
            AUTHENTIC FOR THE DARING
          </div>
      </div>
    )
  }

  renderFranchise() {
    return (
      <div className="story__greyBack">
        <div className="story__text">
          <br />
          <div className="story__title">FRANCHISE</div>
          <br />
          WE ARE LOOKING FOR CANDIDATES WHO ARE ENTHUSIASTIC TO START THEIR OWN CHICKEN KOOP.
          <br />
          PLEASE CONTACT STACY LEE AT 717-471-1602
        </div>
      </div>

    )
  }

  render() {
    return (
      <>
        <div className="story max-height">
          {this.renderHeader()}
          {this.renderAbout()}
        </div>
        <div className="story max-height">
          {this.renderFranchise()}
        </div>
      </>
      
    );
  }

}
