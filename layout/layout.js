if (Meteor.isClient) {

    //// For the ‘sign-out’ widget, defined in ‘account.config.js’.
    Template.layout.events({
        'click #sign-out': function () {
            Meteor.logout();
        }
    });

    // //// Dismiss a popup (actually a route) by clicking anywhere on the background. // @todo return to the in-app URL, not just '/'
    // Template.layout.events({
    //     'click #iframe-blocker': function () {
    //         Router.go('/');
    //     }
    // });


}
