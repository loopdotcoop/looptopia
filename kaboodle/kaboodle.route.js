Router.map(function() {
    this.route('kaboodle', {
            path: '/kaboodle'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
});