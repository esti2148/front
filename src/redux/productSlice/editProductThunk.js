
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProductThunk = createAsyncThunk(
    'updateProductThunk',
    async ({id,product}) => {
        debugger

        const response = await fetch(`https://localhost:7267/api/Products/update/${id}`,
            {
                method: 'PUT',
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