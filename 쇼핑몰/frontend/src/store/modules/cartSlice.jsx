import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts:[],
    cartTotal:0
}
const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addCart( state , aciton ) {              
            state.carts.push( aciton.payload )
        },
        removeCart( state, action ){
            state.carts = state.carts.filter( item => item.id !== action.payload)
        },
        totalCart( state , action ) {
            state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price , 0)
        }
    }
})

export const {addCart , removeCart, totalCart} = cartSlice.actions
export default cartSlice.reducer