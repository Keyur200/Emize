import { createSlice } from "@reduxjs/toolkit";


const BrandSlice = createSlice({
    name:"brand",
    initialState:{
        brand: ""
    },
    reducers:{
        SetBrand: (state,action)=>{
            state.brand = action.payload;
        }
    }
})

export const {SetBrand} = BrandSlice.actions;
export default BrandSlice.reducer;