
import { baseApi } from '../utils/apiUrl';
import { IProduct, IGetProductsResponse, IGetProductsProps } from './productTypes';
const productApi = baseApi

  .injectEndpoints({
    endpoints: build => ({
      getProducts: build.query<IGetProductsResponse, IGetProductsProps>({
        query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      }),
      getProduct: build.query<IProduct, { id: string }>({
        query: ({ id }) => `/products/${id}`,
      }),
      searchProducts: build.query<IGetProductsResponse, { query: string }>({
        query: ({ query }) => `/products/search?q=${query}`,
      }),
    }),
  });

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useLazySearchProductsQuery,
} = productApi;

  
  
  