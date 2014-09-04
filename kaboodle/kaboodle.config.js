Config.kaboodle = {
    name:         'Kaboodle'
  , slug:         'kaboodle'
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

    //// Add links to widgetized areas. For icons, see private/fontello-*/demo.html
  , widgets: {
        'registered': [
            { path:'/kaboodle', name:'Holdall', icon:'cbh-holdall', title:'View your kaboodle', tmpt:'kaboodle' }
        ]
    }

  , changelog: [
        '+ dashboard@0.0.1-1   create ‘dashboard’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ dashboard@0.0.2     mock-merge into develop/looptopia@0.1.3-9; '
      , '+ dashboard@0.0.4     simpler `AccountsTemplates.ensureSignedIn`; '
      , '+ dashboard@0.0.5-1   Add ‘Dashboard’ heading; ‘Looptopia’ play icon replace ‘Launch Party’ icon; '
      , '+ dashboard@0.0.6     finish feature branch; '
      , '+ kaboodle@0.1.1-1    change ‘dashboard’ to ‘kaboodle’; '
    ]
  , version:       '0.1.1-1'
}
