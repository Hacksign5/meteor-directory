Router.configure({
  layoutTemplate: 'applicationLayout'
})

Router.route('/', function () {
  this.render('header', {to:'header'});
  this.render('home');
  this.render('footer', {to:'footer'});
});

Router.route('/directory', function () {
  this.render('header', {to:'header'});
  this.render('directory');
  this.render('footer', {to:'footer'});

});

Router.route('/directory/new', {
  name: 'new-item',
  action: function() {
    this.render('header', {to:'header'});
    this.render('new-item');
    this.render('footer', {to:'footer'});
  }
});
