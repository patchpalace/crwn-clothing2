import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ _ __';
    const onToken = token => {

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            },
        }).then((response) => {
            alert('Payment was successfull')
        }).catch((error) => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with the payment. 
                  Please make sure you use the provided 
                  test credit card number')
        });
    };
    return (
        <StripeCheckout
            lable='Pay Now'
            name='CRWN Clothin Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    );
};
export default StripeCheckoutButton;