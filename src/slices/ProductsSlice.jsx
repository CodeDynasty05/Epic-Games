import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    neededProducts: [],
    count: 0,
  },
  reducers: {
    setCategory: (state, action) => {
      const newProducts =
        action.payload === "All"
          ? state.products
          : state.products.filter(
              ({ category }) => category === action.payload
            );

      state.neededProducts = newProducts;
      state.count = newProducts.length;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
      state.neededProducts = action.payload;
      state.count = action.payload.length;
    },
  },
});

export const { setCategory, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
