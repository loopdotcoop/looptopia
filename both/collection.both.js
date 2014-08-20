Topians = new Meteor.Collection('topians');

Topians.allow({
    insert: function () { return true; }
  , update: function () { return true; }
  , remove: function () { return true; }
});
