Meteor.startup(function () {
  // code to run on server at startup
  Directory._ensureIndex({'loc.coordinates':'2dsphere'});
});

Meteor.methods({
  addItem: function (name, phone, address) {

    var geo = new GeoCoder();
    var result = geo.geocode(address);

    console.log(result[0]);
    console.log(result[0].latitude);
    console.log(result[0].longitude);

    Directory.insert({
      name: name,
      phone_number: phone,
      address: address,
      loc: {
        type: "Point",
        coordinates: [result[0].longitude, result[0].latitude]
      },
      createdAt: new Date()
    });
  }
})
