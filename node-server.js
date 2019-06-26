var express = require('express')
var next = require('next')
var passport = require('passport')

var dev = process.env.NODE_ENV!=='production'
const app = next({dev})
var handle = app.getRequestHandler()

require('dotenv').config()
require('./src/helpers/passport')



app.prepare().then(()=>{
    const server = express()
    
    server.use(passport.initialize())
    server.use(passport.session())

    //routes
    server.get('/auth/google',//auth
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    server.get('/auth/google/callback', //login
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    res.redirect('/');});

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
