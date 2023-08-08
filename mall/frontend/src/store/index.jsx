import { configureStore } from "@reduxjs/toolkit";
import cart from './modules/cartSlice' 
import user from './modules/userslice'

export const store = configureStore({
    reducer: {
        cart,
        user
    }
})