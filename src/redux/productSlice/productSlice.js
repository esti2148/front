import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "./getProductThunk";
import { addProductThunk } from "./addProductThunk";
import { updateProductThunk } from "./editProductThunk";
import { getProductAndSuppliers } from "./getProductAndSuppliers";
import { deleteProductThunk } from "./deleteProductThunk";

const INITIAL_STATE = {

   products:[],
   suppliers: [],
   currentProduct:{}

  }
  export const productSlice = createSlice({
      name: 'Product',
      initialState: INITIAL_STATE,
      reducers: {
        setProducts: (state, action) => {
          state.products = action.payload;
        },
        setSuppliers: (state, action) => {
          state.suppliers = action.payload;
        },
        setProductsAndSuppliers: (state, action) => {
          state.products = action.payload.products; 
          state.suppliers = action.payload.suppliers || action.payload.supplaiers;
        }
         
      },
      extraReducers: (builder) => {
      builder.addCase(getProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(getProductThunk.fulfilled, (state, action) => {
        state.products=action.payload
      });
      builder.addCase(getProductThunk.rejected,(state,action)=>{
          
      });

      builder.addCase(addProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(addProductThunk.fulfilled, (state, action) => {
        debugger
        state.products=action.payload
      });
      builder.addCase(addProductThunk.rejected,(state,action)=>{
          
      });


      builder.addCase(updateProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(updateProductThunk.fulfilled, (state, action) => {
        state.products=action.payload

      });
      builder.addCase(updateProductThunk.rejected,(state,action)=>{
          
      });

      builder.addCase(deleteProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products=action.payload

      });
      builder.addCase(deleteProductThunk.rejected,(state,action)=>{
          
      });
      builder.addCase(getProductAndSuppliers.pending,(state,action)=>{
  
      });

      builder.addCase(getProductAndSuppliers.fulfilled, (state, action) => {
        if (action.payload.products) {
          state.products = action.payload.products;
        }
        // בדוק אם יש שדה suppliers או supplaiers (עם שגיאת כתיב)
        if (action.payload.suppliers) {
          state.suppliers = action.payload.suppliers;
        } else if (action.payload.supplaiers) {
          state.suppliers = action.payload.supplaiers;
        }
      });
      builder.addCase(getProductAndSuppliers.rejected,(state,action)=>{
          
      });
    }

});
export const { setProducts, setSuppliers, setProductsAndSuppliers } = productSlice.actions;
export default productSlice.reducer;