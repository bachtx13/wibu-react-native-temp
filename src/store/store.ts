import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSlice, persistedAuthReducer } from './auth/auth.slice.ts';
import { listenerMiddleware } from './middleware.ts';
import { thunk } from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { authApi } from '../api/auth/auth.api.ts';
import { rtkQueryErrorLogger } from '../api/api-middleware.ts';
import { persistedUserReducer, userSlice } from './user/user.slice.ts';
import { userApi } from '../api/user/user.api.ts';

const reducers = combineReducers({
  [authSlice.reducerPath]: persistedAuthReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userSlice.reducerPath]: persistedUserReducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(listenerMiddleware.middleware)
      .prepend(rtkQueryErrorLogger)
      .concat(thunk)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

export const persistedStore = persistStore(store);
