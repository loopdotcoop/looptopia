Router.configure({
    layoutTemplate: 'layout' // can be any template name
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

    // this.route('userProfile', {
    //         path: '/profile'
    //       , onBeforeAction: function () {
    //             AccountsEntry.signInRequired(this); // https://github.com/Differential/accounts-entry#ensuring-signed-in-users-for-routes
    //         }
    //     }
    // );

    // this.route('userDashboard', {
    //         path: '/dashboard'
    //       , onBeforeAction: function () {
    //             AccountsEntry.signInRequired(this);
    //         }
    //     }
    // );

    // this.route('listUsers', {
    //         path: '/list-users'
    //       , onBeforeAction: function () {
    //             AccountsEntry.signInRequired(this);
    //         }
    //     }
    // );
});