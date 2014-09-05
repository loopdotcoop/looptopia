if (Meteor.isClient) {

    //// Add some handy variables to Handlebars scope https://github.com/raix/Meteor-handlebar-helpers/tree/master#add-objects-to-the-cope
    Helpers.addScope('Config', Config);
    // Helpers.addScope('Router', Router);


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

    //// Get the current path.
    UI.registerHelper('currentPath', function () {
        return Router.current().path;
    });




    //// Report on WebGL compatibility. `Modernizr.webgl` is not reliable enough. This code is from https://gist.github.com/philadams/1709384
    Meteor.startup(function () {

        // // JQuery only used for selecting and removing elements,
        // // mostly left in for the below ALERT.
        // // the console.log statements are for your sanity checks.
        // var asa; var canvas; var dcanvas; var gl; var expmt;

        // canvas = $('#ldc-webgl-test');
        // console.log(canvas);

        // // check to see if we can do webgl
        // // ALERT FOR JQUERY PEEPS: canvas is a jquery obj - access the dom obj at canvas[0]
        // dcanvas = canvas[0];
        // expmt = false;
        // if ("WebGLRenderingContext" in window) {
        //     console.log("browser at least knows what webgl is.");
        // }
        // // some browsers don't have a .getContext for canvas...
        // try { gl = dcanvas.getContext("webgl"); }
        // catch (x) { gl = null; }
        // if (gl == null) {
        //     try { gl = dcanvas.getContext("experimental-webgl"); }
        //     catch (x) { gl = null; }
        //     if (gl == null) { console.log('but can\'t speak it'); }
        //     else { expmt = true; console.log('and speaks it experimentally.'); }
        // } else {
        //     console.log('and speaks it natively.');
        // }

        // if (gl || expmt) {
        //     console.log("loading webgl content.");
        // } else {
        //     console.log("image-only fallback. no webgl.");
        //     canvas.remove();
        // }

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
