Config.profile = {
    name:         'Profile'
  , slug:         'profile'
  , version:      '0.0.1-1'
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
  , changelog: [
        '+ 0.0.1-1           create ‘profile’ as a feature of ‘looptopia@0.1.3-5’; '
    ]
};

//// https://github.com/splendido/accounts-templates-core#routing
AccountsTemplates.configure({
    postSignUpRoutePath: '/profile'
});