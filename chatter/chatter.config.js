Config.chatter = {
    name:         'Chatter'
  , slug:         'chatter'
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

    //// Add links to widgetized areas. For icons, see private/fontello-*/demo.html
  , widgets: {
        'all-users': [
            { path:'/chatter', name:'chatter', tmpt:'chatter', icon:'cbh-share', title:'Follow us! Come to our parties!' }
        ]
      , 'dashboard': [
            { path:'/chatter', name:'chatter', tmpt:'chatter', icon:'cbh-share', title:'Follow us! Come to our parties!' }
        ]
      , 'chatter': [
            { path:'https://www.facebook.com/loopdotcoop', name:'Facebook', icon:'cbh-facebook-rect', title:'Follow us on Facebook' }
          , { path:'https://twitter.com/loopdotcoop'     , name:'Facebook', icon:'cbh-twitter-bird' , title:'Follow us on Twitter' }
        ]
    }

  , changelog: [
        '+ chatter@0.0.1-1   `init-chatter` feature of ‘looptopia@0.2.3-2’; '
    ]
  , version:      '0.0.1-1'
}
