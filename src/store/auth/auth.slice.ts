import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authInitialState } from './auth.constants.ts';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: authSlice.reducerPath,
  storage: AsyncStorage,
};
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer,
);
