Config.layout = {
    name:         'Layout'
  , slug:         'layout'
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
  , changelog: [
        '+ layout@0.0.1-1    create ‘layout’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ layout@0.0.2      mock-merge into develop/looptopia@0.1.3-9; '
      , '+ layout@0.0.3-1    `#iframe` fills screen; `#iframe-blocker.active` dims iframe and catches mouse events; '
      , '+ layout@0.0.3-2    `#iframe-blocker` active on all but the home page;  \n' +
        '                    dismiss a popup (actually a route) by clicking anywhere on the background; '
      , '+ layout@0.0.4      Loop.Coop logo at top of every page; hide full twitter-id on mobile; '
      , '+ layout@0.1.1-1    combine ‘#banner’ and ‘#header’ into a CSS table with id ‘#ldc-header’; '
      , '+ layout@0.1.1-2    ‘/you’ icon shows current user BabelSlug animal; '
    ]
  , version:     '0.1.1-2'
};

Router.configure({
    layoutTemplate: 'layout' // can be any template name
});

