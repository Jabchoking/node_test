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

module.exports = {
    getmail,
}