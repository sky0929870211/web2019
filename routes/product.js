var express = require('express');
var router = express.Router();
var database = require('../service/firedata'); 

/* GET home page. */
router.get('/Conti', function (req, res, next) {
    res.render('Conti', { title: 'Conti',isLogin:req.cookies.status});

});

router.get('/FIVB', function (req, res, next) {
    res.render('FIVB', { title: 'FIVB',isLogin:req.cookies.status});

});

router.get('/Mikasa', function (req, res, next) {
    res.render('Mikasa', { title: 'Mikasa',isLogin:req.cookies.status});

});

router.post('/addtocart',function(req, res, next){
    if(req.cookies.status){
        var addcart = database.ref('cart').push();
        addcart.set({
            'uid':req.cookies.status.uid,
            'product':{
                'volleyball':req.body.volleyball,
                'price':req.body.price,
                'amount':req.body.amount
            }
        })  
        res.render(req.body.volleyball,{message:'',isLogin:req.cookies.status});
    }
    else{
        res.render('login',{message:'',isLogin:req.cookies.status});
    }
})

module.exports = router;