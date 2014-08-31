Meteor.users.allow({
    insert: function () { return true; }
  , update: function () { return true; }
  , remove: function () { return true; }
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
