import { createAsyncThunk } from "@reduxjs/toolkit";

export const getByNameAndIdCustomerThunk = createAsyncThunk(
    'getByNameAndIdCustomerThunk',
    async ({instituteName,instituteId}) => {

                const response = await fetch(`https://localhost:7267/api/Customeres/GetByNameAndId/${instituteName}/${instituteId}`);
                if(response.status==204){
                    return null;
                  }
                const data = await response.json();
                return data;
                 
    }
)