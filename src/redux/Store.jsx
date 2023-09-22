import { configureStore } from '@reduxjs/toolkit'
import userdetailSlice from "./counterSlice";

 const store =configureStore({
  reducer: {userdetailSlice}
})

export default store;