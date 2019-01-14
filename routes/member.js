var express = require('express');
var router = express.Router();
var database = require("../service/firedata");
var isLogin = false;
/* GET home page. */

router.get('/register', function (req, res, next) {
    res.render('register',{message:'',isLogin:req.cookies.status});

});

router.post('/registerdone', function (req, res, next) {
    if(req.body.uid && req.body.upwd && req.body.upwd2 && req.body.uname && req.body.uemail && req.body.uphone && req.body.uaddress){
        database.ref('user').once('value',function(snapshot){
            var alluser=snapshot.val();
            var isregistered=false;
            for(user in alluser){
                if(req.body.uid==alluser[user].uid){
                    res.render('register',{message:'帳號已被註冊',isLogin:req.cookies.status});    
                    isregistered=true;               
                }
            }
            if(isregistered==false){
                var adduser = database.ref('/user').push();
                adduser.set({
                    "uid":req.body.uid,
                    "pwd":req.body.upwd,
                    "name":req.body.uname,
                    "phone":req.body.uphone,
                    "email":req.body.uemail,
                    "address":req.body.uaddress
                })
                        
                res.render('login',{message:'',isLogin:req.cookies.status});
            }
        })
    }
    else{
        res.render('register',{message:'您有資料未填',isLogin:req.cookies.status})
    }

});

router.get('/login', function (req, res, next) {
    res.render('login',{message:'',isLogin:req.cookies.status});

});

router.post('/logindone', function (req, res, next) {
    
    database.ref('user').once('value',function(snapshot){
        var alluser = snapshot.val();
        for(user in alluser){
            if(req.body.uid==alluser[user].uid){
                if(req.body.upwd==alluser[user].pwd){
                    isLogin=true;
                    res.cookie('status',{
                        'uid':req.body.uid,
                        'uname':alluser[user].name,
                        'unum':user
                    })
                   
                    res.render('index',{user:req.body.uid,isLogin:isLogin}); 
                }    
                else{
                    res.render('login',{message:'密碼錯誤'});
                   
                }
            }
        }
    })

});

router.get('/cart', function (req, res, next) {
    if(req.cookies.status){
        var str = '';
        
    }

});

router.get('/order', function (req, res, next) {
    res.render('order',{message:'',isLogin:req.cookies.status});

});

router.get('/logout', function (req, res, next) {
    isLogin=false;
    res.cookie('status','');
    res.render('login',{isLogin:isLogin,message:'',})
});




module.exports = router;
