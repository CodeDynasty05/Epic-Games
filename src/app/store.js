import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/BasketSlice";
import libraryReducer from "../slices/LibrarySlice";
import wishlistReducer from "../slices/WishlistSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    library: libraryReducer,
    wishlist: wishlistReducer,
  },
});
