Config.account = {
    name:         'Account'
  , slug:         'account'
  , version:      '0.0.3-1'
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
            { path:'/', name:'Sign Out', id:'sign-out', order:'high' } // 'click #sign-out' will trigger `Meteor.logout();`
        ]
      , 'unregistered': [
            { path:'/account/sign-in' , name:'Sign In'  }
          , { path:'/account/register', name:'Register' }
        ]
    }
  , changelog: [
        '+ 0.0.1-1           create ‘account’ as a feature of ‘looptopia@0.1.3-5’; '
      , '+ account@0.0.2     mock-merge into develop/looptopia@0.1.3-9; '
      , '+ account@0.0.3-1   Update ‘AccountsTemplates’ to v0.0.21; add ‘account.password-change’ etc; '
    ]
};


//// https://github.com/splendido/accounts-templates-core#configuration
AccountsTemplates.configure({
    //these are the default values
    showPlaceholders: true        // unchanged in CONFIG_PAT
  , showLabels: false             // was `displayFormLabels`
  , continuousValidation: true    // unchanged in CONFIG_PAT
  , showForgotPasswordLink: true  // unchanged in CONFIG_PAT
  , enablePasswordChange: true
});

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#routing
AccountsTemplates.configureRoute('signUp', { // name: 'atSignUp'
    path: '/account/register',
    template: 'account.register',
    redirect: '/profile'
});
AccountsTemplates.configureRoute('signIn', { // name: 'atSignIn'
    path: '/account/sign-in',
    template: 'account.sign-in',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('forgotPwd', { // name: 'atForgotPwd'
    path: '/account/password-forgot',
    template: 'account.password-forgot',
    redirect: '/account/password-retrieve'
});
AccountsTemplates.configureRoute('resetPwd', { // name: 'atResetPwd' @todo test this
    path: '/account/password-reset',
    template: 'account.password-reset',
    redirect: '/'
});
AccountsTemplates.configureRoute('changePwd', { // name: 'atChangePwd'
    path: '/account/password-change',
    template: 'account.password-change',
    redirect: '/'
});

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#form-fields-configuration
// @todo language 

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#setup
//// Must be run after all `AccountsTemplates.configure()` calls have been made.
Meteor.startup(function () {
    AccountsTemplates.init();
});

