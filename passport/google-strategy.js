var GoogleStrategy=require('passport-google-oauth20').Strategy;
var passport =require('passport');
console.log(GoogleStrategy);

passport.use(new GoogleStrategy(
    {
        clientID:"223223961568-pv9196dpu8krejl4obhd4ro0dmu23hto.apps.googleusercontent.com",
        clientSecret:"rbHRgzEArG8WGJR9wwIVm2iE",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },function(accessToken,refreshToken,profile,cb){
        console.log('Here is callback for profile:');
        //console.log(profile);
        console.log(profile);
        console.log('Access Token',accessToken);
        console.log('Refresh Token',refreshToken);
        cb(null,{id:profile.id,profilename:profile.displayName,email:profile.emails[0].value,photo:profile.photos[0].value});
    }
))

passport.serializeUser(function(user, done) {
    console.log('Serialize');  
    console.log(user);   
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('De-Serialize');
    console.log(user);  
    //User.findById(userId, done);
    done(null, user);
});