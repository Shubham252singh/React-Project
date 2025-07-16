import { configureStore } from "@reduxjs/toolkit"; 
import cartSlice from "./cartRedux"
const appStore = configureStore(
    {
        reducer:{
            cart:cartSlice
        }
    }
)
export default appStore;