import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setSuppliers } from "../supplierSlice/supplierSlice";
export const getProductAndSuppliers = createAsyncThunk(
  
    'getProductAndSuppliers',
    
    async () => {
        debugger
    //    const disp= useDispatch()
        const response = await fetch(`https://localhost:7267/api/Products/getProductAndSuppliers`);
        const data = await response.json();
        console.log(data);
        // disp(setSuppliers(data))
        return data;

    }
)