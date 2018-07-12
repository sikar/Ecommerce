var Page = require('../../models/pages');


function PageController(router){
  var page = router;

  page.get('/pages', function (req, res, next) {
      Page.find((err, datas) => {
          if(err){
            console.log(err);
          }
          
          console.log(datas);
          res.render('admin/pages/list', {title: 'Page List', datas: datas});
      });
  });

  page.get('/page/add', function (req, res, next) {
      res.render('admin/pages/add', {title: 'Page Add'});
  });

  page.post('/page/add', function(req, res, next){
     var p = new Page({
         title: req.body.title,
         key: req.body.keyword,
         desc: req.body.description,
         content: req.body.content,
         status: req.body.status
     });
     p.save().then(result => {
         console.log(result);
         res.redirect('/admin/pages');
     });
  });

  page.get('/page/edit/:id', function (req, res, next) {
      res.render('admin/pages/edit', {title: 'Page Edit'});
  });

  page.get('/page/delete/:id', function (req, res, next) {
      res.render('admin/pages/edit', {title: 'Page Edit'});
  });

  return page;
}

module.exports = PageController;
