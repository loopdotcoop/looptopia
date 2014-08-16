var app = {
    'version':  '0.0.1-5'
  , 'name':     'Looptopia'
  , 'slug':     'looptopia'
  , 'short':    'ltia'
  , 'summary':  'A cube-shaped planet in the Loop.Coop system.' // no more than 255 characters
  , 'keywords': 'Brighton, art, music, immersive, app, game, cooperative, party, festival'
  , 'author':   'Loop.Coop <info@loop.coop>'
  , 'year':     '2014'
  , 'type':     'website' // http://ogp.me/#types
  , 'url':      'http://looptopia.loop.coop/'
}

UI.registerHelper('app', function (key) {
    return app[key];
});

