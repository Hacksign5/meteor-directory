Meteor.methods({
	geoCodeReverse: function (loc) {
		var geo = new GeoCoder();

		var result = geo.reverse(loc[1], loc[0]);
		console.log(result[0]);
		return result[0];
	},
	geoCode: function (address) {
		var geo = new GeoCoder();

		var result = geo.geocode(address);
		console.log(result);
		return result;
	},
  addItem: function (name, phone, address) {

    var geo = new GeoCoder();
    var result = geo.geocode(address);

    console.log(result[0].longitude);
    console.log(result[0].latitude);

    Directory.insert({
      name: name,
      phoneNumber: phone,
      address: address,
      loc: {
        type: "Point",
        coordinates: [result[0].longitude, result[0].latitude]
      },
      createdAt: new Date()
    });
  }
})
