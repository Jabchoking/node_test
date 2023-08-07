const express = require('express')
const { getTodos, deleteTodo, postTodo, putTodo } = require('../controllers/todosController')

const testRouter = express.Router()

testRouter.get('/', getTodos )
//삭제
testRouter.delete('/:id', deleteTodo )
//post => req.body 
testRouter.post('/',postTodo )
// 수정 put
testRouter.put('/:id' ,putTodo )


module.exports = testRouter