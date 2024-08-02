import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",//just a name for api calls
  tagTypes: ["Kpis" , "Products" , "Transactions"],// used to keep data
  endpoints: (build) => ({
    //actual api calls
    //1. getkpis function grabs the data of key performance indicators(kpis)
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/", // call to baseurl/kpi/kpis
      providesTags: ["Kpis"],//data saved into kpis
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery , useGetProductsQuery, useGetTransactionsQuery } =
  api;