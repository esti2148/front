import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductThunk = createAsyncThunk(
 
    'getProductThunk',
    async () => {
    debugger
        const response = await fetch(`https://localhost:7267/api/Products/GetAllSimple`);
       
        const data = await response.json();
        console.log(data);
        return data;

    }
)