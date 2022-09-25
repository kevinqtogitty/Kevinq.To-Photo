import React from 'react';
import {
  incrementCraterPrint,
  incrementFlatironsPrint
} from '../redux_store/slices/productsSlice';
import { useDispatch } from 'react-redux';
import {
  ProductCard,
  Thumbnail,
  ProductDetails,
  ProductName,
  AddToCartButton,
  Store
} from '../stylesheets/styled_components/page_styles/printStoreStyles';

const PrintStore: React.FC = () => {
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

export default PrintStore;
