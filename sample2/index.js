const express= require('express')
const app = express()
const port = 3000

// json 형태의 데이터를 해석해야함 - 미들웨어
app.use(express.json())

const data = [
    {
        id : 1 ,
        name : '대황킹시' , 
        price : 1900,
        desc : '제로라임을 개잘만드는 대황킹시',
        imgurl : '/imgs/kingsi.jpg'
    },
    {
        id : 2 ,
        name : '솔의눈' , 
        price : 700 ,
        desc : '마시면 정신이 아득해짐',
        imgurl : '/imgs/eyeofsoll.jpg'
    },
    {
        id : 3 ,
        name : '데자와' , 
        price : 900 ,
        desc : '호불호갈림',
        imgurl : '/imgs/dejaya.jpg'
    },
    {
        id : 4 ,
        name : '아침햇살' , 
        price : 1200 ,
        desc : '고오오급 쌀뜰물',
        imgurl : '/imgs/moningsun.jpg'
    }
]
app.get('/products', (req,res) =>{
    res.send({
        data:data
    })
} )

app.get('/products/:id',(req,res)=>{
    const num = Number(req.params.id)
    const {id,name,price,desc,imgurl} = data[num-1]
    res.send(`
        번호 : ${id} 번
        이름 : ${name}
        가격 : ${price}
        설명 : ${desc}
        이미지주소 : ${imgurl}
    `)
})

app.listen(port , ()=> {
    console.log(`서버실행${port}`)
})