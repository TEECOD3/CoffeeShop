import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";

const rootReducer = combineReducers({ auth: AuthSlice });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
