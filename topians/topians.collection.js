//// Client and server.

Topians = new Meteor.Collection('topians');

Topians.allow({
    insert: function () { return true; }
  , update: function () { return true; }
  , remove: function () { return true; }
});




//// Client only.

if (Meteor.isClient) {

    Meteor.subscribe('topians');

}




//// Server only.

if (Meteor.isServer) {
    Topians.allow({
        insert: function () { return true; }
    });
    Topians.insert({ rand: Math.floor( Math.random() * 100 ) });
    console.log( 'There are now ' + Topians.find({}).count() + ' Topians.' );

    Meteor.publish('topians', function () {
        return Topians.find({});
    });

    TopiansTable = new DataTableComponent({
        subscription: 'topiansTable'
      , collection: Topians
    });
    TopiansTable.publish();
}
