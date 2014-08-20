Topians.allow({
    insert: function () { return true; }
});
Topians.insert({ rand: Math.floor( Math.random() * 100 ) });
console.log( 'There are now ' + Topians.find({}).count() + ' Topians.' );

Meteor.publish('topians', function () {
    return Topians.find({});
});
