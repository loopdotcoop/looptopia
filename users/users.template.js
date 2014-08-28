if (Meteor.isClient) {

    Template['users.list'].usersTable = function () {
        return {
            columns: [{
                title:   'Email'
              , data:    'emails'
              , mRender: function (data, type, row) {
                    return data[0].address; // `data[0]` is the primary email address
                }
            },{
                title:   'Verified'
              , data:    'emails'
              , mRender: function (data, type, row) {
                    return data[0].verified ? 'yes' : 'no'; // `data[0]` is the primary email address
                }
            },{
                title: 'Created At'
              , data:  'createdAt'
            },{
                title: 'ID'
              , data:  '_id'
            }]
 
          , subscription: 'usersTable'
          , debug: false
        };
    };

}