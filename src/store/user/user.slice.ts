import { createSlice } from '@reduxjs/toolkit';
import { userInitialState } from './user.constants.ts';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userApi } from '../../api/user/user.api.ts';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearUser: state => {
      state.info = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints?.getUserInfo.matchFulfilled,
        (state, action) => {
          if (action.payload.data) {
            state.info = action.payload.data;
            !state.isLoggedIn && (state.isLoggedIn = true);
          }
        },
      )
      .addMatcher(userApi.endpoints?.getUserInfo.matchRejected, state => {
        if (state.info) {
          state.info = {};
        }
        state.isLoggedIn && (state.isLoggedIn = false);
      });
  },
});

export const { clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

const userPersistConfig = {
  key: userSlice.reducerPath,
  storage: AsyncStorage,
};
export const persistedUserReducer = persistReducer(
  userPersistConfig,
  userReducer,
);
