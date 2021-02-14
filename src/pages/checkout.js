import React from 'react';

import { connect } from 'react-redux';

// ORDERING PAGE CHECK OUT BUTTON WILL LEAD TO THIS
// CONFIRMATION TYPE PAGE WHICH WILL THEN REDIRECT TO
// STRIPE'S PAGE. ALTER THE DATA TO MATCH STRIPE'S
// REQUIREMENTS HERE!

// 1) UDEMY CODE
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//     // 3) Create session as response
//     res.status(200)
// })

// 2) Stripe Docs

// const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY)

// const ProductDisplay = ({ handleClick }) => {
//     <section>
//         list all cart items
//         <div className="product">
//             <div className="description">
//                 <h3>title</h3>
//                 <h5>price</h5>
//             </div>
//         </div>
//         <button type="button" id="checkout-button"
//         role="link" onClick={handleClick}>
//             Checkout
//         </button>
//     </section>
// }

const Checkout = (props) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    } else if (query.get('canceled')) {
      setMessage("Order canceled -- checkout when you're ready");
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    // when the customer clicks on the button, redirect them to Checkout

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // if 'redirectToCheckout' fails due to a browser or network error,
      // display the localized error message to your customer using
      // 'result.error.message'
    }
  };

  return message ? (
    <>
      <div className="checkout max-height">
        <Message message={message} />
      </div>
    </>
  ) : (
    <>
      <div className="checkout max-height">
        <ProductDisplay handleClick={handleClick} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Checkout);
