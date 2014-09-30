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
            { path:'/chatter', name:'Chatter', tmpt:'chatter', icon:'cbh-chat-2', title:'Join the conversation!' }
        ]
      , 'gear': [
            { path:'/chatter', name:'Chatter', tmpt:'chatter', icon:'cbh-chat-2', title:'Join the conversation!', order:'high' }
        ]
      , 'chatter': [
            { target:'_blank', path:'https://www.facebook.com/loopdotcoop'      , name:'Facebook'    , icon:'cbh-facebook-squared', title:'Follow us on Facebook' }
          , { target:'_blank', path:'https://twitter.com/loopdotcoop'           , name:'Twitter'     , icon:'cbh-twitter'         , title:'Follow us on Twitter' }
          // , { target:'_blank', path:'http://looptopian-launch.eventbrite.co.uk/', name:'Launch Party', icon:'cbh-rocket'          , title:'It’s in Brighton on 27th September' }
          // , { target:'_blank', path:'https://github.com/loopdotcoop'      , name:'GitHub'  , icon:'cbh-github-1'     , title:'Check out our GitHub repos' }
        ]
    }

  , changelog: [
        '+ chatter@0.0.1-1   `init-chatter` feature of ‘looptopia@0.2.3-2’; '
      , '+ chatter@0.0.2     `target="_blank"` on links; heading “Social Chatter and Party Invites; '
    ]
  , version:      '0.0.2'
}
