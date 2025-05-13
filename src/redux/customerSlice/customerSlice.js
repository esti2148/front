import { addCustomerThunk } from "./addCustomerThunk";
import { createSlice } from "@reduxjs/toolkit";
import { getCustomerThunk } from "./getCustomerThunk";
import { getByNameCustomerThunk } from "./getByNameCustomerThunk";
import { getByIdCustomerThunk } from "./getByIdCustomerThunk";
import { addOrderToCustomerThunk } from "./addOrderToCustomerThunk";
import { getByNameAndIdCustomerThunk } from "./getByNameAndIdCustomerThunk";
import { deleteCustomerThunk } from "./deleteCustomerThunk";
const INITIAL_STATE = {
  currentCustomer: {instituteId:0, instituteName:'',address:""
  ,sellingPlace:"",phone:"",orders:[],email:"",overPluseDebt:0},
  isExist: null,
  customerOrders: [],
  listProduct: [],
  manager: { instituteId: 951357, instituteName: 'מנהל' },
  isManager: false
}
export const customerSlice = createSlice({
  name: 'customer',
  initialState: INITIAL_STATE,


  reducers: {
    addToSal: (state, action) => {
      state.listProduct = [...state.listProduct, action.payload]
      console.log(state.listProduct);
    },
    changeCount: (state, action) => {
     
      state.listProduct = state.listProduct.map(x => x.id === action.payload.id ? { ...x, qty: action.payload?.qty } : x)
    },
    changeTotalSal: (state, action) => {
      state.listProduct = state.listProduct.map(x => x.id === action.payload.id ? { ...x, TempSum: action.payload?.TempSum } : x)
    },
    removeFromSal: (state, action) => {
      state.listProduct = state.listProduct.filter(x => x.id !== action.payload?.id)
      console.log(state.listProduct);
    }
    , checkManager: (state, action) => {

      if (state.manager.instituteId == action.payload.instituteId && state.manager.instituteName == action.payload.instituteName)
        state.isManager = true

    }
  },


  extraReducers: (builder) => {
    builder.addCase(addCustomerThunk.pending, (state, action) => {

    });
    builder.addCase(addCustomerThunk.fulfilled, (state, action) => {
      state.currentCustomer = action.payload[action.payload.length - 1];
      console.log(state.currentCustomer);
      state.isExist = true;

    });
    builder.addCase(addCustomerThunk.rejected, (state, action) => {

    });
    builder.addCase(getCustomerThunk.pending, (state, action) => {

    });
    builder.addCase(getCustomerThunk.fulfilled, (state, action) => {
      state.customerOrders = action.payload
      console.log(state.customerOrders);
    });
    builder.addCase(getCustomerThunk.rejected, (state, action) => {

    });
    builder.addCase(getByNameCustomerThunk.pending, (state, action) => {

    });
    builder.addCase(getByNameCustomerThunk.fulfilled, (state, action) => {
      state.currentCustomer = action.payload
    });

    builder.addCase(getByNameCustomerThunk.rejected, (state, action) => {
    });
    builder.addCase(getByNameAndIdCustomerThunk.pending, (state, action) => {
      

    });

    builder.addCase(getByNameAndIdCustomerThunk.fulfilled, (state, action) => {
      state.currentCustomer = action.payload
      if (state.currentCustomer != undefined)
        state.isExist = true;
      else
        state.isExist = false;
    });
    builder.addCase(getByNameAndIdCustomerThunk.rejected, (state, action) => {

    });
    builder.addCase(getByIdCustomerThunk.pending, (state, action) => {

    });
    builder.addCase(getByIdCustomerThunk.fulfilled, (state, action) => {
      state.currentCustomer = action.payload
    });
    builder.addCase(getByIdCustomerThunk.rejected, (state, action) => {

    });
    builder.addCase(addOrderToCustomerThunk.pending, (state, action) => {

    });

    builder.addCase(addOrderToCustomerThunk.fulfilled, (state, action) => {
      state.currentCustomer.orders = action.payload

    });
    builder.addCase(addOrderToCustomerThunk.rejected, (state, action) => {

    });

    builder.addCase(deleteCustomerThunk.pending, (state, action) => {

    });

    builder.addCase(deleteCustomerThunk.fulfilled, (state, action) => {
      state.customerOrders = action.payload

    });
    builder.addCase(deleteCustomerThunk.rejected, (state, action) => {

    });
  }
});
export const { addToSal, changeCount, changeTotalSal, removeFromSal, checkManager } = customerSlice.actions;

