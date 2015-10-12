Template.directory.helpers ({
  directory: function () {
    //return Directory.find({loc:{$near:{$geometry:{type: "Point",coordinates:[-117.93653229999998, 33.7952374]}, $maxDistance:50000}}});
    return Directory.find({loc:{$near:{$geometry:{type: "Point",coordinates:[Session.get('lon'), Session.get('lat')]}, $maxDistance:50000}}});
    //return Directory.find({});
  }
});

Template.home.events({
  'click button': function() {
      if (Session.get('lon') == undefined
          || Session.get('lat') == undefined) {
        navigator.geolocation.getCurrentPosition(function(position) {
          Session.set('lon', position.coords.longitude);
          Session.set('lat', position.coords.latitude);
        });
      }
      console.log(Session.get('lon'), Session.get('lat'))
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

    event.target.name.value = "";
    event.target.phone.value = "";
    event.target.address.value = "";
  }
})
