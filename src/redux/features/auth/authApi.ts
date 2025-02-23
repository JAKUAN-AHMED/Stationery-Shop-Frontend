import { baseApi } from "@/redux/api/baseApi";
import { TReponseRedux } from "@/types/globalTypes";
import { TUser } from "@/types/userTypes";



const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getMe: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
      providesTags: ["user"],
      transformResponse: (response: TReponseRedux<TUser>) => {
        
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    AllUsers: builder.query({
      query: () => {
        return {
          url: "/users/all-users",
          method: "GET",
        };
      },
      providesTags: ["user"],
      transformResponse: (response: TReponseRedux<TUser>) => {
       
        return {
          data: response?.data,
          meta: response.meta,
        };
      },
    }),
    updateProfile:builder.mutation({
        query:(userInfo)=>({
            url:"/users/update-profile",
            method:"PATCH",
            body:userInfo
        }),
        invalidatesTags:['user']
    })
  }),
});


export const  {useLoginMutation,useGetMeQuery,useRegisterMutation,useAllUsersQuery,useUpdateProfileMutation}=authApi;