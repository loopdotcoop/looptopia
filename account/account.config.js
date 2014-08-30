Config.account = {
    name:         'Account'
  , slug:         'account'
  , version:      '0.0.9-2'
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
  , widgets: { // add account links to the 'registered' and 'unregistered' widget areas
        'registered': [
            { path:'/profile', name:'_username_', order:'high' } // '_username_' is a keyword recognized by ‘layout.html’
          , { path:'/', name:'Sign Out', id:'sign-out' } // 'click #sign-out' will trigger `Meteor.logout();`
        ]
      , 'unregistered': [
            { path:'/account/sign-in' , name:'Sign In'  }
          , { path:'/account/register', name:'Register' }
        ]
    }
  , hearAboutData: [ // used by ‘account.register.js’ and ‘account.profile.js’. Note that the first element will be the default.
        { code:'m', label:'Word of mouth'                                , prompt:false } // `prompt` is falsey, so the 'account-hear-about-text' field will be hidden when this is selected
      , { code:'e', label:'At a festival or party'                       , prompt:'Which one?' }
      , { code:'t', label:'Traditional media (magazines, TV, radio, etc)', prompt:'What was the article or show?' }
      , { code:'s', label:'Social media (Facebook, Twitter, etc)'        , prompt:'Where and how?' }
      , { code:'g', label:'Search engine (Google, Yahoo, etc)'           , prompt:'What were you searching for?' }
      , { code:'w', label:'Some other website'                           , prompt:'Which web page?' }
      , { code:'x', label:'...or something else completely...'           , prompt:'More details please!' }
    ]

  , changelog: [
        '+ account@0.0.1-1   create ‘account’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ account@0.0.2     mock-merge into develop/looptopia@0.1.3-9; '
      , '+ account@0.0.3-1   Update ‘AccountsTemplates’ to v0.0.21; add ‘account.password-change’ etc; '
      , '+ account@0.0.4     Ready to test ‘account’ system on modulus; '
      , '+ account@0.0.6     fix double-slash in password-reset link; fix “By clicking Register ...” links; '
      , '+ account@0.0.7-1   move ‘profile’ into ‘account’; '
      , '+ account@0.0.7-2   ‘account-hear-about’ and ‘account-babelslug’ register fields;  \n' +
        '                    when rendering the ‘register’ form, generate a BabelSlug and show it to the user;  \n' +
        '                    ensure submitted babelslug is expected; '
      , '+ account@0.0.8     need to fix ‘users/list’ before continuing babelslug work; '
      , '+ account@0.0.9-1   `account.babelslug.js:usernameCount()` prevents user records from sharing a username; '
      , '+ account@0.0.9-2   `account-hear-about-code` and `account-hear-about-text` fields;  \n' +
        '                    better display of `createdAt` field in the ‘users.list’ template; '
    ]
};


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#options
AccountsTemplates.configure({
    showPlaceholders:       true
  , showLabels:             false // was `displayFormLabels`
  , continuousValidation:   true
  , showForgotPasswordLink: true
  , enablePasswordChange:   true
  , confirmPassword:        false
  , homeRoutePath:          '/'
  , privacyUrl:             '/legal/privacy'
  , termsUrl:               '/legal/terms'
});


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#routing
AccountsTemplates.configureRoute('signUp', { // name: 'atSignUp'
    path:     'account/register',
    template: 'account.register',
    redirect: '/account/profile'
});
AccountsTemplates.configureRoute('signIn', { // name: 'atSignIn'
    path:     'account/sign-in',
    template: 'account.sign-in',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('forgotPwd', { // name: 'atForgotPwd'
    path:     'account/password-forgot',
    template: 'account.password-forgot',
    redirect: '/account/password-retrieve'
});
AccountsTemplates.configureRoute('resetPwd', { // name: 'atResetPwd' @todo test this
    path:     'account/password-reset',
    template: 'account.password-reset',
    redirect: '/'
});
AccountsTemplates.configureRoute('changePwd', { // name: 'atChangePwd'
    path:     'account/password-change',
    template: 'account.password-change',
    redirect: '/'
});


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#form-fields-configuration
AccountsTemplates.addFields([
    {
        _id: 'account-hear-about-code'
      , type: 'text'
      , displayName: "How did you hear about Loop.Coop?"
      , maxLength: 1
      , required: true
    }
  , {
        _id: 'account-hear-about-text'
      , type: 'text'
      , displayName: "More details please!"
      , maxLength: 64
    }
  , {
        _id: 'account-babelslug'
      , type: 'text'
      , displayName: "Your username will be"
      , required: true
    }
]);


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#form-fields-configuration
// @todo language 

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#setup
//// Must be run after all `AccountsTemplates.configure()` calls have been made.
Meteor.startup(function () {
    AccountsTemplates.init();
});

