Template.layout.events({
    'click #sign-out': function () {
        Meteor.logout();
    }
});
