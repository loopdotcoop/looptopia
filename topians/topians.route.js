Router.map(function() {
    this.route('topians.list', {
            path: '/topians/list'
        }
    );
    this.route('topians.edit', {
            path: '/topians/edit/:_id'
          // , data: function() {
          //       return Topians.findOne(this.params._id);
          //   }
        }
    );
});
