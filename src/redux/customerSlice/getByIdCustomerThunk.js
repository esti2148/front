import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByIdCustomerThunk = createAsyncThunk(
    'getByIdCustomerThunk',
    async (custId) => {

                const response = await fetch(`https://localhost:7267/api/Customeres/getById/${custId}`);
          
                const data = await response.json();
                return data;
                 
    }
)