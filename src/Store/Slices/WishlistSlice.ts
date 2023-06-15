import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistModal: true,
  wishlist: [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addTowishlist: (state, action) => {},
    removeFromWishlist: (state, action) => {},
    clearWishlist: (state, action) => {},
  },
});

export const {} = WishlistSlice.actions;

export default WishlistSlice.reducer;
