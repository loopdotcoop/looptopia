//// https://github.com/splendido/accounts-templates-core#configuration
AccountsTemplates.configure({
    //these are the default values
    showPlaceholders: true
  , displayFormLabels: false
  , continuousValidation: true
  , showForgotPasswordLink: true
});

//// https://github.com/splendido/accounts-templates-core#routing
AccountsTemplates.configure({
    homeRoutePath:         '/'
  , signInRoutePath:       '/sign-in'
  , signInRouteName:       'sign-in' // default is 'signIn'
  , signInRouteTemplate:   'sign-in'
  , postSignInRoutePath:   '/dashboard'
  , signUpRoutePath:       '/register'
  , signUpRouteName:       'register' // default is 'signUpPage'
  , signUpRouteTemplate:   'register'
  , postSignUpRoutePath:   '/profile'
  , forgotPwdRoutePath:    '/forgot'
  , forgotPwdRouteName:    'forgot'
  , forgotPwdRouteTemplate:'forgot'
});

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.12#signup-fields-customization
// @todo language 

//// https://github.com/splendido/accounts-templates-core#setup
AccountsTemplates.init();