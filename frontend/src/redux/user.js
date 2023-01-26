import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Cole",
    isLoggedIn: false,
  },
  reducers: {
    getUserName: (state, uname) => {
      state.name = uname.payload;
    },
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { getUserName, toggleLoggedIn } = userSlice.actions;

export default userSlice.reducer;
