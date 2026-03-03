import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const URL = import.meta.env.VITE_APP_PRODUCT_URL;

export const ProductApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: URL}),      
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products"    

        }),
        
    
    })
})  
export const {useGetAllProductsQuery} = ProductApi;