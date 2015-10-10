Directory = new Mongo.Collection("directory");

if (Meteor.isClient) {
    Template.directory.helpers ({
      directory: function () {
        return Directory.find({});
      }
    });

    Template.home.events({
      'click button': function() {
          if (Session.get('lat') == undefined
              || Session.get('lon') == undefined) {
            navigator.geolocation.getCurrentPosition(function(position) {
              Session.set('lat', position.coords.latitude);
              Session.set('lon', position.coords.longitude);
            });
          }
        }
    });

    Template.newItem.events({
      "submit form": function (event){
        event.preventDefault();

        Meteor.call("addItem",
          event.target.name.value,
          event.target.phone.value,
          event.target.address.value
        );
      }
    })
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.methods({
  addItem: function (name, phone, address) {
    console.log("test");

    var geo = new GeoCoder();
    var result = geo.geocode(address);

    Directory.insert({
      name: name,
      phone_number: phone,
      address: address,
      longitude: result.longitude,
      latitude: result.latitude,
      createdAt: new Date()
    });
  }
})
