import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByNameSuppliersThunk = createAsyncThunk(
    'getByNameSuppliersThunk',
    async (name) => {

        debugger
                const response = await fetch(`https://localhost:7267/api/Purveryors/getByName/${name}`);
          debugger
                const data = await response.json();
                debugger
                console.log("aa",data);
                return data;
                 
    }
)