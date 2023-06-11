import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModal: false,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartmodal: (state, action) => {
      state.cartModal = !state.cartModal;
    },
  },
});

export const { setCartmodal } = cartslice.actions;
export const cartstate = (state: any) => state.cart.cartModal;

export default cartslice.reducer;
