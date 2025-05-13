import { createAsyncThunk } from "@reduxjs/toolkit";

export const addSuppliersThunk = createAsyncThunk(
    'addSuppliersThunk',
    async (supplier) => {

        const response = await fetch(`https://localhost:7267/api/Products/Add`,
        {
            method: 'POST',
            body: JSON.stringify(supplier),
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
          
                const data = await response.json();
                return data;
                 
    }
)