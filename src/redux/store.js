import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userAuthSice'; // Get reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
