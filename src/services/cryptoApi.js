import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "6432589e38msh22b1744e01273b9p11df6bjsn8dedbc0d1c33",
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
};

const baseUrl = "https://coingecko.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
