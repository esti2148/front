import { createSlice } from "@reduxjs/toolkit";
import { getOrderThunk } from "./getOrderThunk";
import { updateOrderThunk } from "./updateOrderThunk";

const INITIAL_STATE = {

   order:[],
   currentOrder:{}
  }
  export const orderSlice = createSlice({
      name: 'Order',
      initialState: INITIAL_STATE,
      reducers: {
 
      },
      extraReducers: (builder) => {
      builder.addCase(getOrderThunk.pending,(state,action)=>{
  
      });

      builder.addCase(getOrderThunk.fulfilled, (state, action) => {
        state.order=action.payload
      });
      builder.addCase(getOrderThunk.rejected,(state,action)=>{
          
      });

      builder.addCase(updateOrderThunk.pending,(state,action)=>{
  
      });

      builder.addCase(updateOrderThunk.fulfilled, (state, action) => {
        state.currentOrder=action.payload
      });
      builder.addCase(updateOrderThunk.rejected,(state,action)=>{
          
      });

      
    }

});
export const { } = orderSlice.actions;
//export default orderSlice.reducer;