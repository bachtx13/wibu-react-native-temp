import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@env';
import { IGetUserResponse } from './user-dto.types.ts';
import { EApiMethod, EHeaderKey, IBaseResponseObject } from '../api.types.ts';
import { RootState } from '../../store/store.types.ts';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set(EHeaderKey.AUTHORIZATION, token);
      }
    },
  }),
  endpoints: build => ({
    getUserInfo: build.query<IBaseResponseObject<IGetUserResponse>, null>({
      query() {
        return {
          method: EApiMethod.GET,
          url: 'user/get-info',
        };
      },
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
