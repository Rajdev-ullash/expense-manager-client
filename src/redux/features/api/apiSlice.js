import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../../helper/LocalStorageHelper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Users", "Auth", "Categories"],
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    userMailVerification: builder.mutation({
      query: (body) => ({
        url: "/email-verify",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    userForgetPassword: builder.mutation({
      query: (body) => ({
        url: "/forgot-password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    userResetPassword: builder.mutation({
      query: (body) => ({
        url: "/reset-password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    userVerifyOTP: builder.mutation({
      query: (body) => ({
        url: "/verify-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    getUsers: builder.query({
      query: ({ search, filter, pageNo, perPage }) =>
        `/get-all-user/${search}/${filter}/${pageNo}/${perPage}`,
      providesTags: ["Users", "Auth"],
    }),
    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/delete-user/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    // Categories
    getCategories: builder.query({
      query: ({ search, pageNo, perPage }) => ({
        url: `/get-all-categories/${search}/${pageNo}/${perPage}`,
        method: "GET",
        headers: { "x-auth-token": getToken() },
      }),
      providesTags: ["Categories,Users"],
    }),
    getSpecificCategory: builder.query({
      query: (id) => `/get-category/${id}`,
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: "/create-category",
        method: "POST",
        body,
        headers: {
          "x-auth-token": getToken(),
        },
      }),

      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: (body, id) => ({
        url: `/update-category/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/delete-category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUserMailVerificationMutation,
  useUserLoginMutation,
  useUserForgetPasswordMutation,
  useUserVerifyOTPMutation,
  useUserResetPasswordMutation,
  useDeleteUserMutation,
  useUserRegistrationMutation,
  useGetCategoriesQuery,
  useGetSpecificCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = userApi;
