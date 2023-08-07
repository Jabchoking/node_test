const express= require('express')
const app = express()
const port = 3000

const data = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ']

app.get('/',(req,res)=>{
    res.send('<a href="/data">data</a>')
})

app.get('/data',(req,res)=>{
    res.send(`<ul>
        ${data.map((i,j)=>`<li><a href={/data${j}} > ${i}</a> </li>`)}
    </ul>`)
} )

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data[id];
    if(id > 0 && id<data.length){
        res.send(`<h2>${item}</h2>`);
    }else{
        res.send(`<h2>데이터 없음</h2>`)
    }
    });

app.get('*',(req , res)=>{
    res.send('<h2>페이지가 없</h2>')
})

app.listen(port , ()=> {
    console.log(`서버실행${port}`)
})