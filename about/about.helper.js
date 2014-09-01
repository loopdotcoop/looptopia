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

    //// Append widgets which have been registered in the `Config` object.
    UI.registerHelper('widgets', function(area, options) {
        var key, obj
          , result = []
        ;
        for (key in Config) {
            obj = Config[key];
            if (! obj.widgets)       { continue; } // has no `widgets` key
            if (! obj.widgets[area]) { continue; } // the `widgets` object does not reference this widget area
            obj.widgets[area].forEach(function (widget) { // (widget, index, array)
                result['high' === widget.order ? 'unshift' : 'push'](widget); // @todo improve the priority system
            });
        }
        return result;
    });

    //// Allow Templates to add a `...class="active"...` attribute to active links.
    UI.registerHelper('activeIfTemplateIs', function (template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
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
