var express = require('express')
var next = require('next')

var dev = process.env.NODE_ENV!=='production'
const app = next({dev})
var handle = app.getRequestHandler()


app.prepare().then(()=>{
    const server = express()

    //routes
    server.get('/login',(req,res)=>{
    })
    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(3000,(err)=>{
        if(err)throw(err)
        console.log("Ready on 3000 😆")
    })
}).catch((ex)=>{
    console.error(ex.stack)
    process.exit(1)
})
