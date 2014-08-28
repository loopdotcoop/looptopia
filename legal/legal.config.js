Config.legal = {
    name:         'Legal'
  , slug:         'legal'
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
  , contributors: [
        'Beth Walker <info@loop.coop>'
    ]
  , widgets: { // add legal links to the 'footer-left' widget area
        'footer-left': [
            { path:'/legal/privacy', name:'Privacy' }
          , { path:'/legal/terms'  , name:'Terms'   }
        ]
    }
  , changelog: [
        '+ legal@0.0.1-1     create ‘legal’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ legal@0.0.2       mock-merge into develop/looptopia@0.1.3-9; '
    ]
};

