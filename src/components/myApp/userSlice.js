import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    isLoggedIn: false,
  },
  reducers: {
    signUp: {
      reducer: (state, action) => {
        state.userData.push(action.payload);
      },
    },

    login: {
      reducer: (state, action) => {
        state.isLoggedIn = action.payload;
      },
    },
    logout: {
      reducer: (state, action) => {
        state.isLoggedIn = action.payload;
      },
    },
  },
});
export const { login, logout, signUp } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
