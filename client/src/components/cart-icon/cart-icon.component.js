import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import {
    CartIconContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = () => {
    const itemCount = useSelector((state) => selectCartItemsCount(state));
    const dispatch = useDispatch(); 
    const dispatchCartHidden = () => dispatch(toggleCartHidden());
   return (
       <CartIconContainer onClick={dispatchCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
         );
};
   
export default CartIcon;
