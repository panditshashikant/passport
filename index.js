var express=require('express');
var routers=require('./router');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var session=require('express-session');
const bodyParser = require('body-parser');
var app=express();
app.set('view engine','ejs');

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'Pandit'
}))
app.use(bodyParser.urlencoded({ extended: false }));
//Local Strategy --Uncoment below code for local strategry
//require('./passport/local-stratgy');
//These below two lines are used for local and google strategy. 
app.use(passport.initialize());//To initialize
app.use(passport.session());//To set logged in user in session.

//Google Strategy
require('./passport/google-strategy');

app.use('/',routers);


app.listen(3000,()=>{
    console.log('Listening at: 3000');
})