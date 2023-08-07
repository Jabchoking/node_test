const express = require('express')
const { todogetmodule, tododeletemodule, todoaddmodule, todoeditmodule } = require('../com/todo.modules')

const testRouter = express.Router()

testRouter.get('/', todogetmodule )
//삭제
testRouter.delete('/:id', tododeletemodule )
//post => req.body 
testRouter.post('/',todoaddmodule )
// 수정 put
testRouter.put('/:id' ,todoeditmodule )


module.exports = testRouter