import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// Actions - used to set global state
export const {setUserEmail, setUserPassword} = userAuthSlice.actions;

// Selectors - used to fetch global state
export const selectUserEmail = state => state.user.email;
export const selectUserPassword = state => state.user.password;

export default userAuthSlice.reducer;
