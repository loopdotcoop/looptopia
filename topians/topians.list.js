if (Meteor.isClient) {

    Template['topians.list'].topians = function () {
        return Topians.find({});
    };

    Template['topians.list'].topiansTable = function () {
        return {
            columns: [{
                title: 'Rand'
              , data:  'rand'
            },{
                title: 'ID'
              , data:  '_id'
            }]
          // , rows: Topians.find({}).fetch()
          , subscription: 'topiansTable'
          , debug: false
        };
    };

}