import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart : [],
    },
    reducers: {
        AddToCart : (state, action)=>{
            const item = state.cart.find((item)=>item.id===action.payload.id)
            if(item){
                state.cart.forEach((i)=>{
                    if(i.id===item.id) i.quantity+=1;
                })
            }else{
                state.cart.push(action.payload);

            }
        },
        decrement : (state,action)=>{
            const item = state.cart.find((item)=>item.id===action.payload.id)
            if(item.quantity > 1){
                state.cart.forEach((i)=>{
                    if(i.id===item.id) i.quantity-=1;
                })}
        },
        RemoveFromCart : (state,action) => {
            state.cart = state.cart.filter((item)=>item.id!==action.payload.id);
        }
    }
})  

export const {AddToCart,RemoveFromCart,decrement} = cartSlice.actions;
export default cartSlice.reducer;