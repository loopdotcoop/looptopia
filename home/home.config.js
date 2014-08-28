Config.home = {
    name:         'Home'
  , slug:         'home'
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
  , url:          'http://looptopia.loop.coop/'
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]
  , widgets: {} // can be filled with widget areas, eg 'footer-left'
  , changelog: [
        '+ home@0.0.1-1      create ‘home’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ home@0.0.2        mock-merge into develop/looptopia@0.1.3-9; '
      , '+ home@0.0.4        move `AccountsTemplates` homeRoutePath config to ‘account’; '
    ]
};
