Router.map(function() {
    this.route('account.profile', {
            path: '/account/profile'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
    this.route('account.register', {
            path: '/account/register'
        }
    );
    this.route('account.sign-in', {
            path: '/account/sign-in'
        }
    );
    this.route('account.password-forgot', {
            path: '/account/password-forgot'
        }
    );
    this.route('account.password-retrieve', {
            path: '/account/password-retrieve'
        }
    );
    this.route('account.password-reset', {
            path: '/account/password-reset'
        }
    );
    this.route('account.password-change', {
            path: '/account/password-change'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
    this.route('account.delete', {
            path: '/account/delete'
          , onBeforeAction: AccountsTemplates.ensureSignedIn // https://github.com/splendido/accounts-templates-core/tree/v0.0.21#content-protection
        }
    );
});