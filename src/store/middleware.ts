import { createListenerMiddleware } from '@reduxjs/toolkit';
import { updateToken } from './auth/auth.slice.ts';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: updateToken,
  effect: async (action, api) => {
    try {
      console.log(action, api);
    } catch (err) {
      console.log(err);
    }
  },
});
