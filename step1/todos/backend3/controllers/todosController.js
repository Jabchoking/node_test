let { data } = require('../models/todos')
let no = 6; 

const getTodos =  (req, res) => {
    res.send( data )
}
const deleteTodo = ( req , res ) => {
    data = data.filter( item => item.id !== Number(req.params.id))
    res.send( data )
}
const postTodo  = (req, res) => {
    console.log( req.body.text )

    const todo = {
        id:no++, 
        text:req.body.text,
        isChk:false
    }
    data.push(todo)
    res.send( data )
}

const putTodo  = (req, res) => {
    const todo = data.find( item => item.id === Number(req.params.id))
    if( todo ) {
         todo.isChk  = !todo.isChk 
    } 
    res.send( data )
 }


module.exports = {
    getTodos,
    deleteTodo,
    postTodo,
    putTodo
}
