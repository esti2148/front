import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteProductThunk = createAsyncThunk(
 
    'deleteProductThunk',
    async (id) => {
    debugger
        const response = await fetch(`https://localhost:7267/api/Products/delete/${id}`,
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