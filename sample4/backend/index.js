const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json())
app.use(cors())

let data=[
        {id:1, name:'김동욱', addr:'서울'},
        {id:2, name:'진기주', addr:'제주'},
        {id:3, name:'서지혜', addr:'부산'},
        {id:4, name:'이원정', addr:'울산'},
        {id:5, name:'김종수', addr:'경기'},
]

let no = 6

app.get('/data',(req,res)=>{
    res.send(data)
})
// 삭제
app.delete('/data/:id',(req,res)=>{
    data = data.filter(i => i.id !== Number(req.params.id))
    res.send(data)
})

// 추가
app.post('/data' , (req,res)=>{
    const ndata={
        id:no++, name:req.body.current.name, addr:req.body.current.addr
    }
    man.push(ndata)
    res.send(data)
})

app.listen(port,()=>{
    console.log(`서버실행${port}`)
})