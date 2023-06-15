import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import cartslice from "./Slices/cartslice";
import WishlistSlice from "./Slices/WishlistSlice";
import CheckOutSlice from "./Slices/CheckOutSlice";

const rootReducer = combineReducers({
  auth: AuthSlice,
  cart: cartslice,
  wishlist: WishlistSlice,
  checkout: CheckOutSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
