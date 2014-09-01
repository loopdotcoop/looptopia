Config.dashboard = {
    name:         'Dashboard'
  , slug:         'dashboard'
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
  , url:          'http://looptopia.loop.coop/dashboard'
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]

  , widgets: { // add a link to the 'registered' and 'dashboard' widget areas
        'registered': [
            { path:'/dashboard', name:'Dashboard', tmpt:'dashboard' }
        ]
        //// http://zurb.com/playground/foundation-icons
      , 'dashboard': [
            { path:'/', name:'Looptopia', tmpt:'dashboard', class:'foundicon-youtube', order:'high' }
          // , { path:'http://looptopian-launch.eventbrite.co.uk/', name:'Launch Party', class:'foundicon-chat' }
          // , { path:'https://www.facebook.com/loopdotcoop', name:'Facebook', class:'foundicon-facebook' }
          // , { path:'https://twitter.com/loopdotcoop', name:'Twitter', class:'foundicon-twitter' }
        ]
    }

  , changelog: [
        '+ dashboard@0.0.1-1   create ‘dashboard’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ dashboard@0.0.2     mock-merge into develop/looptopia@0.1.3-9; '
      , '+ dashboard@0.0.4     simpler `AccountsTemplates.ensureSignedIn`; '
      , '+ dashboard@0.0.5-1   Add ‘Dashboard’ heading; ‘Looptopia’ play icon replace ‘Launch Party’ icon; '
    ]
  , version:        '0.0.5-1'
}
