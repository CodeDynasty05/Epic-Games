import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = WishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;

export default WishlistSlice.reducer;
