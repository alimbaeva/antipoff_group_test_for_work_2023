import { configureStore } from '@reduxjs/toolkit';
import { reducerUserSlice } from './usersreducer';

export const store = configureStore({
  reducer: {
    user: reducerUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
