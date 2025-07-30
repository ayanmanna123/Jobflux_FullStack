import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSilce"
import jobSlice from "./jobSlice"
export const store = configureStore({
  reducer: {
     auth: authSlice,
     job: jobSlice


  },
})