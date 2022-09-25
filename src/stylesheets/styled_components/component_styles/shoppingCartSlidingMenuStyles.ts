import { animated } from 'react-spring';
import styled from 'styled-components';

const CartWrapper = styled(animated.div)`
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  top: calc(50% - 20rem);
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

const CartNotification = styled(animated.div)`
  width: 25rem;
  color: white;
  padding: 1rem;
  background-color: rgba(4, 147, 114, 1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10rem;
  left: calc(50% - 10rem);
  @media (max-width: 500px) {
    width: 15rem;
    left: calc(50% - 8rem);
    text-align: center;
  }
`;

export {
  CloseModal,
  RemoveItemFromCartIcon,
  DecrementButton,
  IncrementButton,
  ChooseQuantityAndRemoveWrapper,
  ChooseQuantityWrapper,
  RemoveButton,
  CheckoutButton,
  ButtonWrapper,
  EmptyCartCard,
  CartWrapper,
  CartCard,
  CartNotification
};
