import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.value=true
    },
    logout: (state) => {
      state.value =false
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = authReducer.actions

export default authReducer.reducer