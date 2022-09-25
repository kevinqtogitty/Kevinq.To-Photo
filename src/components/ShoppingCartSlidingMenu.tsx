import React from 'react';
import { useDispatch } from 'react-redux';
import { useTransition } from 'react-spring';
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
import {
  CartWrapper,
  CloseModal,
  EmptyCartCard,
  CartCard,
  ChooseQuantityAndRemoveWrapper,
  ChooseQuantityWrapper,
  DecrementButton,
  IncrementButton,
  RemoveItemFromCartIcon,
  ButtonWrapper,
  RemoveButton,
  CheckoutButton
} from '../stylesheets/styled_components/component_styles/shoppingCartSlidingMenuStyles';

interface SlidingShoppingCartProps {
  cartIsActive: boolean;
  setCartIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingShoppingCart: React.FC<SlidingShoppingCartProps> = ({
  cartIsActive,
  setCartIsActive
}) => {
  const dispatch = useDispatch();

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
    cancelUrl: `kevinqtophoto.com/store`
  };

  const checkoutOptionOnlyCrater = {
    lineItems: [craterPrintStripe],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `kevinqtophoto.com/store`
  };

  const checkoutOptionOnlyFlatirons = {
    lineItems: [flatironsPrintStripe],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `kevinqtophoto.com/store`
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
