import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageLoader: false,
  data: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    imageUrl: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleImageLoader: (state) => {
      state.imageLoader = !state.imageLoader;
    },
    // setData: (state, action) => {
    //   state[action.payload.name] = action.payload.value;
    // },
    setData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
  },
});

export const { toggleImageLoader, setData } = authSlice.actions;

export default authSlice.reducer;
