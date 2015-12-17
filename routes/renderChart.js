var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
    //res.render('list/page_list');
    res.render('echartsTestMulti');
});


/* GET home page. */
router.get('/echarts3', function(req, res, next) {
    //res.render('list/page_list');
    res.render('mobileEcharts3/test');
});

router.get('/mobIndex', function(req, res, next) {
    //res.render('list/page_list');
    res.render('mobileEcharts3/index', {'imgList': [
        {
            name: '佟大为',
            url: 'http://dianshiju.cntv.cn/20120112/images/1326328356370_1326328356370_r.jpg'
        },
        {
            name: '猫猫',
            url: 'http://img2.100bt.com/upload/ttq/20120831/1346406424571.jpg'
        },
        {
            name: '小布点',
            url: 'http://img.gmw.cn/images/attachement/jpg/site2/20121128/0023ae634f20121ffff02f.jpg'
        },
        {
            name: '白富美',
            url: 'http://img2.imgtn.bdimg.com/it/u=1197724398,298334274&fm=21&gp=0.jpg'
        }
    ]});
});


module.exports = router;
