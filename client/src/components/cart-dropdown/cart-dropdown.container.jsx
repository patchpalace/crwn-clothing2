import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});
const CartDropdownContainer = ({ hidden, ...props }) => (
    hidden ? null : <CartDropdown {...props} />
);
export default connect(mapStateToProps)(withRouter(CartDropdownContainer));




