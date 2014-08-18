Template.layout.events({
    'click #sign-out': function () {
        Meteor.logout();
    }
});

Template.layout.username = function() { // @todo change to username
    var user = Meteor.user();
    if (user && user.emails) {
        return user.emails[0].address;
    }
}
