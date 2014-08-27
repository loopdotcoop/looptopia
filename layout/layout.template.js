if (Meteor.isClient) {

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
    };

    //// Append widgets which have been registered in the `Config` object.
    Template.layout.widgets = function(area, options) {
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
    };

}