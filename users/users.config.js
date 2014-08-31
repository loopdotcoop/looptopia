Config.users = {
    name:         'Users'
  , slug:         'users'
  , version:      '0.0.12'
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

  , widgets: {} // can be filled with widget areas, eg 'footer-left'

  , changelog: [
        '+ users@0.0.1-1     create ‘users’ as a feature of ‘looptopia@0.1.3-9’; '
      , '+ users@0.0.2       merge into develop/looptopia@0.1.3-9; '
      , '+ users@0.0.4       disable ‘users/list’; '
      , '+ users@0.0.6       qik fix for incomplete user records `if (! data || ! data[0]) { return "-"; }`; '
      , '+ users@0.0.8       simpler publish just using ‘DataTable’; ‘account.babelslug’ records username on register; '
      , '+ users@0.0.10      must have special email address to access ‘users.list’; '
      , '+ users@0.0.12      schema and `Meteor.users.attachSchema()` for ‘AutoForm’ in ‘account/edit’; '
    ]
};


Config.users.schemaProfile = new SimpleSchema({
    agc: { // age-group-code
        type: String
      , label: "Age group"
      , max: 1
    }
  , bic: { // based-in-code
        type: String
      , label: "Based in"
      , max: 1
    }
  , nlo: { // newsletter-opt
        type: String
      , label: "Newsletter opt-in"
      , max: 1 // 'y' for a ticked checkbox, 'n' otherwise
    }
});

Config.users.schemaEmail = new SimpleSchema({
    address: {
        type: String
      , label: "Email Address"
      , regEx: SimpleSchema.RegEx.Email
    }
});

Config.users.schema = new SimpleSchema({
    emails: {
        type: [Config.users.schemaEmail]
    }
  , profile: {
        type: Config.users.schemaProfile
    }
});



