var express = require('express')
var next = require('next')
var session = require('express-session')
var passport = require('passport')

var dev = process.env.NODE_ENV!=='production'
const app = next({dev})
var handle = app.getRequestHandler()

require('dotenv').config()
require('./src/helpers/passport')



app.prepare().then(()=>{
    const server = express()
    var u = {} //for user object
    var sess;
    server.use(passport.initialize())
    server.use(passport.session())
    server.use(session({secret:process.env.SECREAT,saveUninitialized: true,resave: true}))

    //routes of passport
    server.get('/auth/google',//auth
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    server.get('/auth/google/callback', //login
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    sess=req.session;
    console.log(sess.id);
    u = req.user
    res.redirect('/')
    });
    server.get('/users',(req,res)=>{if(req.session.id==sess)res.send(u)})
    //normal routes
    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(process.env.PORT || 3000,(err)=>{
        if(err)throw(err)
    })
}).catch((ex)=>{
    console.error(ex.stack)
    process.exit(1)
})
