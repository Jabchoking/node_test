const express = require('express')
const app = express()
const port = 3000
const  cors = require('cors');
const { getTodos, deleteTodo, postTodo, putTodo } = require('./controllers/todosController');

app.use( express.json())
app.use( cors() )

app.get('/todos', getTodos) 
app.delete('/todos/:id', deleteTodo )
app.post('/todos', postTodo)
app.put('/todos/:id' , putTodo )

app.listen(port, () => {
  console.log(`서버실행 ${port}`)
})