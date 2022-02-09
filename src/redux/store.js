import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userAuthSice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
