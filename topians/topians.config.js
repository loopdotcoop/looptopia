Config.topians = {
    name:         'Topians'
  , slug:         'topians'
  , version:      '0.0.4'
  , description:  'Xx.' // no more than 255 characters
  , keywords:     'Xx'
  , scripts: {
        test:     'echo \'Error: no test specified\' && exit 1'
    }
  , organization: 'Loop.Coop'
  , author:       'Rich Plastow <info@loop.coop>'
  , year:         '2014'
  , license:      'GPL v2'
  , type:         'website' // http://ogp.me/#types
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]

  , widgets: {} // can be filled with widget areas, eg 'footer-left'

  , schema: new SimpleSchema({
        rand: {
            type: Number,
            label: "Random"
        }
    })

  , changelog: [
        '+ topians@0.0.1-1   create ‘topians’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ topians@0.0.2     merge into develop/looptopia@0.1.3-9; '
      , '+ topians@0.0.4     ‘topians/edit’ with ‘AutoForm’; '
    ]
};


//// Attach the ‘Collection2’ schema defined above.
Topians.attachSchema(Config.topians.schema);


