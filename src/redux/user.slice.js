import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from '../api/user.api'
import { toast } from 'react-toastify';


const signOut = createAction('auth/signOut');
const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }) => {
    return await userAPI.signIn({ email, password });
  }
)

export const userAction = { signIn, signOut }

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogedIn: false,
    currentUser: null,
    errorMessage: ''
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogedIn = true
      state.currentUser = action.payload.data.user
      toast.success(action.payload.message || "LOGIN SUCCESSFULLY")
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLogedIn = false;
      state.currentUser = null
      toast.error(action.error.message || "LOGIN FAIL")
    })
    builder.addCase(signOut, (state) => {
      state.isLogedIn = false;
      state.currentUser = null;
    })
  }
})