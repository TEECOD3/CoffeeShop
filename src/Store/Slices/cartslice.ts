import { createSlice } from "@reduxjs/toolkit";
import Cartitem from "../../Pages/Cart/Cartitem";
import { toast } from "react-hot-toast";

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
    setCartmodal: (state) => {
      state.cartModal = !state.cartModal;
    },

    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          quantity: newItem.quantity || 1,
          price: newItem.price,
          totalprice: newItem.price * newItem.quantity,
          image: newItem.image,
        });

        toast.success(
          `${
            state.cartItems[`${state.cartItems.length - 1}`].name
          } was Added To Cart`
        );
      } else {
        existingItem.quantity = existingItem.quantity
          ? existingItem.quantity + newItem.quantity
          : existingItem.quantity++;
        existingItem.totalprice = existingItem.quantity * existingItem.price;
        toast.success(
          `${existingItem.quantity} ${existingItem.name} was Added To Cart`,
          { position: "top-left" }
        );
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
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
