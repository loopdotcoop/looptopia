if (Meteor.isClient) {

    //// For the ‘sign-out’ widget, defined in ‘you.config.js’.
    Template.layout.events({
        'click #sign-out': function () {
            Meteor.logout();
        }
    });

}
