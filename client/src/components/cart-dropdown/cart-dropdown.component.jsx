import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropdownBox,EmptyMessageContainer,
    CartItemsContainer, CartDropdownButton
}from './cart-dropdown.styles';

const CartDropdown = ({ cartItems}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const dispatchCartHidden = () => dispatch(toggleCartHidden());
    return (
        <CartDropdownBox>
          <CartItemsContainer>
              {cartItems.length ? (
                  cartItems.map(cartItem => (
                      <CartItem key={cartItem.id} item={cartItem} />
                  ))
              ) : (
                        <EmptyMessageContainer>Your cart is empty
                        </EmptyMessageContainer>
              )}
          </CartItemsContainer>
          <CartDropdownButton
              onClick={() => {
                  history.push('/checkout');
                  dispatchCartHidden();
              }}>
              GO TO CHECKOUT
     </CartDropdownButton>
        </CartDropdownBox>
    );
};
export default CartDropdown;