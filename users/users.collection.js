//// Server only.

if (Meteor.isServer) {

    UsersTable = new DataTableComponent({
        subscription: 'usersTable'
      , collection: Meteor.users
    });
    UsersTable.publish();

}
