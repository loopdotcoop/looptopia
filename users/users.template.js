if (Meteor.isClient) {

    //// http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
    var htmlEntities = function htmlEntities (str) { // @todo sanitize during registration and profile-edit, so that we don’t need to run `htmlEntities()` here
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

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
                    return htmlEntities(data[0].address); // `data[0]` is the primary email address @todo sanitize during registration and profile-edit
                }
            // },{
            //     title:   'Verified'
            //   , data:    'emails'
            //   , mRender: function (data, type, row) {
            //         if (! data || ! data[0]) { return '-'; }
            //         return data[0].verified ? 'yes' : 'no'; // `data[0]` is the primary email address
            //     }
            },{
                title: 'Created'
              , data:  'createdAt'
              , mRender: function (data, type, row) {
                    if (! data) { return '-'; }
                    return (
                        moment(data).unix()    // help sort column correctly  http://momentjs.com/docs/#/displaying/unix-timestamp/
                      + '<br>'
                      + moment(data).fromNow() // easier to understand        http://momentjs.com/docs/#/displaying/fromnow/
                    );
                }
            },{
                title: 'Age'
              , data:  'profile'
              , mRender: function (data, type, row) {
                    if (! data || ! data.agc) { return '-'; }
                    var agLabel = '-';
                    Config.account.ageGroupData.forEach(function (configData) { // `forEach()` has no `break`, so we waste a few loop cycles for the sake of tidy code
                        if (configData.code === data.agc) {
                            agLabel = data.agc + ':&nbsp;' + configData.label;
                        }
                    });
                    return agLabel;
                }
            },{
                title: 'Based In'
              , data:  'profile'
              , mRender: function (data, type, row) {
                    if (! data || ! data.bic) { return '-'; }
                    var biLabel = '-';
                    Config.account.basedInData.forEach(function (configData) { // `forEach()` has no `break`, so we waste a few loop cycles for the sake of tidy code
                        if (configData.code === data.bic) {
                            biLabel = data.bic + ':&nbsp;' + configData.label;
                        }
                    });
                    return biLabel;
                }
            },{
                title: 'Hear About'
              , data:  'profile'
              , mRender: function (data, type, row) {
                    if (! data || ! data.hac) { return '-'; }
                    if (! data.hat) { return data.hac; } // the user did not enter an explanation during registration, just the 'hear-about-code'
                    return data.hac + ':&nbsp;' + htmlEntities( 10 > data.hat.length ? data.hat : data.hat.substr(0, 9) + '…' ); // @todo sanitize during registration
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