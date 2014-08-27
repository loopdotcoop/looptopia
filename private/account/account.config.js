Config.account = {
    name:         'Account'
  , slug:         'account'
  , version:      '0.0.1-2'
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
        '+ 0.0.1-1           create ‘account’ as a feature of ‘looptopia@0.1.3-5’; '
    ]
};


//// https://github.com/splendido/accounts-templates-core#configuration
AccountsTemplates.configure({
    //these are the default values
    showPlaceholders: true
  , displayFormLabels: false
  , continuousValidation: true
  , showForgotPasswordLink: true
});

//// https://github.com/splendido/accounts-templates-core#routing
//// More routes can be added elsewhere in the app, eg:
////     postSignInRoutePath: '/dashboard'
////     postSignUpRoutePath: '/profile'
AccountsTemplates.configure({
    signInRoutePath:       '/account/sign-in'
  , signInRouteName:       'account.sign-in' // default is 'signIn'
  , signInRouteTemplate:   'account.sign-in'

  , signUpRoutePath:       '/account/register'
  , signUpRouteName:       'account.register' // default is 'signUpPage'
  , signUpRouteTemplate:   'account.register'

  , forgotPwdRoutePath:    '/account/forgot'
  , forgotPwdRouteName:    'account.forgot'
  , forgotPwdRouteTemplate:'account.forgot'
});

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.12#signup-fields-customization
// @todo language 

//// https://github.com/splendido/accounts-templates-core#setup
//// Must be run after all `AccountsTemplates.configure()` calls have been made.
Meteor.startup(function () {
    AccountsTemplates.init();
});
