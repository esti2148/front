import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByNameCustomerThunk = createAsyncThunk(
    'getByNameCustomerThunk',
    async (cust) => {
       
                const response = await fetch(`https://localhost:7267/api/Customeres/getByName/${cust}`);
          if(response.status==204){
            return null;
          }
                const data = await response.json();
                return data;
                 
    }
)