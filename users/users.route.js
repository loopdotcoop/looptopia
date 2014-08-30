Router.map(function() {
    this.route('users.list', {
            path: '/users/list' // permissions are checked in the template
        }
    );
});