import { createSlice } from '@reduxjs/toolkit'

import { setTokenCookie, removeTokenCookie } from '../utils/cookie'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      name: '',
      account: '',
      isLogin: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.currentUser.name = action.payload.name
      state.currentUser.account = action.payload.account
      state.currentUser.isLogin = true
      setTokenCookie(action.payload.token)
    },
    logout: state => {
      state.currentUser.name = ''
      state.currentUser.account = ''
      state.currentUser.isLogin = false
      removeTokenCookie()
    },
    setUserInfo: (state, action) => {
      state.currentUser.name = action.payload.name
      state.currentUser.account = action.payload.account
      state.currentUser.isLogin = true
    }
  },
})

export const { login, logout, setUserInfo } = userSlice.actions

export default userSlice.reducer