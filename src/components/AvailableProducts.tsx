import React from 'react';
import styled from 'styled-components';
import {
  incrementCraterPrint,
  incrementFlatironsPrint
} from '../redux_store/slices/productsSlice';
import { useDispatch } from 'react-redux';

const CheckoutForm = () => {
  const dispatch = useDispatch();

  return (
    <Store>
      <ProductCard>
        <Thumbnail
          className="crater"
          src="/store_thumbnails/CraterThumb.jpg"
          alt=""
        />
        <ProductDetails>
          <ProductName>Crater 18x24 Hand Print </ProductName>
          <h3 style={{ margin: '0rem' }}> $350</h3>
          <br />
          <AddToCartButton
            type="button"
            onClick={() => dispatch(incrementCraterPrint())}
          >
            Add to cart
          </AddToCartButton>
        </ProductDetails>
      </ProductCard>
      <ProductCard>
        <Thumbnail
          className="flatirons"
          src="/store_thumbnails/FlatironsThumb.jpg"
          alt=""
        />
        <ProductDetails>
          <ProductName>Flatirons 18x24 Hand Print </ProductName>
          <h3 style={{ margin: '0rem' }}> $350</h3>
          <br />
          <AddToCartButton
            type="button"
            onClick={() => dispatch(incrementFlatironsPrint())}
          >
            Add to cart
          </AddToCartButton>
        </ProductDetails>
      </ProductCard>
    </Store>
  );
};

export default CheckoutForm;

const Store = styled.div`
  padding: 23rem 10rem 0rem 10rem;
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
  width: calc(100vw - 18rem);

  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem;
    row-gap: 2rem;
    width: 100vw;
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
`;

const ProductCard = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background-color: rgba(228, 228, 208, 0.9);
  height: fit-content;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 500px) {
    row-gap: 2rem;
    width: max-content;
    height: fit-content;
    flex-direction: column;
  }
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  &.crater {
    width: 18rem;
    height: auto;
  }

  &.flatirons {
    width: 20rem;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProductName = styled.h3`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 1rem;
`;

const AddToCartButton = styled.button`
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: rgba(71, 135, 120, 0.9);
  color: whitesmoke;
  cursor: pointer !important;
`;
