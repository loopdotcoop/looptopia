if (Meteor.isServer) {
    var

        //// A lookup-table whose keys are generated each time an ‘you.register’ form is rendered using the `babelslug()` method.
        //// The key is a babelslug, followed by hyphen, followed by a Meteor connection ID (like a session ID for anon users).
        //// The value is the unix timestamp in milliseconds, which allows us to clear out old and unused babelslugs.
        //// Two examples are shown here:
        recentBabelslugs = { // @todo for a multi-servo project, move this functionality to a shared mongoDB collection
            // 'MagentaMouse-KukNJw4d4vjGzzrQa': 1409341347912,
            // 'BlueChessCat-YYJWMWTPq7RFWdKr6': 1409341399283
        }


        //// Clear out stale elements in the `recentBabelslugs` lookup-table.
      , recentBabelslugsHousekeeping = function () {
            var key
              , now = Date.now()
            ;
            for (key in recentBabelslugs) {
                if (15 * 60 * 1000 < now - recentBabelslugs[key]) { // allow a user 15 minutes to fill in the registration form
                    delete recentBabelslugs[key];
                }
            }
        }


        //// Check how many times a given `username` exists in the user database. If all’s well, this should only ever return `0` or `1`.
      , usernameCount = function (username) {
            return Meteor.users.find({ 'profile.username': username }).count();
        }


        //// BabelSlug, from Rich Plastow’s work, 2014-02-09.
      , ucs2 = [
            [ // animal
                { en:'slug'  ,es:'babosa'    ,ru:'\u0441\u043B\u0438\u0437\u043D\u044F\u043A',fr:'limace'    ,zh:'\u86DE\u8753',ar:'\u064A\u0631\u0642\u0627\u0646\u0629' }
              , { en:'mouse' ,es:'rat\u00F3n',ru:'\u043C\u044B\u0448\u044C'                  ,fr:'souris'    ,zh:'\u9F20\u6807',ar:'\u0641\u0623\u0631'                   }
              , { en:'cow'   ,es:'vaca'      ,ru:'\u043A\u043E\u0440\u043E\u0432\u0430'      ,fr:'vache'     ,zh:'\u725B'      ,ar:'\u0628\u0642\u0631\u0629'             }
              , { en:'cat'   ,es:'gato'      ,ru:'\u043A\u043E\u0448\u043A\u0430'            ,fr:'chat'      ,zh:'\u732B'      ,ar:'\u0642\u0637'                         }
              , { en:'rabbit',es:'conejo'    ,ru:'\u043A\u0440\u043E\u043B\u0438\u043A'      ,fr:'lapin'     ,zh:'\u5154'      ,ar:'\u0623\u0631\u0646\u0628'             }
              , { en:'deer'  ,es:'ciervo'    ,ru:'\u043E\u043B\u0435\u043D\u044C'            ,fr:'cerf'      ,zh:'\u9E7F'      ,ar:'\u0623\u064A\u0644'                   }
              , { en:'bear'  ,es:'oso'       ,ru:'\u043C\u0435\u0434\u0432\u0435\u0434\u044C',fr:'ours'      ,zh:'\u718A'      ,ar:'\u062F\u064F\u0628\u0651'             }
              , { en:'frog'  ,es:'rana'      ,ru:'\u043B\u044F\u0433\u0443\u0448\u043A\u0430',fr:'grenouille',zh:'\u9752\u86D9',ar:'\u0636\u0641\u062F\u0639'             }
            ]
          // , [ // texture
          //       { en:'-'      ,es:'-'       ,ru:'-'                                                ,fr:'-'             ,zh:'-'          ,ar:'-'                        }
          //     , { en:'dotted' ,es:'punteado',ru:[1087,1091,1085,1082,1090,1080,1088,1085,1099,1081],fr:'pointill\u00E9',zh:[26001,28857],ar:[1605,1606,1602,1591]      }
          //     , { en:'striped',es:'rayas'   ,ru:[1087,1086,1083,1086,1089,1072,1090,1099,1081]     ,fr:'ray\u00E9'     ,zh:[26465,32441],ar:[1605,1602,1604,1605]      }
          //     , { en:'chess'  ,es:'ajedrez' ,ru:[1096,1072,1093,1084,1072,1090,1099]               ,fr:'\u00E9checs'   ,zh:[26827]      ,ar:[1588,1591,1585,1606,1580] }
          //   ]
          , [ // color1
                { en:'-'      ,es:'-'       ,ru:'-'                                           ,fr:'-'      ,zh:'-'          ,ar:'-'                                            }
              , { en:'red'    ,es:'rojo'    ,ru:[1082,1088,1072,1089,1085,1099,1081]          ,fr:'rouge'  ,zh:[32418]      ,ar:[1571,1581,1605,1585]                          }
              , { en:'orange' ,es:'naranja' ,ru:[1086,1088,1072,1085,1078,1077,1074,1099,1081],fr:'orange' ,zh:[27225]      ,ar:[1575,1604,1576,1585,1578,1602,1575,1604,1610] }
              , { en:'yellow' ,es:'amarillo',ru:[1078,1077,1083,1090,1099,1081]               ,fr:'jaune'  ,zh:[40644]      ,ar:[1571,1589,1601,1585]                          }
              , { en:'green'  ,es:'verde'   ,ru:[1079,1077,1083,1077,1085,1099,1081]          ,fr:'vert'   ,zh:[32511]      ,ar:[1571,1582,1590,1585]                          }
              // , { en:'cyan'   ,es:'cian'    ,ru:[1075,1086,1083,1091,1073,1086,1081]          ,fr:'cyan'   ,zh:[38738]      ,ar:[1587,1605,1575,1608,1610]                     }
              , { en:'blue'   ,es:'azul'    ,ru:[1089,1080,1085,1080,1081]                    ,fr:'bleu'   ,zh:[34013]      ,ar:[1571,1586,1585,1602]                          }
              , { en:'purple' ,es:'magenta' ,ru:[1087,1091,1088,1087,1091,1088,1085,1099,1081],fr:'magenta',zh:[27915,32418],ar:[1571,1585,1580,1608,1575,1606,1610]           } // @todo translate purple (these are for magenta)
            ]
          , [ // emotion @todo convert remaining languages from 2014-Work/BabelSlug/README.md
                { en:'-'        ,es:'-'          ,fr:'-'          }
              , { en:'happy'    ,es:'feliz'      ,fr:'heureux'    }
              // , { en:'sad'      ,es:'triste'     ,fr:'triste'     }
              , { en:'laughing' ,es:'risa'       ,fr:'rire'       }
              , { en:'sleepy'   ,es:'soñoliento' ,fr:'somnolent'  }
              , { en:'surprised',es:'sorprendido',fr:'étonné'     }
              // , { en:'playful'  ,es:'juguetón'   ,fr:'espiègle'   }
              , { en:'confused' ,es:'confundido' ,fr:'embrouillé' }
            ]
        ]

        //// Prepare an empty cache, which may contain HTML entities converted from `ucs2`, if required.
      , html = (function () {
            var i, j, l, m ,html = {};
            for (i=0, l=ucs2.length; i<l; i++) {
                html[i] = [];
                for (j=0, m=ucs2[i].length; j<m; j++) {
                    html[i][j] = {};
                }
            }
            return html
        } ())

// !!!! `numberToPhrase()`, then `i` becomes `num`, and then `ucs2` becomes an array, and `i` is iterator !!!!
      , numberToPhrase = function (number, options) {
            var key, len, rem, word
              , num    = ~~(number < 0 ? -number : number) // ensure `num` is a positive whole number, or zero
              , opt    = options || {}
              , l18n   = ucs2[0][0][opt.l18n] ? opt.l18n   : 'en'   // set to English if the localization option is invalid or unspecified
              , phrase = []
            ;
            for (key in ucs2) {
                len = ucs2[key].length;
                rem = num % len;
                if (! opt.format || 'ucs2' === opt.format) {
                    word = ucs2[key][rem][l18n];
// console.log('key ' + key + ' format ' + 'ucs2' + ' word ' + word);
                } else if ('html' === opt.format) {
                    word = html[key][rem][l18n];
                    if (! word) {
                        word = html[key][rem][l18n] = ucs2[key][rem][l18n].replace(/[\u00A0-\u2666]/g, function(c) {
                            return '&#' + c.charCodeAt(0) + ';';
                        });
// console.log('ADD TO CACHE key ' + key + ' format ' + 'html' + ' word ' + word);
                    } else {
// console.log('GET IN CACHE key ' + key + ' format ' + 'html' + ' word ' + word);
                    }
                } else {
                    // @todo format error
                }

                if ('-' !== word) { phrase.unshift(word); }
                num = ~~(num / len); // prepare for the next part in `ucs2`
                if (0 === num) { break; } // low numbers don't need to step through every section in `ucs2`
            }
            return phrase.join('-');
        }
    ;




    Meteor.methods({

        babelslug: function () {
            var i, key, babelslug;
            if (this.isSimulation) { return; } // clientside stub (return value is ignored)

            //// Housekeeping on the `recentBabelslugs` lut.
            recentBabelslugsHousekeeping();

            //// Try, 200 times, to find a username which has not been taken. @todo this is quite brute-force ... can we come up with a more elegant solution?
            for (i=200; i>0; i--) {
                babelslug = numberToPhrase( Math.floor(Math.random() * 50000) );
                if ( 3 === babelslug.split('-').length && ! recentBabelslugs[babelslug] && ! usernameCount(babelslug) ) { break; } // we are only using three-part usernames at present
            }
            if (! i) { throw new Meteor.Error(500, "Cannot generate a username! Please email " + Config.about.webmaster); } // @todo check `(! i)` can ever be truthy
            recentBabelslugs[babelslug] = { // later, when the form is submitted, we will check that the babelslug value is expected
                now: Date.now() // allows `recentBabelslugsHousekeeping()` to find stale babelslugs
              , cid: this.connection.id
            }
            return babelslug + '_' + this.connection.id; // @todo is `this.connection.id` ever some unexpected value, for example `null`?
        }

    });




    Accounts.onCreateUser(function (options, user) {

        var babelslug, connectionId;

        //// Housekeeping on the `recentBabelslugs` lut.
        recentBabelslugsHousekeeping();

        //// Validate the value of `<input id="AT_field_you-babelslug" ...>`.
        babelslug    = options.profile['you-babelslug'].split('_')[0];
        connectionId = options.profile['you-babelslug'].split('_')[1];
        if (! babelslug || ! connectionId) {
            throw new Meteor.Error(500, "The ‘username’ field is invalid."); // @todo better error-code than 500?
        }
        if (! recentBabelslugs[babelslug]) {
            throw new Meteor.Error(500, "Your registration form expired after 15 minutes. Please refresh the browser and try again."); // The ‘username’ value is unexpected, so this may actually be a hack attempt
        }
        if ( usernameCount(babelslug) ) {
            throw new Meteor.Error(500, "The ‘username’ is already in use."); // prevent two `Meteor.user` records having the same username, which could happen on a multi-servo project, until we change `recentBabelslugs` to a shared mongoDB collection @todo
        }

        //// Remove the babelslug, as it’s not needed any more.
        delete recentBabelslugs[babelslug];

        //// Record the username (‘info@loop.coop’ gets a special username).
        options.profile = options.profile || {};
        options.profile.username = 'info@loop.coop' === options.email ? 'red-cat' : babelslug;

        //// Record other registration data.
        if (options.profile['you-age-group-code'])  { options.profile.agc = options.profile['you-age-group-code'];  }
        if (options.profile['you-based-in-code'])   { options.profile.bic = options.profile['you-based-in-code'];   }
        if (options.profile['you-hear-about-code']) { options.profile.hac = options.profile['you-hear-about-code']; }
        if (options.profile['you-hear-about-text']) { options.profile.hat = options.profile['you-hear-about-text']; }
        if (options.profile['you-newsletter-opt'])  { options.profile.nlo = options.profile['you-newsletter-opt']; }

        //// The registration is valid, so record it as usual. http://docs.meteor.com/#accounts_oncreateuser
        user.profile = options.profile;
        return user;

    });

}
