import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

export const joindudot = createAsyncThunk(
    'dudot/joindudot',
    async (ob) => {
        const res = await axios.post(`http://localhost:3000/dudot/join`,ob)
        return res.data
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addCart(state, aciton) {
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(joindudot.fulfilled, (state, action) => {

            })
    }
})


export const { addCart } = userSlice.actions
export default userSlice.reducer