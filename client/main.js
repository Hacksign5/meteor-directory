Template.directory.helpers({
	directory: function() {
		return Directory.find({loc:{$near:{$geometry:{type: "Point",coordinates:[Session.get('lon'), Session.get('lat')]}, $maxDistance:10000000}}});
	}
});

Template.dirtr.helpers({
	locationIsSet: function() {
		return (Session.get('lon') !== undefined || Session.get('lat') !== undefined);
	},
	getDistance: function(unit) {
		return geolib.convertUnit(unit, geolib.getDistance({
			longitude: Session.get('lon'),
			latitude: Session.get('lat')
		},{
			longitude: this.loc.coordinates[0], 
			latitude: this.loc.coordinates[1]
		}), 1);
	}
});



Template.newItem.events({
	"submit form": function(event) {
		event.preventDefault();

		Meteor.call("addItem", event.target.name.value, event.target.phone.value, event.target.address.value);

		event.target.name.value = "";
		event.target.phone.value = "";
		event.target.address.value = "";
	}
});
