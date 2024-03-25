import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from './auth-dto.types.ts';
import { EApiMethod, IBaseResponseObject } from '../api.types.ts';
import { API_URL } from '@env';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Auth', 'User'],
  endpoints: builder => ({
    postRegister: builder.mutation<
      IBaseResponseObject<IRegisterResponse>,
      IRegisterRequest
    >({
      query: body => {
        return {
          method: EApiMethod.POST,
          url: 'auth/register',
          body,
        };
      },
    }),
    postLogin: builder.mutation<
      IBaseResponseObject<ILoginResponse>,
      ILoginRequest
    >({
      query: body => {
        return {
          method: EApiMethod.POST,
          url: 'auth/login',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
    getHello: builder.query({
      query: () => {
        return {
          url: 'example',
        };
      },
    }),
  }),
});

export const {
  usePostRegisterMutation,
  useGetHelloQuery,
  usePostLoginMutation,
} = authApi;
