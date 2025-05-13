import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCustomerThunk = createAsyncThunk(
    'updateCustomerThunk',
    async ({newCustomer,id}) => {
        debugger

        const response = await fetch(`https://localhost:7267/api/Customeres/upDate/${id}`,
            {
                method: 'PUT',
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