import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import cartslice from "./Slices/cartslice";

const rootReducer = combineReducers({ auth: AuthSlice, cart: cartslice });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
