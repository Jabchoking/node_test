// let { data } = require('../models/todos')
let db = require('../models')
let no = 6; 

const getTodos =  (req, res) => {
    const sql = `select * from todos`
    db.query( sql , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
}
const deleteTodo = ( req , res ) => {
    const {id} = req.params
    const sql = `DELETE FROM todos WHERE id = ${id} `
    db.query( sql , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
    // data = data.filter( item => item.id !== Number(req.params.id))
    // res.send( data )
    
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
