import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "0",
  filter: "0",
  pageNo: "1",
  perPage: "5",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
});

export const { setSearch } = userSlice.actions;

export default userSlice.reducer;
