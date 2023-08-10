let db = require('../models')

const getmail =  (req, res) => {
    const sql = `select * from maillist`
    db.query( sql , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
}
const addmail = (req, res) => {
    console.log( req.body.text )
    const {name , addr} = req.body.text
    const sql = `insert into todos ( name, addr) values (?,?) `
    db.query( sql , [name , addr] , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
}
module.exports = {
    getmail,
}