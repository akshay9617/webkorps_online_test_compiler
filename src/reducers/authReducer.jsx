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
      localStorage.setItem("isAuth",state)
    },
    logout: (state) => {
      state.value =false
      localStorage.setItem("isAuth",state)
    },
    // incrementByAmount: (state, action) => {
    //   state.value = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authReducer.actions

export default authReducer.reducer