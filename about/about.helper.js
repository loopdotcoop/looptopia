if (Meteor.isClient) {
    Helpers.addScope('Config', Config); // https://github.com/raix/Meteor-handlebar-helpers/tree/master#add-objects-to-the-cope


    //// Check whether the current user has superadministrator privileges.
    UI.registerHelper('isSuper', function () {
        var user = Meteor.user();
        if (user && user.emails && user.emails[0] && 'info@loop.coop' === user.emails[0].address) { return true; }
    });

    //// Show the current user’s `username`.
    UI.registerHelper('username', function() {
        var user = Meteor.user();
        if (user && user.profile && user.profile.username) {
            return user.profile.username;
        }
    });

}

//// http://stackoverflow.com/a/19131165
Handlebars.registerHelper('key_value', function(context, options) {
    var result = [];
    _.each(context, function(value, key, list) {
        result.push({key:key, value:value});
    });
    return result;
});
