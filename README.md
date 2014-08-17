looptopia
=========

### A cube-shaped planet in the Loop.Coop system.




Workflow
--------

This project uses the [oe-flow](https://github.com/loopdotcoop/oe-flow) development workflow, which 
is built on [git-flow](https://github.com/nvie/gitflow/wiki) and 
[Semantic Versioning 2.0.0](http://semver.org/).




Meteor Packages
---------------

1. Remove `insecure` and `autopublish`, which should not be used in a production app:  
`$ mrt remove insecure autopublish`

2. The `accounts-password` package contains a full system for password-based authentication. In 
addition to the basic username and password-based sign-in process, it also supports email-based 
sign-in including address verification and password recovery emails:  
`$ mrt add accounts-password`

3. `standard-app-packages` should already be installed, and makes up the core Meteor stack:
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

4. `less` is the dynamic stylesheet language. All files with the ‘.less’ extension are converted to 
CSS, minified, bundled, and sent ot the client:  
`$ mrt add less`




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


