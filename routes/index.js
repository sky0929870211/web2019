var express = require('express');
var router = express.Router();
var database = require('../service/firedata'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    // fireData.ref('/teacher').once('value', function (snapshot){        
    //     var title=snapshot.val();
    //     res.render('index',{'title': title});
        
    // })
    res.render('index',{user:'',isLogin:req.cookies.status});
});



module.exports = router;