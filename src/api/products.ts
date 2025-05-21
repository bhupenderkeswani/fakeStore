import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsApiResponse } from "@src/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProductList: builder.query<ProductsApiResponse, void>({
      query: () => ({
        url: ``,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductListQuery } = productsApi;
