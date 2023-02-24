import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Users", "Auth"],
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
  }),
});

export const {
  useGetUsersQuery,
  useUserMailVerificationMutation,
  useDeleteUserMutation,
  useUserRegistrationMutation,
} = userApi;
