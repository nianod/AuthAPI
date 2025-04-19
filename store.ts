import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // For selectors
export type AppDispatch = typeof store.dispatch;

export default store;
