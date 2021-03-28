'use strict'
const express = require('express')
const app=express()
const serverError=require("./error-handlers/5xx")
const notFound=require("./error-handlers/404")
app.get('/',(req,res)=>{
res.send("Hello World")
})

function Start(port){
    app.listen(port,()=>{console.log(port);})
}

app.get('/bad',(req,res)=>{
    throw new Error("ERROR 500")
})

module.exports={
    app:app,
    Start:Start,
};

app.use(serverError)
app.use("*",notFound)