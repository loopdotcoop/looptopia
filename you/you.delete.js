if (Meteor.isClient) {
    Template['you.delete'].events({
        'click #you-delete-button': function () {
            if ('info@loop.coop' === Meteor.user().emails[0].address) {
                // throw new Meteor.Error(500, 'That account cannot be deleted.'); // @todo display error text in the console
            }
            Meteor.users.remove({ _id:Meteor.userId() }); 
        }
    });
}