Config.dashboard = {
    name:         'Dashboard'
  , slug:         'dashboard'
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
  , url:          'http://looptopia.loop.coop/dashboard'
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]
  , changelog: [
        '+ 0.0.1-1           create ‘dashboard’ as a feature of ‘looptopia@0.1.3-5’; '
    ]
}

//// https://github.com/splendido/accounts-templates-core#routing
AccountsTemplates.configure({
    postSignInRoutePath: '/dashboard'
});
