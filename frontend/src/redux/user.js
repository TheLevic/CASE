import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    isLoggedIn: false,
  },
  reducers: {
    getUserName: (state, uname) => {
      state.name = uname.payload;
      return;
    },
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      return;
    },
  },
});

export const { getUserName, toggleLoggedIn } = userSlice.actions;

export default userSlice.reducer;
