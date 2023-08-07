import { createSlice } from '@reduxjs/toolkit'
const initialState  = { 
    text:'아무말' ,
    data :[
        {id:1, text:'점심먹기', isChk:true},
        {id:2, text:'여행가기', isChk:false},
        {id:3, text:'친구만나기', isChk:false}
    ]
}
let no = 4  
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
    }
})
export const { addTodo , delTodo, toggleTodo, changeInput }  = todoSlice.actions
export default todoSlice.reducer