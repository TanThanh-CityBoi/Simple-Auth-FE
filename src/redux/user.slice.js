import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from '../api/user.api'

const signOut = createAction('auth/signOut');
const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }) => {
    const response = await userAPI.signIn({ email, password })
    return response.data
  }
)
const signUp = createAsyncThunk(
  'auth/signUp',
  async (data) => {
    const response = await userAPI.signUp(data)
    return response.data
  }
)

export const userAction = { signIn, signUp, signOut }

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogedIn: false,
    currentUser: {},
    errorMessage: ''
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogedIn = true
      state.currentUser = action.payload.user
    })
    builder.addCase(signOut, (state) => {
      state.isLogedIn = false;
      state.currentUser = null;
    })
    builder.addCase(signUp, (state, action) => { })
  }
})