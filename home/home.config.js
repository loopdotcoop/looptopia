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

  , unregistered:
'          <h3>Thanks for visiting the Looptopia Sneak Preview…</h3>' +
'          <p>Looptopia is a strange and beautiful web app where you can immerse yourself in an otherworldly musical experience.</p> ' +
'          <p>Version 1 launches September 27th 2014, but we’ve decided to open the doors a little early and give you a sneak preview of Looptopia… as it is being built.</p>' +
'          <p>Throughout September 2014, you can try out the app and see the world of Looptopia taking shape. New features are being added regularly, new characters are arriving, and more and more of the environment is being unlocked.</p>' +
'          <p>We’re giving you a sneak preview because we’re keen to open up a dialogue about Looptopia from the beginning. Want a feature that isn’t there? Think something should be changed? Want to help build this world? Then get in touch and let’s talk.</p>' // @todo link to contact

  , registered:
'          <div class="message">' +
'            <h3>Right now, Looptopia is just empty space</h3> ' +
// '            <h3>You have entered Looptopia</h3> ' +
// '            <p>This is a young planet. The landscape is bare at the moment, waiting to be filled with music.</p> ' +
// '            <p>Take a look around and keep an eye out for signs of life. Rumour has it of rhythmical rock forms, melodic plant life, and a curious species born to boogie.</p>' +
// '            <p>Take a look around if you like, but there are no signs of life yet. Rumour has it that rhythmical rock forms will be uncovered on Friday 5th September.</p>' +
// '            <p style="text-align:center; font-weight:bold;">Drag to look around. Click to move.</p>' +
'            <p style="text-align:center;">A silent landscape is due to appear tomorrow, Tuesday&nbsp;2nd&nbsp;September.</p>' +
'          </div>' +
'          <iframe src="http://loop.coop/empty-space.html" width="100%" height="450px" style="width:100%; height:450px; border-radius:30px; overflow:hidden; border-width:0;"></iframe>'


  , changelog: [
        '+ home@0.0.1-1      create ‘home’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ home@0.0.2        mock-merge into develop/looptopia@0.1.3-9; '
      , '+ home@0.0.4        move `AccountsTemplates` homeRoutePath config to ‘account’; '
    ]
};
