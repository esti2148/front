import { createSlice } from "@reduxjs/toolkit";
import { getSuppliersThunk } from "./getSuppliersThunk";
import { getByIdSuppliersThunk } from "./getByIdSuppliersThunk";
import { getByNameSuppliersThunk } from "./getByNameSuppliersThunk";
import { updateSupplierThunk } from "./editSupplierThunk";

const INITIAL_STATE = {

    suppliers: [],
    supplierCurrent: {}
}
export const supplierSlice = createSlice({
    name: 'supplier',
    initialState: INITIAL_STATE,
    reducers: {
        ///.......
        setSuppliers: (state, action) => {
            state.suppliers = action.payload.suppliers;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getSuppliersThunk.pending, (state, action) => {

        });

        builder.addCase(getSuppliersThunk.fulfilled, (state, action) => {
            debugger
            state.suppliers = action.payload
        });
        builder.addCase(getSuppliersThunk.rejected, (state, action) => {

        });


        builder.addCase(getByIdSuppliersThunk.pending, (state, action) => {

        });

        builder.addCase(getByIdSuppliersThunk.fulfilled, (state, action) => {
            state.supplierCurrent = action.payload
        });
        builder.addCase(getByIdSuppliersThunk.rejected, (state, action) => {

        });
        builder.addCase(getByNameSuppliersThunk.pending, (state, action) => {
            debugger
        });

        builder.addCase(getByNameSuppliersThunk.fulfilled, (state, action) => {
            debugger
            state.supplierCurrent = action.payload
        });
        builder.addCase(getByNameSuppliersThunk.rejected, (state, action) => {
            debugger
        });
        builder.addCase(updateSupplierThunk.pending, (state, action) => {

        });

        builder.addCase(updateSupplierThunk.fulfilled, (state, action) => {
            state.supplierCurrent = action.payload
        });
        builder.addCase(updateSupplierThunk.rejected, (state, action) => {
            
        });
    }

});
export const { setSuppliers } = supplierSlice.actions;