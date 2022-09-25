import { createSlice } from '@reduxjs/toolkit';

/**
 * @see https://redux-toolkit.js.org/
 */

interface ProductsState {
  [key: string]: {
    name: string;
    price: number;
    quantity: number;
    key: string;
  };
}

const initialState: ProductsState = {
  flatironsPrint: {
    name: 'Flatirons 18x24 Hand Print',
    price: 350,
    quantity: 0,
    key: 'FI'
  },
  craterPrint: {
    name: 'Crater 18x24 Hand Print',
    price: 350,
    quantity: 0,
    key: 'CR'
  }
};

export const productsForSaleSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementFlatironsPrint: (state) => {
      state.flatironsPrint.quantity += 1;
    },
    decrementFlatironsPrint: (state) => {
      state.flatironsPrint.quantity -= 1;
    },
    resetFlatironsPrintToZero: (state) => {
      state.flatironsPrint.quantity = 0;
    },
    incrementCraterPrint: (state) => {
      state.craterPrint.quantity += 1;
    },
    decrementCraterPrint: (state) => {
      state.craterPrint.quantity -= 1;
    },
    resetCraterPrintsToZero: (state) => {
      state.craterPrint.quantity = 0;
    }
  }
});

export const {
  incrementFlatironsPrint,
  decrementFlatironsPrint,
  incrementCraterPrint,
  decrementCraterPrint,
  resetCraterPrintsToZero,
  resetFlatironsPrintToZero
} = productsForSaleSlice.actions;

export default productsForSaleSlice.reducer;
