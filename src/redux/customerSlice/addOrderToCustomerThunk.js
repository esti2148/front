import { createAsyncThunk } from "@reduxjs/toolkit";

export const addOrderToCustomerThunk = createAsyncThunk(
    'addOrderToCustomerThunk',
    async ({order,idCustomer}) => {
        
        const response = await fetch(`https://localhost:7267/api/Customeres/AddOrderToCustomer/${idCustomer}`,
            {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)