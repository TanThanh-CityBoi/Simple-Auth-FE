import { createAction, createReducer } from '@reduxjs/toolkit'

const signIn = createAction('auth/signIn')
const signUp = createAction('auth/signUp')

const initialState = {
  isLogedIn: false,
  userInfo: {}
}
const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => { })
    .addCase(signUp, (state, action) => { })
})

export default rootReducer
