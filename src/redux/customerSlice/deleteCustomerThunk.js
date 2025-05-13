
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCustomerThunk = createAsyncThunk(
 
    'deleteCustomerThunk',
    async (id) => {
    debugger
        const response = await fetch(`https://localhost:7267/api/Customeres/delete/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }
        )
        const data = await response.json();
        return data;

    }
)