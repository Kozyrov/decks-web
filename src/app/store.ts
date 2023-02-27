import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import collectionSlice from '../features/Collection/collectionSlice';

export const store = configureStore({
  reducer: {
    collection: collectionSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
