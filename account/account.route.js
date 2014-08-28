//// https://github.com/splendido/accounts-templates-core/tree/v0.0.12#content-protection
Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: ['account.password-change']
});

Router.map(function() {
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
        }
    );
});