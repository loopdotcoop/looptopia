if (Meteor.isClient) {

    //// Helpers for the ‘profile’ form.
    Template['you.profile'].helpers({

        editingDoc: function () {
            return Meteor.user();
        }

      , agcOptions: function () {
            var out = [];
            Config.you.ageGroupData.forEach(function (data) {
                out.push({ label:data.label, value:data.code });
            });
            out.shift(); // remove the first element, “What’s your age group?”
            return out;
        }

      , bicOptions: function () {
            var out = [];
            Config.you.basedInData.forEach(function (data) {
                out.push({ label:data.label, value:data.code });
            });
            out.shift(); // remove the first element, “Where are you based?”
            return out;
        }

    });

    //// Go to ‘/gear’ after a successful submission of the ‘profile’ form.
    AutoForm.hooks({
        'edit-user': {
            onSuccess: function(operation, result, template) {
                Router.go('gear');
            }
        }
    });

}


Meteor.methods({
    editUser: function(doc) {

        //// Important server-side check for security and data integrity.
        check(doc, Config.users.schema);

        var
            user = Meteor.user()
          , set = {}
        ;

        if (user.emails[0].address !== doc.emails[0].address) { set['emails.0.address'] = doc.emails[0].address; } // primary email
        if (user.profile.agc       !== doc.profile.agc)       { set['profile.agc'] = doc.profile.agc; } // age-group-code
        if (user.profile.bic       !== doc.profile.bic)       { set['profile.bic'] = doc.profile.bic; } // based-in-code
        if (user.profile.nlo       !== doc.profile.nlo)       { set['profile.nlo'] = doc.profile.nlo; } // newsletter-opt



        if (! _.isEmpty(set) ) {
            Meteor.users.update({ _id:user._id }, { $set:set });
        }
    }
});

