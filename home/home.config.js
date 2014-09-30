Config.home = {
    name:         'Home'
  , slug:         'home'
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

  , unregistered:
'          <h3>Thanks for visiting Looptopia</h3>' +
'          <p>Looptopia is a strange and beautiful web app where you can immerse yourself in an otherworldly musical experience.</p> ' +
'          <p>New features are being added regularly, new characters are arriving, and more and more of the environment is being unlocked. We’re keen to open up a dialogue about Looptopia from the beginning. Want a feature that isn’t there? Think something should be changed? Want to help build this world? Then <a target="_blank" href="https://twitter.com/loopdotcoop">get in touch</a> and let’s talk.</p>' // @todo link to feedback form

  , registered:
'          <div class="instructions">' +
// '            <h3>Right now, Looptopia is just empty space</h3> ' +
'            <h3>You have entered Looptopia</h3> ' +
'            <p>This is a young planet. The landscape is bare at the moment, with just a few rhythmical rock-forms scattered here and there.</p> ' +
// '            <p>Take a look around and keep an eye out for signs of life. Rumour has it of rhythmical rock forms, melodic plant life, and a curious species born to boogie.</p>' +
'            <p>To explore the stony beats, <b>drag to look around, and click to move.</b></p>' +
// '            <p style="text-align:center;">A silent landscape is due to appear tomorrow, Tuesday&nbsp;2nd&nbsp;September.</p>' +
'          </div>'
// '          <iframe src="http://loop.coop/empty-space.html" width="100%" height="450px" style="width:100%; height:450px; border-radius:30px; overflow:hidden; border-width:0;"></iframe>'


  , changelog: [
        '+ home@0.0.1-1      create ‘home’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ home@0.0.2        mock-merge into develop/looptopia@0.1.3-9; '
      , '+ home@0.0.4        move `AccountsTemplates` homeRoutePath config to ‘account’; '
    ]
  , version:   '0.0.4'
};
