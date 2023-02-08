import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: true,
  subMenuIndex: null,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSubMenuIndex: (state, action) => {
      state.subMenuIndex = action.payload;
    },
  },
});

export const { toggleSidebar, setSubMenuIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;
