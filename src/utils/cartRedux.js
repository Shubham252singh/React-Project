import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            const newItem = { ...action.payload, count: 1 };
            state.items.push(newItem);
        },
        clearAllItem: (state)=>{
            state.items.length=0;
        },
        deleteItem:(state,action)=>{
            const itemIndex = state.items.findIndex((o)=>o.id === action.payload.id);
            if(itemIndex >-1){
                state.items.splice(itemIndex,1);
            }      
        },
        updateItem:(state,action)=>{
            state.items = state.items.map((o)=>o.id === action.payload.id?{...action.payload,count:o.count+1}:o);
        }
    }
})

export const {addItem,clearAllItem,deleteItem,updateItem} = cartSlice.actions;
export default cartSlice.reducer;