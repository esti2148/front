
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerThunk = createAsyncThunk(
    'addCustomerThunk',
    async (newCustomer) => {
        debugger
        const response = await fetch(`https://localhost:7267/api/Customeres/add`,
            {
                method: 'POST',
                body: JSON.stringify(newCustomer),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)
