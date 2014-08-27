if (Meteor.isClient) {
    Helpers.addScope('Config', Config); // https://github.com/raix/Meteor-handlebar-helpers/tree/master#add-objects-to-the-cope
}

//// http://stackoverflow.com/a/19131165
Handlebars.registerHelper('key_value', function(context, options) {
    var result = [];
    _.each(context, function(value, key, list) {
        result.push({key:key, value:value});
    });
    return result;
});