import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState  = { 
    text:'' ,
    data :[]
}

export const gettodos = createAsyncThunk(
    'todos/gettodos',
    async()=>{
        const res = await axios.get(`http://localhost:3000/todos`)
        return res.data
    }
)

export const delTodos  = createAsyncThunk(
    'todos/delTodos',
    async(removeid) => {
        const res = await axios.delete(`http://localhost:3000/todos/${removeid}`);
        return res.data
 }
)
export const postTodos  = createAsyncThunk(
    'todos/postTodos',
    async(text) => {
        const res = await axios.post(`http://localhost:3000/todos/`,{text});
        return res.data
 }
)
export const putTodos  = createAsyncThunk(
    'todos/putTodos',
    async(chid) => {
        const res = await axios.put(`http://localhost:3000/todos/${chid}`);
        return res.data
 }
)


let no = 4  
// http://localhost:3000/todos
export const todoSlice  = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            // state.data = [...state.data, {id :no++ , text:action.payload, isChk:false }]
            state.data.push({id:no++, text:action.payload, isChk:false})            
        },
        delTodo:( state, action) => {
            state.data = state.data.filter( item => item.id !== action.payload )
        },
        toggleTodo:( state , action ) => {
            // state.data = state.data.map( item => item.id === action.payload ? {...item, isChk: !item.isChk} : item )
           
            const todo = state.data.find( item => item.id === action.payload)
            if( todo ) {
                todo.isChk = !todo.isChk 
            }
        },
        changeInput :( state , action ) => {
            state.text = action.payload
        }

    },
    extraReducers : (builder) => {
        builder.addCase(gettodos.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(delTodos.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(postTodos.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(putTodos.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})
export const { addTodo , delTodo, toggleTodo, changeInput }  = todoSlice.actions
export default todoSlice.reducer