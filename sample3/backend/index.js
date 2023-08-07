const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json())
app.use(cors())

let todos=[
    {id : 1, text : '밥' , isChk:false},
    {id : 2, text : '잠' , isChk: false},
    {id : 3, text : '똥' , isChk: false},
    {id : 4, text : '게임' , isChk: false}
]

let no = 6;

app.get('/todos',(req,res)=>{
    res.send(todos)
})

// 삭제
app.delete('/todos/:id',(req,res)=>{
    todos = todos.filter(i => i.id !== Number(req.params.id))
    res.send(todos)
})

// 추가 post => req.body
app.post('/todos' , (req,res)=>{
    const todo={
        id:no++, text:req.body.text, isChk:false
    }
    todos.push(todo)
    res.send(todos)
})
// 수정 put 
app.put('/todos/:id',(req,res)=>{
    const todo=todos.find(i=>i.id===Number(req.params.id))
    if(todo){
        todo.isChk=!todo.isChk
    }
    res.send(todos)
})

app.listen(port,()=>{
    console.log(`서버실행${port}`)
})