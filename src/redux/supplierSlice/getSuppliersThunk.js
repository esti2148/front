import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSuppliersThunk = createAsyncThunk(
    'getSuppliersThunk',
    async () => {
 
        const response = await fetch(`https://localhost:7267/api/Purveryors/getAll`);
       
        const data = await response.json();
        return data;

    }
)