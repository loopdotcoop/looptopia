Looptopia
=========

### A cube-shaped planet in the Loop.Coop system.




Workflow
--------

This project uses the [oe-flow](https://github.com/loopdotcoop/oe-flow) development workflow, which 
is built on [git-flow](https://github.com/nvie/gitflow/wiki) and 
[Semantic Versioning 2.0.0](http://semver.org/).




Meteor Packages
---------------

1. `standard-app-packages` should already be installed, and makes up the core Meteor stack:
  - __meteor__          Meteor.isServer! The CSS extension handler! And so much more!
  - __webapp__          A standard Meteor app is a web app (which defines the 'main' function).
  - __logging__         It's Log! It's better than bad, it's good!
  - __deps__            Deps.autorun and friends. What's Meteor without reactivity?
  - __session__         The easiest way to get a little reactivity into your app.
  - __livedata__        DDP: Meteor's client/server protocol.
  - __mongo-livedata__  You want to keep your data somewhere? How about MongoDB?
  - __ui__              Meteor UI!
  - __spacebars__       A great template language!
  - __templating__      Turn templates into views!
  - __check__           Easy type assertions? check.
  - __underscore__      _.isUseful(true)
  - __jquery__          $(".usefulToo")
  - __random__          Life isn't always predictable.
  - __ejson__           People like being able to clone objects.
  - __reload__          We can reload the client without messing up methods in flight.
  - __autoupdate__      And update automatically when new client code is available!

2. `less` is the dynamic stylesheet language. All files with the ‘.less’ extension are converted to 
CSS, minified, bundled, and sent ot the client:  
`$ mrt add less`

3. Remove `insecure` and `autopublish`, which should not be used in a production app:  
`$ mrt remove insecure autopublish`

4. The `accounts-password` package contains a full system for password-based authentication. In 
addition to the basic username and password-based sign-in process, it also supports email-based 
sign-in including address verification and password recovery emails:  
`$ mrt add accounts-password`




Atmosphere Packages
-------------------

### `$ mrt add zurb-foundation`  

__zurb-foundation:__ 5.3.3: The most advanced responsive front-end framework in the world.  
_No dependencies._


### `$ mrt add accounts-templates-foundation`  

__accounts-templates-foundation:__ Accounts templates styled for Zurb Foundation.  
`accounts-templates-core`

__accounts-templates-core:__ Meteor sign up and sign in templates core package.  
`iron-router`
`accounts-t9n`  

__accounts-t9n:__ Translations for the meteor account's error messages.  
_No dependencies._

__iron-router:__ Routing specifically designed for Meteor.  
Note that we must run `$ mrt add iron-router` to use this directly, even though it’s been installed by `accounts-templates-core`.  
`iron-layout`

__iron-layout:__ Dynamic layouts which enable rendering dynamic templates into regions on a page.  
`blaze-layout`
`iron-dynamic-template`
`iron-core`

__blaze-layout:__ A Blaze powered layout component for dynamic rendering.  
_No dependencies._

__iron-dynamic-template:__ Dynamic templates and data contexts.  
`iron-core`

__iron-core:__ Iron namespace and utilities.  
_No dependencies._


### `$ mrt add handlebar-helpers`  

__handlebar-helpers:__ [Handlebar helpers](https://github.com/raix/Meteor-handlebar-helpers).  
_No dependencies._


### `$ mrt add jquery-datatables`  

__jquery-datatables:__ Sort, page, and filter millions of records. Reactively.  
`luma-component`

__luma-component:__ Blaze component mixins and base class.  
_No dependencies._




Changelog
---------

+                   Initial commit
+ 0.0.1-1           create ‘package.json’; add ‘Changelog’ and ‘Workflow’ sections to ‘README.md’; 
+ 0.0.1-2           improve ‘.gitignore’; 
+ 0.0.1-3           initialise Meteor:  
                    `$ mrt create tmp/looptopia` … `$ mv tmp/looptopia/.[!.]* tmp/looptopia/* ./`  
                    `$ rm -rf tmp`; 
+ 0.0.1-4           paste ‘Meteor Packages’ section into ‘README.md’ from ‘20140802-ldcore-…tryout/’; 
+ 0.0.1-5           `rm` the three default `looptopia.*` files;  add ‘client-config.js’, ‘home.html’; 
+ 0.0.1-6           replace ‘package.json’ with ‘both/config.js’; 
+ 0.0.1-7           `$ mrt add zurb-foundation; mrt add less`; follows loopdotcoop.github.io@0.1.0; 
+ 0.1.0             looptopia holding page release; 
+ 0.1.1-1           `$ mrt remove insecure autopublish`; `$ mrt add accounts-password`;  
                    `$ mrt add accounts-templates-foundation`; add ‘Meteor Packages’ to ‘README.md’;  
                    basic routing works, based on ‘20140802-ldcore-model-initial-tryout/’; 
+ 0.1.1-2           can log in and out;  
                    add `AccountsTemplates.` to ‘accounts-templates-core/…/lib/signinForm.js:301’;  
                    same fix for ‘…signinForm.js:272’; 
+ 0.1.1-3           `$ mrt add handlebar-helpers`; show ‘Sign In’ if anon user; hide accounts forms; 
+ 0.1.1-4           `{{ $.Config.name }}` in templates; ‘looptopia.less’ like loopdotcoop.github.io; 
+ 0.1.2             tidy until we enable user-registration; 
+ 0.1.3-1           fix iron-router http://stackoverflow.com/a/25409128; 
+ 0.1.3-2           `$ mrt add jquery-datatables`; 
+ 0.1.3-3           ‘Topians’ collection and very simple ‘/list-topians/’ route; 
+ 0.1.3-4           As a temporary measure, `$ mrt add coffeescript` (Meteor Packages), so that...;  
                    ‘datatable-patch.coffee’ will work as a stopgap fix of `DataTableComponent`; 
+ 0.1.3-5           reorganise as a set of nine features, plus a ‘lib’ directory; 
+ 0.1.3-6           The project can run with only the ‘about’ feature present; 
+ 0.1.3-7           all templates contain a `<tt class="x">` element; 
+ 0.1.3-8           ‘notfound’ functionality now in ‘about’; ‘utility’ feature removed; 

