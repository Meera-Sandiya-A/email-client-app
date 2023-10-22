import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://flipkart-email-mock.now.sh/" }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: (page = 1) => `?page=${page}`,
    }),
    getEmailDetails: builder.query({
      query: (id) => `?id=${id}`,
    }),
  }),
});

export const { useLazyGetEmailsQuery, useLazyGetEmailDetailsQuery } = emailApi;
