Router.configure({
    layoutTemplate: 'layout' // can be any template name
  , notFoundTemplate: 'notfound' // catchall 404 https://github.com/EventedMind/iron-router#route-options
});

//// https://github.com/splendido/accounts-templates-core/tree/v0.0.12#content-protection
Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: ['profile', 'dashboard']
});

Router.map(function() {
    this.route('home', {
            path: '/'
        }
    );
    // this.route('about'  );
    // this.route('contact');
    this.route('terms'  );
    this.route('privacy');

    this.route('profile', {
            path: '/profile'
          // , onBeforeAction: function () {
          //       // AccountsEntry.signInRequired(this); // https://github.com/Differential/accounts-entry#ensuring-signed-in-users-for-routes
          //   }
        }
    );

    this.route('dashboard', {
            path: '/dashboard'
          // , onBeforeAction: function () {
          //       // AccountsEntry.signInRequired(this);
          //   }
        }
    );

    // this.route('listUsers', {
    //         path: '/list-users'
    //       , onBeforeAction: function () {
    //             AccountsEntry.signInRequired(this);
    //         }
    //     }
    // );

});