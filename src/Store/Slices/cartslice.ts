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
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.totalQuantity++;
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          quantity: newItem.quantity || 1,
          price: newItem.price,
          totalprice: newItem.price * newItem.quantity,
          image: newItem.image,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity || 1;
        existingItem.totalprice = existingItem.quantity * existingItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
    clearCart: (state) => {},
  },
});

export const { setCartmodal, addItemToCart, removeItemFromCart } =
  cartslice.actions;
export const cartstate = (state: any) => state.cart.cartModal;
export const totalqty = (state: any) => state.cart.totalQuantity;
export const cartbasket = (state: any) => state.cart.cartItems;

export default cartslice.reducer;
