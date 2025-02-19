import { baseApi } from "@/redux/api/baseApi";
import { TReponseRedux } from "@/types/globalTypes";
import { Order } from "@/types/orderDetailsTypes";


const orderApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(userInfo)=>({
                url:"/orders/create-orders",
                method:"POST",
                body:userInfo
            }),
            invalidatesTags:['orders']
        }),
        getOrders:builder.query(
           {
                query:()=>{
                    return {
                        url:"/orders",
                        method:"GET"
                    }
                    
                },
                providesTags:['orders'],
                transformResponse:(response:TReponseRedux<{result:Order[]}>)=>{
                    console.log('response from orderApi',response);
                    return {
                        data:response?.data?.result,
                        meta:response?.data,

                    }
                }
           }
        ),
        verifyOrder:builder.query({
            query:(order_id)=>{
                return {
                    url:"/orders/verify",
                    params:order_id,
                    method:"GET"

                }
            }
        })
        
    })
})
export const {useCreateOrderMutation,useGetOrdersQuery,useVerifyOrderQuery}=orderApi;