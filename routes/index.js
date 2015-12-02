var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var price = req.query.price;
    var vbs = req.query.vbs;//这两种方式是获取get请求的参数
    console.log("vbs is: ", vbs);

    res.render('index', {title: "这里是第一个页面", name: 'Echo', age: 24, gender: "female", cols: [{name: "Shasha", age: 23}, {name:   'shaohua', age: 34}], price: price});
});


router.post('/login', function(req, res, next) {

    var username = req.body.username;
    var password = req.body.password;//这两种方式是获取post请求的参数
    console.log("username is: ", username);
    app.locals.username = username;
    //res.setHeader({"status": 200});
    res.send({status: "success"});

});
router.get('/quit', function(req, res, next) {

    var username = req.query.username;
    var password = req.query.password;//这两种方式是获取get请求的参数
    console.log("password is: ", password);

    res.render('login', {username: app.locals.username, password: password});
});


router.get('/score', function(req, res, next) {

    res.render('score', {students: [
        {
            name: "Echo",
            score: 87
        },
        {
            name: "LDL",
            score: 70
        },
        {
            name: "LJD",
            score: 23
        }
    ]});
});

function ABC (){

}

module.exports = ABC;
//module.exports = router;
