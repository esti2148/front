import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderThunk = createAsyncThunk(
 
    'getOrderThunk',
    async () => {
    debugger
        const response = await fetch(`https://localhost:7267/api/Orders/getAll`);
        
        const data = await response.json();
        console.log(data);
        return data;

    }
)