var router=require('express').Router();
var passport=require('passport');
router.get('/',(req,res)=>{
    console.log('Here is USER:');
    console.log(req.user);
    res.render('index',req.user);
})
router.get('/login',(req,res)=>{
    res.render('login');
})
router.get('/user',(req,res)=>{
    console.log(req.user);
    res.send(JSON.stringify(req.user));
})


router.get('/loginFailure', function(req, res, next) {
    res.send('Failed to authenticate');
    }
);
    
router.get('/loginSuccess', function(req, res, next) {
    res.send('Successfully authenticated');
}
);
//Local Strategry --Uncoment below code for local strategry
// router.post('/login',passport.authenticate('local',{
//     successRedirect: '/loginSuccess',
//     failureRedirect: '/loginFailure'})
// )
//Google Strategy
router.get('/auth/google',
passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  //res.send(req.user);
  res.redirect('/');
});

module.exports=router;