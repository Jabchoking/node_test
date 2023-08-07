const express = require('express')
const app = express()
const port = 3000

app.get('/',(request , response)=>{
    response.send(`<h2>출력</h2>`)
})

app.get('/test' , (req,res)=>{
    res.send(`<h2>test</h2>`)
})
app.get('/1' , (req,res)=>{
    res.send(`<h2>1</h2>`)
})
app.get('/test/:id' , (req,res)=>{
    const id = req.params.id
    console.log(typeof id)
    res.send(`<h2>id ${id}</h2>`)
})

app.listen(port , ()=> {
    console.log(`서버실행${port}`)
})