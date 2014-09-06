//// Under oe-flow, ‘about/about.config.js’ describes the project as a whole, not the ‘about’ feature itself. 
//// The project can run with only the ‘about’ feature present, but it will not run without it.
//// The global `Config` object is defined here. Other features add to it, eg `Config.foobar = { ... }`. 
//// It is important that data in `Config.about` is synchronized with the top-level ‘README.md’ in every commit. 

Config = {
    about: {
        name:         'Looptopia'
      , slug:         'looptopia' // equivalent to the `'name'` field in ‘package.json’ 
      , initials:     'lta'
      , description:  'A cube-shaped planet in the Loop.Coop system.' // no more than 255 characters
      , keywords:     'Brighton, art, music, immersive, app, game, cooperative, party, festival'
      , scripts: {
            test:     'echo \'Error: no test specified\' && exit 1'
        }
      , organization: 'Loop.Coop'
      , author:       'Rich Plastow <info@loop.coop>'
      , webmaster:    'info@loop.coop'
      , year:         '2014'
      , license:      'GPL v2'
      , type:         'website' // http://ogp.me/#types
      , url:          'http://looptopia.loop.coop/'
      , contributors: [
            'Beth Walker <info@loop.coop>'
        ]

      , widgets: {} // can be filled with widget areas, eg 'footer-left'

      , changelog: [
            '+                        Initial commit'
          , '+ looptopia@0.0.1-1      create ‘package.json’; add ‘Changelog’ and ‘Workflow’ sections to ‘README.md’; '
          , '+ looptopia@0.0.1-2      improve ‘.gitignore’; '
          , '+ looptopia@0.0.1-3      initialise Meteor:  \n' +
            '                         `$ mrt create tmp/looptopia` … `$ mv tmp/looptopia/.[!.]* tmp/looptopia/* ./`  \n' +
            '                         `$ rm -rf tmp`; '
          , '+ looptopia@0.0.1-4      paste ‘Meteor Packages’ section into ‘README.md’ from ‘20140802-ldcore-…tryout/’; '
          , '+ looptopia@0.0.1-5      `rm` the three default `looptopia.*` files;  add ‘client-config.js’, ‘home.html’; '
          , '+ looptopia@0.0.1-6      replace ‘package.json’ with ‘both/config.js’; '
          , '+ looptopia@0.0.1-7      `$ mrt add zurb-foundation; mrt add less`; follows loopdotcoop.github.io@0.1.0; '
          , '+ looptopia@0.1.0        looptopia holding page release; '
          , '+ looptopia@0.1.1-1      `$ mrt remove insecure autopublish`; `$ mrt add accounts-password`;  \n' +
            '                         `$ mrt add accounts-templates-foundation`; add ‘Meteor Packages’ to ‘README.md’;  \n' +
            '                         basic routing works, based on ‘20140802-ldcore-model-initial-tryout/’; '
          , '+ looptopia@0.1.1-2      can log in and out;  \n' +
            '                         add `AccountsTemplates.` to ‘accounts-templates-core/…/lib/signinForm.js:301’;  \n' +
            '                         same fix for ‘…signinForm.js:272’; '
          , '+ looptopia@0.1.1-3      `$ mrt add handlebar-helpers`; show ‘Sign In’ if anon user; hide accounts forms; '
          , '+ looptopia@0.1.1-4      `{{ $.Config.name }}` in templates; ‘looptopia.less’ like loopdotcoop.github.io; '
          , '+ looptopia@0.1.2        tidy until we enable user-registration; '
          , '+ looptopia@0.1.3-1      fix iron-router http://stackoverflow.com/a/25409128; '
          , '+ looptopia@0.1.3-2      `$ mrt add jquery-datatables`; '
          , '+ looptopia@0.1.3-3      ‘Topians’ collection and very simple ‘/list-topians/’ route; '
          , '+ looptopia@0.1.3-4      As a temporary measure, `$ mrt add coffeescript` (Meteor Packages), so that...;  \n' +
            '                         ‘datatable-patch.coffee’ will work as a stopgap fix of `DataTableComponent`; '
          , '+ looptopia@0.1.3-5      reorganise as a set of nine features, plus a ‘lib’ directory; '
          , '+ looptopia@0.1.3-6      the project can run with only the ‘about’ feature present; '
          , '+ looptopia@0.1.3-7      all templates contain a `<tt class="x">` element; '
          , '+ looptopia@0.1.3-8      ‘notfound’ functionality now in ‘about’; ‘utility’ feature removed; '
          , '+ looptopia@0.1.3-9      widget areas, eg `{ path:"/", name:"Sign Out", id:"sign-out", order:"high" }`; '
          , '+ looptopia@0.1.4        all features at version 0.0.2; '
          , '+ looptopia@0.1.5-1      bump after release 0.1.4; '
          , '+ looptopia@0.1.6        ready to test ‘account’ system on modulus; '
          , '+ looptopia@0.1.8-fix.1  fix double-slash in password-reset link; '
          , '+ looptopia@0.1.8-fix.2  fix “By clicking Register ...” links; '
          , '+ looptopia@0.1.8-fix.3  disable ‘users/list’; '
          , '+ looptopia@0.1.8-fix.4  don’t show ‘About This Project’ on 404 page; '
          , '+ looptopia@0.1.8        ok for live server, up until 1st Sept; '
          , '+ looptopia@0.1.9-1      BabelSlug for username; need to prevent user records from sharing a username; '
          , '+ looptopia@0.1.9-2      ‘account.register’ form is functional and styled; '
          , '+ looptopia@0.1.10       Proper registration, and ‘users.list’ is protected; '
          , '+ looptopia@0.1.11-1     ‘account/profile’ and ‘account/delete’ work; “September 1st” text removed; '
          , '+ looptopia@0.1.11-2     remove ‘legal’ feature; hard-coded links to ‘http://loop.coop/legal/*’; '
          , '+ looptopia@0.1.11-3     move `widgets` helper from ‘layout.template.js’ to ‘about.helper.js’; '
          , '+ looptopia@0.1.11-4     use `widgets` in ‘dashboard.html’; '
          , '+ looptopia@0.1.11-5     styled `widgets` in ‘dashboard.html’; '
          , '+ looptopia@0.1.11-6     `activeIfTemplateIs` helper gives ‘/dashboard’ link the `active` class; '
          , '+ looptopia@0.1.11-7     redirect to dashboard after register; dismiss dashboard to return to ‘/’ home; '
          , '+ looptopia@0.1.11-8     explanatory message as dashboard widget; ‘Launch Party’ dashboard icon; '
          , '+ looptopia@0.1.12       explanatory message on homepage for unregistered users;  \n' +
            '                         registered users see `<iframe src="http://loop.coop/empty-space.html" ...>`; '
          , '+ looptopia@0.2.0        September 1st empty-space release; '
          , '+ looptopia@0.2.1-1      bump after release 0.2.0; improve ‘/dashboard’; '
          , '+ looptopia@0.2.1-2      ‘layout’ amends: iframe and iframe-blocker, Loop.Coop logo at top of every page; '
          , '+ looptopia@0.2.2        `<iframe ... src="http://aahdesoot-22112.onmodulus.net/">` ; new instructions; '
          , '+ looptopia@0.2.3-1      switch from Zurb Foundation icons to fontello; '
          , '+ looptopia@0.2.3-2      all ‘popups’ (which are actually pages) have a ‘dismiss’ button; '
          , '+ looptopia@0.2.4        various UI tweaks and renamed features; '
          , '+ looptopia@0.2.6        redone release; '
          , '+ looptopia@0.2.7-1      serverside `Config.about` has `env` field, which equals `NODE_ENV` at startup; '
          , '+ looptopia@0.2.8        “No WebGL” alert, and don’t render the `<iframe>`; '
          , '+ looptopia@0.2.10       always render the `<iframe>`; '
          , '+ looptopia@0.2.12       must have webgl enabled to render the `<iframe>`, same as looptopia@0.2.8; '
        ]
      , version:        '0.2.12'
    }
}

//// 'development' on localhost, 'production' on modulus.
if ('object' === typeof process) { Config.about.env = process.env.NODE_ENV; } // @todo is this ever used?


Router.configure({
    notFoundTemplate: 'about.not-found' // catchall 404 https://github.com/EventedMind/iron-router#route-options
});

