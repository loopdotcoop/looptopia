Config.account = {
    name:         'Account'
  , slug:         'account'
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
  , widgets: { // add account links to the 'registered', 'unregistered', and 'dashboard' widget areas
        'registered': [
            { path:'/account/profile' , name:'_username_'   , title:'Edit your profile', icon:'cbh-user'  , order:'high' } // '_username_' is a keyword recognized by ‘layout.html’
          , { path:'/'                , name:'Sign&nbsp;Out', title:'Sign Out'         , icon:'cbh-logout', id:'sign-out' } // 'click #sign-out' will trigger `Meteor.logout();`
        ]
      , 'unregistered': [
            { path:'/account/register', name:'Register'     , title:'Register'         , icon:'cbh-feather' }
          , { path:'/account/sign-in' , name:'Sign&nbsp;In' , title:'Sign In'          , icon:'cbh-login' }
        ]
        //// http://zurb.com/playground/foundation-icons
      , 'dashboard': [
            { path:'/account/profile' , name:'Profile'      , title:'Edit your profile', icon:'cbh-user' } 
        ]
    }

    //// `ageGroupData`, `basedInData`, and `hearAboutData` are used by ‘account.register.js’ and ‘account.profile.js’. Note that the first element in each is the default.
  , ageGroupData: [
        { code:'' , label:'What’s your age group?' } // the `required: true` configuration can detect that the `<select>` has not been changed, because this `code` is an empty string
      , { code:'c', label:'Under 8'  } // codes step through the alphabet in threes, in case we want finer granuality later on
      , { code:'f', label:'8 to 15'  }
      , { code:'i', label:'16 or 17' }
      , { code:'l', label:'18 to 25' }
      , { code:'o', label:'26 to 40' }
      , { code:'r', label:'41 to 65' }
      , { code:'u', label:'Over 65'  }
      , { code:'x', label:'Don’t be nosey' }
    ]
  , basedInData: [ // used by ‘account.register.js’ and ‘account.profile.js’. Note that the first element will be the default.
        { code:'' , label:'Where are you based?' } // the `required: true` configuration can detect that the `<select>` has not been changed, because this `code` is an empty string
      , { code:'b', label:'Brighton and Hove' }
      , { code:'s', label:'Elsewhere in Sussex'  }
      , { code:'l', label:'London' }
      , { code:'u', label:'Elsewhere in the UK' }
      , { code:'e', label:'Elsewhere on planet Earth' }
      , { code:'x', label:'Don’t be nosey' }
    ]
  , hearAboutData: [ // used by ‘account.register.js’ and ‘account.profile.js’. Note that the first element will be the default.
        { code:'' , label:'How did you hear about us?'         , prompt:false }
      , { code:'m', label:'Word of mouth'                      , prompt:false } // `prompt` is falsey, so the 'account-hear-about-text' field will be hidden when this is selected
      , { code:'e', label:'At a festival or party'             , prompt:'Which one?' }
      , { code:'t', label:'Traditional media (print, TV, etc)' , prompt:'Whereabouts, exactly?' }
      , { code:'s', label:'Social media (Twitter, etc)', prompt:'Where and how?' }
      , { code:'g', label:'Search engine (Google, etc)'        , prompt:'What were you searching for?' }
      , { code:'w', label:'Some other website'                 , prompt:'Which web page?' }
      , { code:'z', label:'...or something else...'            , prompt:'More details please!' }
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
      , '+ account@0.0.9-3   `account-age-group` field; ‘Age’ column in ‘users.list’; '
      , '+ account@0.0.9-4   `account-based-in` field; ‘Based In’ column in ‘users.list’; '
      , '+ account@0.0.9-5   `account-newsletter-opt` field; ‘Opt’ column in ‘users.list’; '
      , '+ account@0.0.10    ‘register’ form is working well; ‘account.babelslug.js’ renamed ‘account.create-user.js’; '
      , '+ account@0.0.11-1  fix ‘/profile/’ to ‘/account/profile/’; move ‘layout.template.js()’ to ‘about.helper.js’; '
      , '+ account@0.0.11-2  `$ mrt add collection2` to allow access to `attachSchema()`;  \n' +
        '                    ‘account/profile’ functional and styled; ‘account/delete’ functional and styled; '
      , '+ account@0.0.12    all forms in a box like dashboard; back to dashboard after saving profile; '
    ]
  , version:      '0.0.12'
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
  , privacyUrl:             'http://loop.coop/legal/privacy.html'
  , termsUrl:               'http://loop.coop/legal/terms.html'
});


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#routing
AccountsTemplates.configureRoute('signUp', { // name: 'atSignUp'
    path:     'account/register',
    template: 'account.register',
    redirect: '/dashboard'
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
    redirect: '/account/profile'
});


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#form-fields-configuration
AccountsTemplates.addFields([
    {
        _id: 'account-babelslug'
      , type: 'text'
      , displayName: "Your username will be"
      , required: true
    }
  , {
        _id: 'account-age-group-code'
      , type: 'text'
      , displayName: "Age group"
      , maxLength: 1
      , required: true
    }
  , {
        _id: 'account-based-in-code'
      , type: 'text'
      , displayName: "Based in"
      , maxLength: 1
      , required: true
    }
  , {
        _id: 'account-hear-about-code'
      , type: 'text'
      , maxLength: 1
    }
  , {
        _id: 'account-hear-about-text'
      , type: 'text'
      , displayName: "..."
      , maxLength: 64
    }
  , {
        _id: 'account-newsletter-opt'
      , type: 'text'
      , displayName: "Newsletter opt-in"
      , placeholder: "Tick here to receive Email invitations to Loop.Coop parties."
      , maxLength: 1 // 'y' for a ticked checkbox, 'n' otherwise
      , required: true // jQuery in ‘account.register.js’ will hide this field, and then fill it according to the state of a dynamically-added checkbox
    }
]);


//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#form-fields-configuration
// @todo language 

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.21#setup
//// Must be run after all `AccountsTemplates.configure()` calls have been made.
Meteor.startup(function () {
    AccountsTemplates.init();
});

