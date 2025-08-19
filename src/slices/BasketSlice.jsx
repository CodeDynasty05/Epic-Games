import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex < 0) {
        state.items.push(action.payload);
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    purchaseAndClear: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, purchaseAndClear } =
  BasketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default BasketSlice.reducer;
