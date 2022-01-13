/* eslint-disable react-hooks/rules-of-hooks */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: "triatronWebApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const clientJwtToken = "unkown";
      if (clientJwtToken) {
        headers.set("authorization", `Bearer ${clientJwtToken}`);
        //set domain as header
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
