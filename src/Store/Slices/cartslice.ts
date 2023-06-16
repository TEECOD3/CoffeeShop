import { createSlice } from "@reduxjs/toolkit";

type initialStateprops = {
  cartModal: boolean;
  cartItems: any[];
  totalQuantity: number;
};

const initialState: initialStateprops = {
  cartModal: false,
  cartItems: [],
  totalQuantity: 0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartmodal: (state, action) => {
      state.cartModal = !state.cartModal;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      state.totalQuantity++;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalprice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
    removeItemFromCart: (state, action) => {},
    clearCart: (state) => {},
  },
});

export const { setCartmodal, addItemToCart } = cartslice.actions;
export const cartstate = (state: any) => state.cart.cartModal;
export const totalqty = (state: any) => state.cart.totalQuantity;

export default cartslice.reducer;
