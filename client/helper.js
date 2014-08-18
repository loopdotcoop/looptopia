UI.registerHelper('config', function (key) {
    return config[key];
});


//// https://github.com/raix/Meteor-handlebar-helpers/tree/master#add-objects-to-the-cope
Helpers.addScope('Config', Config);