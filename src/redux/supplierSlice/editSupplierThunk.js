import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateSupplierThunk = createAsyncThunk(
    'updateSupplierThunk',
    async ({id,newSupplier}) => {
        debugger

        const response = await fetch(`https://localhost:7267/api/Purveryors/update/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newSupplier),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)