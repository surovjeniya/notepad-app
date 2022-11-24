import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { noticeApi } from "./api/notice.api";
import sortReducer from "./slice/sort.slice";

export const store = configureStore({
  reducer: {
    [noticeApi.reducerPath]: noticeApi.reducer,
    sort: sortReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(noticeApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
