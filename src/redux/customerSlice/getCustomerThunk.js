import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCustomerThunk = createAsyncThunk(
    'getCustomerThunk',
    async () => {
   
        const response = await fetch(`https://localhost:7267/api/Customeres/getAll`);

        const data = await response.json();
        return data;

    }
)