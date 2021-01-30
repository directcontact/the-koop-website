import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { connect } from 'react-redux'


// ORDERING PAGE CHECK OUT BUTTON WILL LEAD TO THIS
// CONFIRMATION TYPE PAGE WHICH WILL THEN REDIRECT TO 
// STRIPE'S PAGE. ALTER THE DATA TO MATCH STRIPE'S
// REQUIREMENTS HERE!


// 1) UDEMY CODE
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//     // 1) Get the current checkout order
//     const order = await Order.findById(req.params.orderId);


//     // 2) Create checkout session
//     const session = await stripe.checkout.session.create({
//         payment_method_types: ['card'],
//         success_url: `${req.protocol}://${req.get('host')}/`,
//         cancel_url: `${req.protocol}://${req.get('host')}/order/${order.slug}`,
//         // customer_email: req.user.email,
//         client_reference_id: req.params.orderId,
//         line_items: [
//             {
               
//             },
//         ]
//     })


//     // 3) Create session as response
//     res.status(200).json({
//         status: 'success',
//         session
//     })
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
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.")
        } else if (query.get("canceled")) {
            setMessage("Order canceled -- checkout when you're ready")
        }
    }, []);

    const handleClick = async (event) => {
        const stripe = await stripePromise;

        const response = await fetch("/create-checkout-session", {
            method: 'POST',
        })

        const session = await response.json();

        // when the customer clicks on the button, redirect them to Checkout

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })

        if (result.error) {
            // if 'redirectToCheckout' fails due to a browser or network error,
            // display the localized error message to your customer using
            // 'result.error.message'
        }
    }


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
    )
    
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Checkout);