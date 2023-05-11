import { createSlice } from '@reduxjs/toolkit'

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    alert: false,
  },
  reducers: {
    
  },
})

export const { turnOnAlert, turnOffAlert } = utilsSlice.actions

export default utilsSlice.reducer