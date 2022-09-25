import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import {
  decrementCraterPrint,
  decrementFlatironsPrint,
  incrementCraterPrint,
  incrementFlatironsPrint,
  resetCraterPrintsToZero,
  resetFlatironsPrintToZero
} from '../redux_store/slices/productsSlice';
import { useAppSelector } from '../redux_store/store';
import { getStripe } from '../stripe/loadStripe';

interface SlidingShoppingCartProps {
  cartIsActive: boolean;
  setCartIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingShoppingCart: React.FC<SlidingShoppingCartProps> = ({
  cartIsActive,
  setCartIsActive
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    () => setCartIsActive(false);
  }, []);

  //--------------------------------Menu active or not animation-----------------------------------\\

  const ShoppingCartTransition = useTransition(cartIsActive, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(100%)' }
  });

  //-----------------------------------Import products from slice-------------------------------------\\

  const { flatironsPrint, craterPrint } = useAppSelector(
    (state) => state.productsForSale
  );
  const itemInCart = [flatironsPrint, craterPrint];

  //----------------------------------------Stripe Checkout--------------------------------------------\\

  const craterPrintStripe = {
    price: `${import.meta.env.VITE_CRATER_PRINT}`,
    quantity: craterPrint.quantity
  };

  const flatironsPrintStripe = {
    price: `${import.meta.env.VITE_FLATIRONS_PRINT}`,
    quantity: flatironsPrint.quantity
  };

  const checkoutOptionBothPrints = {
    lineItems: [craterPrintStripe, flatironsPrintStripe],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/store`
  };

  const checkoutOptionOnlyCrater = {
    lineItems: [craterPrintStripe],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/store`
  };

  const checkoutOptionOnlyFlatirons = {
    lineItems: [flatironsPrintStripe],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/store`
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    if (flatironsPrint.quantity != 0 && craterPrint.quantity != 0) {
      const { error } = await stripe.redirectToCheckout(
        checkoutOptionBothPrints
      );

      console.log(error);
    } else if (flatironsPrint.quantity > 0 && craterPrint.quantity == 0) {
      const { error } = await stripe.redirectToCheckout(
        checkoutOptionOnlyFlatirons
      );

      console.log(error);
    } else if (craterPrint.quantity > 0 && flatironsPrint.quantity == 0) {
      const { error } = await stripe.redirectToCheckout(
        checkoutOptionOnlyCrater
      );

      console.log(error);
    } else {
      console.log('Error your cart is empty!');
      return;
    }
  };

  //---------------------------------------------Shopping Cart Actions------------------------------------\\

  const handleClearCartOrRemoveItem = (key?: string) => {
    switch (key) {
      case `${flatironsPrint.key}`:
        dispatch(resetFlatironsPrintToZero());
        break;
      case `${craterPrint.key}`:
        dispatch(resetCraterPrintsToZero());
        break;
      default:
        dispatch(resetCraterPrintsToZero());
        dispatch(resetFlatironsPrintToZero());
    }
  };

  const decrementPrint = (key: string) => {
    switch (key) {
      case `${flatironsPrint.key}`:
        dispatch(decrementFlatironsPrint());
        break;
      case `${craterPrint.key}`:
        dispatch(decrementCraterPrint());
        break;
      default:
        return;
    }
  };

  const incrementPrint = (key: string) => {
    switch (key) {
      case `${flatironsPrint.key}`:
        dispatch(incrementFlatironsPrint());
        break;
      case `${craterPrint.key}`:
        dispatch(incrementCraterPrint());
        break;
      default:
        return;
    }
  };

  return (
    <>
      {ShoppingCartTransition(
        (animation, item) =>
          item && (
            <CartWrapper style={animation}>
              <CloseModal
                src="/icons/cross.svg"
                onClick={() => setCartIsActive((state) => !state)}
              />
              {craterPrint.quantity + flatironsPrint.quantity === 0 ? (
                <EmptyCartCard>Your cart is empty!</EmptyCartCard>
              ) : (
                itemInCart.map((item, key) =>
                  item.quantity > 0 ? (
                    <CartCard key={key}>
                      <div>
                        {item.name}
                        <br />
                        <br /> ${item.price * item.quantity}
                      </div>
                      <ChooseQuantityAndRemoveWrapper>
                        <ChooseQuantityWrapper>
                          <DecrementButton
                            onClick={() => decrementPrint(item.key)}
                          >
                            -
                          </DecrementButton>
                          Qty: {item.quantity}
                          <IncrementButton
                            onClick={() => incrementPrint(item.key)}
                          >
                            +
                          </IncrementButton>
                        </ChooseQuantityWrapper>
                        <RemoveItemFromCartIcon
                          src="/icons/cross.svg"
                          onClick={() => handleClearCartOrRemoveItem(item.key)}
                        />
                      </ChooseQuantityAndRemoveWrapper>
                    </CartCard>
                  ) : null
                )
              )}
              total: $
              {craterPrint.price * craterPrint.quantity +
                flatironsPrint.price * flatironsPrint.quantity}
              <br />
              <ButtonWrapper>
                <RemoveButton onClick={() => handleClearCartOrRemoveItem()}>
                  Clear Cart
                </RemoveButton>
                <CheckoutButton onClick={redirectToCheckout}>
                  Checkout
                </CheckoutButton>
              </ButtonWrapper>
            </CartWrapper>
          )
      )}
    </>
  );
};

export default SlidingShoppingCart;

const CartWrapper = styled(animated.div)`
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  top: calc(50% - 10rem);
  left: calc(50% - 15rem);
  padding: 1rem;
  height: fit-content;
  width: 30rem;
  row-gap: 3rem;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  @media (max-width: 500px) {
    top: 20vh;
    left: 0rem;
    margin: 0rem 1rem 0rem 1.5rem;
    width: 80vw;
  }
`;

const CartCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

const EmptyCartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const CheckoutButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: rgba(71, 135, 120, 0.9);

  &.button-11:focus {
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;

const RemoveButton = styled(CheckoutButton)`
  background-color: rgba(217, 30, 24, 1);
`;

const ChooseQuantityWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const ChooseQuantityAndRemoveWrapper = styled(ChooseQuantityWrapper)`
  column-gap: 4rem;
  @media (max-width: 500px) {
    column-gap: 0rem;
  }
`;
const IncrementButton = styled(CheckoutButton)``;
const DecrementButton = styled(RemoveButton)``;

const RemoveItemFromCartIcon = styled.img`
  height: 1rem;
  padding: 1rem;
  cursor: pointer;
`;

const CloseModal = styled(RemoveItemFromCartIcon)`
  padding: 0.5rem;
  background-color: rgba(149, 165, 166, 0.8);
  border-radius: 5px;
  margin-bottom: -2rem;
`;
