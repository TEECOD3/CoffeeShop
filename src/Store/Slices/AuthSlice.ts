import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  email: null,
  userName: null,
  userID: null,
};

const AuthSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetActiveUser: (state, action) => {
      state.isLoggedin = true;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.userID = action.payload.userID;
    },
    RemoveActiveUser: (state, action) => {
      state.isLoggedin = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
    },
  },
});

export const { SetActiveUser, RemoveActiveUser } = AuthSlice.actions;
export const selectLoggedstate = (state: any) => state.auth.isLoggedin;
export const selectEmail = (state: any) => state.auth.email;
export const selectUsername = (state: any) => state.auth.userName;
export const selectuserID = (state: any) => state.auth.UserID;

export default AuthSlice.reducer;
