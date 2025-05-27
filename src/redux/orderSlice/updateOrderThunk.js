import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateOrderThunk = createAsyncThunk(
    'updateOrderThunk',
    async ({newOrder,orderId}) => {
        debugger

        const response = await fetch(`https://localhost:7267/api/Orders/upDate/${orderId}`,
            {
                method: 'PUT',
                body: JSON.stringify(newOrder),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)