

const OrderingOther = (props) => {


    return (
        <>
          <div className="ordering__container-content">
            {
              props.types.map(type => 
                {
                  let active = '';
                  let strup = props.currentSel.item;
                  if (strup === type.name) {
                  active = 'selectedLocation';
                  }
                
                  return (
                    <div 
                      className={`ordering__container-other_button ${active}`}
                      onClick={() => props.selectOtherMenu(type)}
                    >
                      <div className='ordering__container-other_button_left'>
                        <span className='ordering__container-other_button_left-header'>
                          {type.name}
                        </span>
                        {type.description}
                      </div>
                      <div className='ordering__container-other_button_right'>
                        ${type.price}
                      </div>
                    </div>
                  )
                }
              )
            }
          </div>
        </>
      )
}

export default OrderingOther; 