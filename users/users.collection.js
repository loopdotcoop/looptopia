//// Client only.

if (Meteor.isClient) {
    Meteor.subscribe('users');
}




//// Server only.

if (Meteor.isServer) {

    Meteor.publish('users', function () {
        return Meteor.users.find({});
    });

    UsersTable = new DataTableComponent({
        subscription: 'usersTable'
      , collection: Meteor.users
    });
    UsersTable.publish();

}
