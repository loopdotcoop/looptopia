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

  , content: 
'          <h3>Thanks for visiting the Looptopia Sneak Preview…</h3>' +
'          <p>Looptopia is a strange and beautiful web app where you can immerse yourself in an otherworldly musical experience.</p> ' +
'          <p>Version 1 launches September 27th 2014, but we’ve decided to open the doors a little early and give you a sneak preview of Looptopia… as it is being built.</p>' +
'          <p>Throughout September 2014, you can try out the app and see the world of Looptopia taking shape. New features are being added regularly, new characters are arriving, and more and more of the environment is being unlocked.</p>' +
'          <p>We’re giving you a sneak preview because we’re keen to open up a dialogue about Looptopia from the beginning. Want a feature that isn’t there? Think something should be changed? Want to help build this world? Then get in touch and let’s talk.</p>' // @todo link to contact


  , changelog: [
        '+ home@0.0.1-1      create ‘home’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ home@0.0.2        mock-merge into develop/looptopia@0.1.3-9; '
      , '+ home@0.0.4        move `AccountsTemplates` homeRoutePath config to ‘account’; '
    ]
};
