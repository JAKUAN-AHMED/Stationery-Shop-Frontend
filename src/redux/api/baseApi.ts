/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "./../store";
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  BaseQueryApi,
  DefinitionType,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logOut, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:2000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log(token, "token from baseQuery");
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("baseQueryrefreshtoken", result);

  if (result.error?.status == 404) {
    toast.error((result?.error.data as { message: string }).message);
  }

  if (result.error?.status == 401) {
    const res = await fetch("http://localhost:2000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data?.data?.token) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data?.data?.token,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["products", "users", "getUsers", "orders"],
  endpoints: () => ({}),
});
