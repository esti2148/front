import { createAsyncThunk } from "@reduxjs/toolkit";


export const addProductThunk = createAsyncThunk(
    'addProductThunk',
    async (product) => {
       
        debugger
        const response = await fetch(`https://localhost:7267/api/Products/Add`,
            {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
    
        return data;

    }
)
