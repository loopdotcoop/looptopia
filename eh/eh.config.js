Config.eh = {
    name:         'Eh?!'
  , slug:         'eh'
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
            { path:'/eh?!', name:'Eh?!', tmpt:'eh', icon:'cbh-thought-bubble', title:'About this sneak preview' }
        ]
      , 'eh': [
        ]
      , 'gear': [
            { path:'/eh?!', name:'Eh?!', tmpt:'eh', icon:'cbh-thought-bubble', title:'About this sneak preview' }
        ]
    }

  , changelog: [
        '+ wisdom@0.0.1-1  `init-wisdom` feature of ‘looptopia@0.2.3-2’; '
      , '+ eh@0.0.2        change ‘wisdom’ to ‘eh’; '
    ]
  , version: '0.0.2'
}
