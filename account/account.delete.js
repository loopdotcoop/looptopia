if (Meteor.isClient) {
    Template['account.delete'].events({
        'click #account-delete-button': function () {
            if ('info@loop.coop' === Meteor.user().emails[0].address) {
                throw new Meteor.Error(500, 'That account cannot be deleted.'); // @todo display error text in the console
            }
            Meteor.users.remove({ _id:Meteor.userId() }); 
        }
    });
}