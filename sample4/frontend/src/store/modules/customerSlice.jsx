import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {      
    customerData:[],
    isShow: false ,
    current : {}, 
    isMsg: false ,
    msg :''
}


export const getdata = createAsyncThunk(
    'data/getdata',
    async()=>{
        const res = await axios.get(`http://localhost:3000/data`)
        return res.data
    }
)

export const deldata  = createAsyncThunk(
    'data/deldata',
    async(removeid) => {
        const res = await axios.delete(`http://localhost:3000/data/${removeid}`);
        return res.data
 }
)
export const postdata  = createAsyncThunk(
    'data/postdata',
    async(text) => {
        const res = await axios.post(`http://localhost:3000/data/`,{text});
        return res.customerData
 }
)
export const putdata  = createAsyncThunk(
    'data/putdata',
    async(chid) => {
        const res = await axios.put(`http://localhost:3000/data/${chid}`);
        return res.customerData
 }
)



let no = 6 
export const customerSlice = createSlice({
    name:'custo',
    initialState ,
    reducers:{
        addCustomer( state, action ){
            state.customerData.push({id:no++, ...action.payload })
        },
        editCustomer( state, action ){
            state.current = action.payload
            state.isShow = true 
            state.msg = '출연진을 수정합니다.'
            state.isMsg = true
        },
        delCustomer( state, action ){
            state.customerData = state.customerData.filter( item => item.id !== action.payload )
            state.msg = '출연진을 삭제합니다.'
            state.isMsg = true
        },
        updateCustomer( state, action ){
            state.customerData = state.customerData.map(item => item.id === action.payload.id ? action.payload : item  )
            state.isShow = false 
            state.msg = '출연진을 완료합니다.'
            state.isMsg = true
        },
        cancel(state,action) {
            state.isShow = false 
            state.msg = '출연진 수정 취소합니다.'
            state.isMsg = true
        } ,
        showMsg( state, action) {
            state.isMsg = false
        }       
    },
    extraReducers : (builder) => {
        builder.addCase(getdata.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(deldata.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(postdata.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(putdata.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})
export const {addCustomer,delCustomer,updateCustomer,editCustomer,changeInput,cancel, showMsg} = customerSlice.actions
export default customerSlice.reducer