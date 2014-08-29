if (Meteor.isClient) {

    Template['users.list'].usersTable = function () {
        return {
            columns: [{
                title:   'Username'
              , data:    'profile'
              , mRender: function (data, type, row) {
                    if (! data || ! data.username) { return '-'; }
                    return data.username;
                }
            },{
                title:   'Email'
              , data:    'emails'
              , mRender: function (data, type, row) {
                    if (! data || ! data[0]) { return '-'; }
                    return data[0].address; // `data[0]` is the primary email address
                }
            },{
                title:   'Verified'
              , data:    'emails'
              , mRender: function (data, type, row) {
                    if (! data || ! data[0]) { return '-'; }
                    return data[0].verified ? 'yes' : 'no'; // `data[0]` is the primary email address
                }
            },{
                title: 'Created At'
              , data:  'createdAt'
              , mRender: function (data, type, row) {
                    return data || '-';
                }
            },{
                title: 'ID'
              , data:  '_id'
            }]
 
          , subscription: 'usersTable'
          , debug: true
        };
    };

}