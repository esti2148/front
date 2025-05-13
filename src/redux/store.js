import { combineSlices } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "../redux/customerSlice/customerSlice"
import { productSlice } from "../redux/productSlice/productSlice"
import { supplierSlice } from "./supplierSlice/supplierSlice";

const reducer=combineSlices(customerSlice,productSlice,supplierSlice)
 
export const STORE = configureStore({
    reducer: reducer
});
STORE.getState()