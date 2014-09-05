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
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]

    //// Add links to widgetized areas. For icons, see private/fontello-*/demo.html
  , widgets: {
        'all-users': [
            { path:'/chatter', name:'Chatter', tmpt:'chatter', icon:'cbh-chat-2', title:'Follow us! Come to our parties!' }
        ]
      , 'holdall': [
            { path:'/chatter', name:'Chatter', tmpt:'chatter', icon:'cbh-chat-2', title:'Follow us! Come to our parties!', order:'high' }
        ]
      , 'chatter': [
            { path:'https://www.facebook.com/loopdotcoop'      , name:'Facebook'    , icon:'cbh-facebook-squared', title:'Follow us on Facebook' }
          , { path:'https://twitter.com/loopdotcoop'           , name:'Twitter'     , icon:'cbh-twitter'         , title:'Follow us on Twitter' }
          , { path:'http://looptopian-launch.eventbrite.co.uk/', name:'Launch Party', icon:'cbh-rocket'          , title:'It’s in Brighton on 27th September' }
          // , { path:'https://github.com/loopdotcoop'      , name:'GitHub'  , icon:'cbh-github-1'     , title:'Check out our GitHub repos' }
        ]
    }

  , changelog: [
        '+ chatter@0.0.1-1   `init-chatter` feature of ‘looptopia@0.2.3-2’; '
    ]
  , version:      '0.0.1-1'
}
