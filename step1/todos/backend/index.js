const express = require('express')
const app = express()
const port = 3000
const  cors = require('cors');
const { tododeletemodule, todogetmodule, todoaddmodule, todoeditmodule , } = require('./com/todo.modules');

app.use( express.json())
app.use( cors() )

app.get('/todos', todogetmodule )
//삭제
app.delete('/todos/:id', tododeletemodule )
//post => req.body 
app.post('/todos',todoaddmodule )
// 수정 put
app.put('/todos/:id' ,todoeditmodule )

app.listen(port, () => {
  console.log(`서버실행 ${port}`)
})