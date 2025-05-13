import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByIdSuppliersThunk = createAsyncThunk(
    'getByIdSuppliersThunk',
    async (supplierId) => {

                const response = await fetch(`https://localhost:7267/api/Purveryors/getById/${supplierId}`);
          
                const data = await response.json();
                return data;
                 
    }
)