import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    tasks: taskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
