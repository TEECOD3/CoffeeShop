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
      console.log(newItem.price);
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
        existingItem.quantity = existingItem.quantity
          ? existingItem.quantity + newItem.quantity
          : existingItem.quantity++;
        existingItem.totalprice = existingItem.quantity * existingItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload.id;
      const existingItems = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItems.quantity === 1) {
        state.cartItems.filter((item) => item.id != id);
      } else {
        existingItems.quantity--;
        existingItems.totalprice =
          existingItems.totalprice - existingItems.price;
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
