import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/api/apiSlice";
import sidebarSliceReducer from "./features/sidebar/sidebarSlice";
import userSliceReducer from "./features/user/userSlice";
import authSliceReducer from "./features/auth/authSlice";
import formSliceReducer from "./features/form/formSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,

    sidebar: sidebarSliceReducer,
    user: userSliceReducer,
    auth: authSliceReducer,
    form: formSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
