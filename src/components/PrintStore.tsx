import React, { useState } from 'react';
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
import { useAppSelector } from '../redux_store/store';
import { useTransition } from 'react-spring';
import { CartNotification } from '../stylesheets/styled_components/component_styles/shoppingCartSlidingMenuStyles';

const PrintStore: React.FC = () => {
  const [addedSomethingToCart, setSomethingAddedToCart] =
    useState<boolean>(false);

  const [itemAddedToCart, setItemAddedToCart] = useState('');

  const AddToCardNotificationTransition = useTransition(addedSomethingToCart, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' }
  });

  const { flatironsPrint, craterPrint } = useAppSelector(
    (state) => state.productsForSale
  );

  const dispatch = useDispatch();

  const handleAddToCart = (key: string) => {
    switch (key) {
      case flatironsPrint.key:
        dispatch(incrementFlatironsPrint());
        handleAddToCartNotification(flatironsPrint.name);
        break;
      case craterPrint.key:
        dispatch(incrementCraterPrint());
        handleAddToCartNotification(craterPrint.name);
        break;
      default:
        return;
    }
  };

  const handleAddToCartNotification = (item: string) => {
    setItemAddedToCart(item);
    setSomethingAddedToCart((state) => !state);
    setTimeout(() => {
      setSomethingAddedToCart((state) => !state);
    }, 3000);
  };

  return (
    <>
      {AddToCardNotificationTransition(
        (animation, item) =>
          item && (
            <CartNotification style={animation}>
              {itemAddedToCart} has been added to your cart
            </CartNotification>
          )
      )}
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
              onClick={() => handleAddToCart(craterPrint.key)}
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
              onClick={() => handleAddToCart(flatironsPrint.key)}
            >
              Add to cart
            </AddToCartButton>
          </ProductDetails>
        </ProductCard>
      </Store>
    </>
  );
};

export default PrintStore;
