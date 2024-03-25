import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware =
  (_: MiddlewareAPI) => next => action => {
    // const toast = Toast;
    if (isRejectedWithValue(action)) {
      // console.log(
      //   'data' in action.error
      //     ? (action.error.data as { message: string }).message
      //     : action.error.message,
      // );
    }

    return next(action);
  };
