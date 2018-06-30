var express = require('express');
var router = express.Router();
var PageController = require('../controller/admin/page');

router.get('/', (req, res, next)=> {
    res.render('admin/index', { title: 'Admin Area.' });
});

router = PageController(router);


router.get('/login', function(req, res, next){
    res.render('admin/login', {title: 'Login Area'});
});

router.post('/login', function (req, res, next) {
    var data = req.body;
    res.json(data);
});

module.exports = router;