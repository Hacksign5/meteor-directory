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
  name: 'newItem',
  action: function() {
    this.render('header', {to:'header'});
    this.render('newItem');
    this.render('footer', {to:'footer'});
  }
});
