import React, { useState } from 'react';
import Hamburger from './Hamburger';
import SlidingShoppingCart from './ShoppingCartSlidingMenu';
import { useAppSelector } from '../redux_store/store';
import {
  StickyHeader,
  DesktopHeader,
  MobileHeader,
  ShoppingCartAndAmountWrapper,
  ShoppingCartSVG,
  CartAmount
} from '../stylesheets/styled_components/component_styles/headerAndShoppingCartStyles';

const HeaderAndShoppingCart: React.FC = () => {
  const { craterPrint, flatironsPrint } = useAppSelector(
    (state) => state.productsForSale
  );
  const [cartIsActive, setCartIsActive] = useState<boolean>(false);

  return (
    <StickyHeader>
      <DesktopHeader>
        | Kevin To
        <br /> | Photography
      </DesktopHeader>
      <MobileHeader>
        | KT <br />| Photo
      </MobileHeader>
      <ShoppingCartAndAmountWrapper
        onClick={() => setCartIsActive((state) => !state)}
      >
        <ShoppingCartSVG src="/icons/basket.svg" />{' '}
        <CartAmount>
          {craterPrint.quantity + flatironsPrint.quantity}
        </CartAmount>
      </ShoppingCartAndAmountWrapper>
      <SlidingShoppingCart
        cartIsActive={cartIsActive}
        setCartIsActive={setCartIsActive}
      />
      <Hamburger />
    </StickyHeader>
  );
};

export default HeaderAndShoppingCart;
