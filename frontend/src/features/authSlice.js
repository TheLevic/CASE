import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: null,
  isSuccess: null,
  isLoading: null,
  message: "",
};
