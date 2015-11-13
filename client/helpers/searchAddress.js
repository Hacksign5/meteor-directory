Template.searchAddress.onRendered(function() {
	if (Session.get('lon') == undefined
		|| Session.get('lat') == undefined) {
			navigator.geolocation.getCurrentPosition(function(position) {
				Session.set('lon', position.coords.longitude);
				Session.set('lat', position.coords.latitude);
				console.log(position.coords);
				Meteor.call("geoCodeReverse", [position.coords.longitude, position.coords.latitude], function(err, res) {
					if (err !== undefined) {
						console.log(err);
					}
					Session.set('formattedAddress', res.formattedAddress);
					//Session.set(
				});
			});
		}
		//console.log(Session.get('lon'), Session.get('lat'))	
});

Template.searchAddress.helpers({
	formattedAddress: function() {
		return Session.get('formattedAddress');
	},
	addressIsSet: function() {
		return (Session.get('formattedAddress') !== undefined);
	}
});

Template.searchAddress.events({
	"submit form": function(event) {
		event.preventDefault();

		Meteor.call("geoCode", event.target.address.value, function (err, res) {
			if (err !== undefined) {
				// Something went wrong
				console.log(err);
			}

			Session.set('lon', res[0].longitude);
			Session.set('lat', res[0].latitude);
			Session.set('formattedAddress', res[0].formattedAddress);

			console.log(res[0].longitude, res[0].latitude);
		});

		event.target.address.value = "";
	}
});
