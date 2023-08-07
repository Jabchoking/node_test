let db = require('../models')

const getCustomer =  (req, res) => {
    const sql = `select * from customer`
    db.query( sql , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
}
const delCustomer = ( req , res ) => {
    const {id} = req.params
    const sql = `DELETE FROM customer WHERE id = ${id} `
    db.query( sql , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
    // data = data.filter( item => item.id !== Number(req.params.id))
    // res.send( data )
    
}
const addCustomer  = (req, res) => {
    console.log( req.body )
    const {name , addr } = req.body
    const sql = `insert into customer (name , addr) values (?,?) `
    db.query( sql , [name,addr] , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
}

const putCustomer  = (req, res) => {
    console.log( req.body )
    const {name , addr } = req.body
    const sql = `insert into customer (name , addr) values (?,?) `
    db.query( sql , [name,addr] , ( err, result )=>{
        // db.query(쿼리형식 , [전달값] , (에러 , 쿼리결과) =>{})
        if(err){
            console.log(err)
        }else{
            res.send( result )
        }
    })
 }


module.exports = {
    getCustomer,
    addCustomer,
    delCustomer,
    putCustomer
}
