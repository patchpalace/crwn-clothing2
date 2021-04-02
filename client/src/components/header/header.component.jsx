import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer
    from '../../components/cart-dropdown/cart-dropdown.container';
import { selectCurrentUser } from '../../redux/user/user.selector.js';


import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
    HeaderContainer, LogoContainer,
    OptionsContainer, OptionLink
} from './header.styles.jsx';

const Header = ({ currentUser, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
        <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
      //<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        ) : (
                <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            )}
        <CartIcon />
    </OptionsContainer>
      <CartDropdownContainer />
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Header);
