import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const OrderApi = createApi({
    reducerPath: "OrderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        credentials: "include",
    }),
    tagTypes: ["order"],
    endpoints: (builder) => {
        return {
            getOders: builder.query({
                query: () => {
                    return {
                        url: "/order/getAllOrder",
                        method: "GET"
                    }
                },
                providesTags: ["order"]
            }),
            getOdersById: builder.query({
                query: (id) => {
                    return {
                        url: `/order/getOrderById/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ["order"]
            }),

            // addUser: builder.mutation({
            //     query: userData => {
            //         return {
            //             url: "/apiEndPoint",
            //             method: "POST",
            //             body: userData
            //         }
            //     },
            //     invalidatesTags: ["order"]
            // }),

        }
    }
})

export const {
    useGetOdersQuery,
    useGetOdersByIdQuery
 } = OrderApi
