Meteor.users.allow({
    insert: function () { return false; }
  , update: function (userId, doc) {
        if (userId && doc._id && doc._id === userId) { return true; } // users can change their own `Meteor.users` doc, but nobody else’s // @todo text effectiveness
    }
  , remove: function (userId, doc) {
        if (userId && doc._id && doc._id === userId) { return true; } // users can delete their own `Meteor.users` doc, but nobody else’s // @todo text effectiveness
    }
});




//// Server only.

if (Meteor.isServer) {

    // Meteor.users.remove({});

    Meteor.publish('users', function () {
        return Meteor.users.find({});
    });

    UsersTable = new DataTableComponent({
        subscription: 'usersTable'
      , collection: Meteor.users
    });
    UsersTable.publish();

}
