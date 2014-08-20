Template['list-topians'].topians = function () {
    return Topians.find({});
};

Template['list-topians'].topiansTable = function () {
    return {
        columns: [{
            title: 'Rand'
          , data:  'rand'
        }]
      // , rows: Topians.find({}).fetch()
      , subscription: 'topiansTable'
      , debug: 'all'
    };
};
