import React, { useState } from 'react';
import styled from 'styled-components';
import { Header1 } from '../stylesheets/global_component_styles';
import Hamburger from './Hamburger';
import SlidingShoppingCart from './ShoppingCartSlidingMenu';
import { useAppSelector } from '../redux_store/store';

const HeaderAndShoppingCart = () => {
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

const StickyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0rem 1rem 0rem -1rem;
  @media (max-width: 500px) {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(228, 228, 208, 0.6);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 4px -2px rgba(228, 228, 208, 0.6);
  }
`;

const ShoppingCartSVG = styled.img`
  width: 3rem;
  align-self: center;
  margin-right: 2rem;

  @media (max-width: 500px) {
    width: 2.5rem;
    margin-right: 0rem;
  }
`;

const CartAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  margin-top: -1rem;
  background-color: rgba(217, 30, 24, 1);
  color: whitesmoke;
  @media (max-width: 500px) {
    margin-top: -0.8rem;
    margin-left: 1.3rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const ShoppingCartAndAmountWrapper = styled.div`
  position: absolute;
  left: calc(96% - 2.5rem);
  top: 2rem;
  cursor: pointer;
  display: flex;
  width: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    top: calc(50% - 1.5rem);
    left: calc(50% - 2.5rem);
  }
`;

const DesktopHeader = styled.h1`
  padding-left: 1rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileHeader = styled.h2`
  padding-left: 8px;
  display: none;
  @media (max-width: 500px) {
    font-size: 1.2rem;
    display: block;
  }
`;
