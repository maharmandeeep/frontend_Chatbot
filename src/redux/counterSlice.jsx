import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: {
      name: "",
      age: ""
    }
  };

export const userdetailSlice = createSlice({
  name: 'userdetail',
  initialState,
  reducers: {
    addName: (state,action)=>{
        state.user.name=action.payload;
    },

    addAge:(state,action)=>{
        state.user.age=action.payload;
    }

    
  }
})


export const {addName,addAge}=userdetailSlice.actions;


export default userdetailSlice.reducer