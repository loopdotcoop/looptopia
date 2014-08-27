//// Under oe-flow, ‘about/about.config.js’ describes the project as a whole, not the ‘about’ feature itself. 
//// The project can run with only the ‘about’ feature present, but it will not run without it.
//// The global `Config` object is defined here. Other features add to it, eg `Config.foobar = { ... }`. 
//// It is important that data in `Config.about` is synchronized with the top-level ‘README.md’ in every commit. 

Config = {
    about: {
        name:         'Looptopia'
      , slug:         'looptopia' // equivalent to the `'name'` field in ‘package.json’ 
      , initials:     'lta'
      , version:      '0.1.3-8'
      , description:  'A cube-shaped planet in the Loop.Coop system.' // no more than 255 characters
      , keywords:     'Brighton, art, music, immersive, app, game, cooperative, party, festival'
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
      , changelog: [
            '+                   Initial commit'
          , '+ 0.0.1-1           create ‘package.json’; add ‘Changelog’ and ‘Workflow’ sections to ‘README.md’; '
          , '+ 0.0.1-2           improve ‘.gitignore’; '
          , '+ 0.0.1-3           initialise Meteor:  \n' +
            '                    `$ mrt create tmp/looptopia` … `$ mv tmp/looptopia/.[!.]* tmp/looptopia/* ./`  \n' +
            '                    `$ rm -rf tmp`; '
          , '+ 0.0.1-4           paste ‘Meteor Packages’ section into ‘README.md’ from ‘20140802-ldcore-…tryout/’; '
          , '+ 0.0.1-5           `rm` the three default `looptopia.*` files;  add ‘client-config.js’, ‘home.html’; '
          , '+ 0.0.1-6           replace ‘package.json’ with ‘both/config.js’; '
          , '+ 0.0.1-7           `$ mrt add zurb-foundation; mrt add less`; follows loopdotcoop.github.io@0.1.0; '
          , '+ 0.1.0             looptopia holding page release; '
          , '+ 0.1.1-1           `$ mrt remove insecure autopublish`; `$ mrt add accounts-password`;  \n' +
            '                    `$ mrt add accounts-templates-foundation`; add ‘Meteor Packages’ to ‘README.md’;  \n' +
            '                    basic routing works, based on ‘20140802-ldcore-model-initial-tryout/’; '
          , '+ 0.1.1-2           can log in and out;  \n' +
            '                    add `AccountsTemplates.` to ‘accounts-templates-core/…/lib/signinForm.js:301’;  \n' +
            '                    same fix for ‘…signinForm.js:272’; '
          , '+ 0.1.1-3           `$ mrt add handlebar-helpers`; show ‘Sign In’ if anon user; hide accounts forms; '
          , '+ 0.1.1-4           `{{ $.Config.name }}` in templates; ‘looptopia.less’ like loopdotcoop.github.io; '
          , '+ 0.1.2             tidy until we enable user-registration; '
          , '+ 0.1.3-1           fix iron-router http://stackoverflow.com/a/25409128; '
          , '+ 0.1.3-2           `$ mrt add jquery-datatables`; '
          , '+ 0.1.3-3           ‘Topians’ collection and very simple ‘/list-topians/’ route; '
          , '+ 0.1.3-4           As a temporary measure, `$ mrt add coffeescript` (Meteor Packages), so that...;  \n' +
            '                    ‘datatable-patch.coffee’ will work as a stopgap fix of `DataTableComponent`; '
          , '+ 0.1.3-5           reorganise as a set of nine features, plus a ‘lib’ directory; '
          , '+ 0.1.3-6           the project can run with only the ‘about’ feature present; '
          , '+ 0.1.3-7           all templates contain a `<tt class="x">` element; '
          , '+ 0.1.3-8           ‘notfound’ functionality now in ‘about’; ‘utility’ feature removed; '

        ]
    }
}

Router.configure({
    notFoundTemplate: 'about.not-found' // catchall 404 https://github.com/EventedMind/iron-router#route-options
});
