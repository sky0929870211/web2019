var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
 
    res.render('index', { title: 'hello' });

    var list={
        1:{
            message:"hell0"
        },
        2:{
            message:'fuck'
        }
    }

    res.render('index', { 
        title: 'hello', 
        myName : 'Sea',
        list: list,
        tag: "<h1>hi</h1>" }
        );
});

module.exports = router;