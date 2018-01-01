var LocalStrategy=require('passport-local').Strategy;
var passport=require('passport');

passport.use(new LocalStrategy(function(username,passport,done){
    //process.nextTick()
    console.log('Local Strategy');
    if(username=="shreya@gmail.com")
    {
    done(null,{user:username,email:'shreya@gmail.com'});
    }
    else
    {
        done(null,false);
    }
}))

passport.serializeUser(function(user, done) {
    console.log('Serialize');  
    console.log(user);   
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('De-Serialize');
    console.log(user);  
    done(null, user);
});

