Router.map(function() {
    this.route('you', {
            path: '/you'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
    this.route('you.profile', {
            path: '/you/profile'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
    this.route('you.register', {
            path: '/you/register'
        }
    );
    this.route('you.sign-in', {
            path: '/you/sign-in'
        }
    );
    this.route('you.password-forgot', {
            path: '/you/password-forgot'
        }
    );
    this.route('you.password-retrieve', {
            path: '/you/password-retrieve'
        }
    );
    this.route('you.password-reset', {
            path: '/you/password-reset'
        }
    );
    this.route('you.password-change', {
            path: '/you/password-change'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
    this.route('you.delete', {
            path: '/you/delete'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
});