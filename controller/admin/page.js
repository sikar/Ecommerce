function Page(router){
  var page = router;

  page.get('/pages', function (req, res, next) {
      res.render('admin/pages/list', {title: 'Page List'});
  });

  page.get('/page/add', function (req, res, next) {
      res.render('admin/pages/add', {title: 'Page Add'});
  });

  page.get('/page/edit', function (req, res, next) {
      res.render('admin/pages/edit', {title: 'Page Edit'});
  });

  return page;
}

module.exports = Page;
