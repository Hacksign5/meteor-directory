Router.configure({
  layoutTemplate: 'applicationLayout'
})

Router.route('/', function () {
  this.render('header', {to:'header'});
  this.render('directory');
  this.render('footer', {to:'footer'});
});

/*
Router.route('/directory', function () {
  this.render('header', {to:'header'});
  this.render('directory');
  this.render('footer', {to:'footer'});
});
*/
