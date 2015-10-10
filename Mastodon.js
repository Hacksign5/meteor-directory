Directory = new Mongo.Collection("directory");

if (Meteor.isClient) {
    Template.directory.helpers ({
      directory: function () {
        return Directory.find({});
      }
    });

    Template.newItem.events({
      "submit form": function (event){
        event.preventDefault();

        var name = event.target.name.value;
        var phone = event.target.phone.value;
        var address = event.target.address.value;

        Directory.insert({
          name: name,
          phone_number: phone,
          address: address,
          createdAt: new Date()
        });
      }
    })
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

/*
Meteor.methods({
  addItem: function (item) {
    Directory.insert({
      name:
    })
  }
})
*/
