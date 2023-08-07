// todomodule

let { data } = require("./todo")
let no = 6; 

const todogetmodule = ( req , res ) => {
    res.send(data)
}

const tododeletemodule = (req,res) =>{
    data = data.filter( item => item.id !== Number(req.params.id))
    res.send( data )
}

const todoaddmodule =  (req, res) => {
    console.log( req.body.text )
    const todo = {
        id:no++, 
        text:req.body.text,
        isChk:false
    }
    data.push(todo)
    res.send( data )
}

const todoeditmodule = (req, res) => {
    const todo = data.find( item => item.id === Number(req.params.id))
    if( todo ) {
         todo.isChk  = !todo.isChk 
    } 
    res.send( data )
 }


module.exports ={
    tododeletemodule,
    todogetmodule,
    todoaddmodule,
    todoeditmodule
}