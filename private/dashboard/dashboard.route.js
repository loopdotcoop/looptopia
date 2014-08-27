//// https://github.com/splendido/accounts-templates-core/tree/v0.0.12#content-protection
Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: ['dashboard']
});

Router.map(function() {
    this.route('dashboard', {
            path: '/dashboard'
        }
    );
});