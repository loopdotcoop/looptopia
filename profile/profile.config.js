Config.profile = {
    name:         'Profile'
  , slug:         'profile'
  , version:      '0.0.2'
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
  , url:          'http://looptopia.loop.coop/profile'
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]
  , widgets: { // add a link to the 'registered' widget area
        'registered': [
            { path:'/profile', name:'_username_', order:'high' } // '_username_' is a keyword recognized by ‘layout.html’
        ]
    }
  , changelog: [
        '+ 0.0.1-1           create ‘profile’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ profile@0.0.2     mock-merge into develop/looptopia@0.1.3-9; '
    ]
};

//// https://github.com/splendido/accounts-templates-core#routing
AccountsTemplates.configure({
    postSignUpRoutePath: '/profile'
});

