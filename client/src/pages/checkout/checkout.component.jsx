import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem
    from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton
    from '../../components/stripe-button/stripe-button.component';
import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selector';
import {
    CheckoutPageContainer, CheckoutHeaderContainer,
    HeaderBlockContainer, TotalContainer,
    TestWarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <dHeaderBlockContainer>
                <span>Price</span>
            </dHeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp 01/20 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />  
    </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);