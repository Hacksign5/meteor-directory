Directory = new Mongo.Collection("directory");

if (Meteor.isClient) {
    Template.directory.helpers ({
      directory: function () {
        return Directory.find({});
      }
    })
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
