Config.users = {
    name:         'Users'
  , slug:         'users'
  , version:      '0.0.8'
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
  , changelog: [
        '+ users@0.0.1-1     create ‘users’ as a feature of ‘looptopia@0.1.3-9’; '
      , '+ users@0.0.2       merge into develop/looptopia@0.1.3-9; '
      , '+ users@0.0.4       disable ‘users/list’; '
      , '+ users@0.0.6       qik fix for incomplete user records `if (! data || ! data[0]) { return "-"; }`; '
      , '+ users@0.0.8       simpler publish just using ‘DataTable’; ‘account.babelslug’ records username on register; '
    ]
};

