import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    icon: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
