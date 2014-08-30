if (Meteor.isClient) {

    //// When rendering the ‘register’ form, generate a BabelSlug and show it to the user.
    Template['account.register'].rendered = function() {


        //// Clientside modification of the “Age group” field, converting it from `<input type="text">` to `<select>`. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var
                agcId = 'AT_field_account-age-group-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $agc = $('#' + agcId)
              , placeholder = $agc.prop('placeholder')
              , select = ''
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + agcId + '" name="' + agcId + '">\n';
            Config.account.ageGroupData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the heading and dropdown menu.
            $agc
               .before('<p>' + placeholder + '</p>\n' + select)
               .remove()
            ;
            $agc = $('#' + agcId); // make `$agc` a reference to the new dropdown menu @todo do we need this now?

        }()


        //// Clientside modification of the “Based in” field, converting it from `<input type="text">` to `<select>`. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var
                bicId = 'AT_field_account-based-in-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $bic = $('#' + bicId)
              , placeholder = $bic.prop('placeholder')
              , select = ''
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + bicId + '" name="' + bicId + '">\n';
            Config.account.basedInData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the heading and dropdown menu.
            $bic
               .before('<p>' + placeholder + '</p>\n' + select)
               .remove()
            ;
            $bic = $('#' + bicId); // make `$bic` a reference to the new dropdown menu @todo do we need this now?

        }()


        //// Clientside modification of the “How did you hear about us?” fields.
        !function () {
            var
                hacId = 'AT_field_account-hear-about-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , hatId = 'AT_field_account-hear-about-text' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $hac = $('#' + hacId)
              , $hat = $('#' + hatId)
              , hacPlaceholder = $hac.prop('placeholder')
              , select = ''
              , updateHatPlaceholder = function () {
                    var code = $hac.children(':selected').val(); // http://jsperf.com/get-selected-option-text
                    Config.account.hearAboutData.forEach(function (data) { // `forEach()` has no `break`, so we waste a few loop cycles for the sake of tidy code
                        if (data.code === code) {
                            if (data.prompt) {
                                $hat.fadeIn().prop('placeholder', data.prompt);
                            } else {
                                $hat.fadeOut().prop('placeholder', '');
                            }
                        }
                    });
                }
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + hacId + '" name="' + hacId + '">\n';
            Config.account.hearAboutData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the heading and dropdown menu.
            $hac
               .before('<p>' + hacPlaceholder + '</p>\n' + select)
               .remove()
            ;
            $hac = $('#' + hacId); // make `$hac` a reference to the new dropdown menu

            //// Update the 'hear-about-text' placeholder text every time the 'hear-about-code' dropdown changes.
            $hac.on('change', updateHatPlaceholder);

            //// Hide the 'hear-about-text' field when the Template loads.
            $hat.hide();

        }()


        //// Clientside modification of the username field.
        !function () {
            var
                $babelslug = $('#AT_field_account-babelslug')
              , placeholder = $babelslug.prop('placeholder')
            ;
            $babelslug
               .before('<p>' + placeholder + ' <b id="account-babelslug-display">...</b></p>')
               .prop('value', '...')
               .css('display', 'none')
            ;
            Meteor.call('babelslug', function (error, result) {
                $('#account-babelslug-display').text(error || result.split('_')[0]); // `result` is in the form 'RedMouse-auk3Tbt92LDv5nNSM'
                if (! error) { $babelslug.prop('value', result); }
            });
        }()


        //// Clientside addition to the “Newsletter Opt” field, hiding it and adding a `<checkbox>` controller. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var $nloDesc, $nloCheck
                nloId = 'AT_field_account-newsletter-opt'
              , $nloText = $('#' + nloId)
              , placeholder = $nloText.prop('placeholder')
              , updateNloText = function () {
                    $nloText.prop( 'value', $nloCheck.prop('checked') ? 'y' : 'n' );
                }
            ;

            //// Hide the simple text-field, and show the description and checkbox.
            $nloText
               .before('<p id="' + nloId + '-description">' + placeholder + '</p>\n<input type="checkbox" id="' + nloId + '-check">')
               // .css('display', 'none')
            ;
            $nloDesc  = $('#' + nloId + '-description'); // a reference to the new description
            $nloCheck = $('#' + nloId + '-check'); // a reference to the new checkbox

            //// Update the 'newsletter-opt' text-field every time the checkbox changes, and also when the Template loads.
            $nloCheck.on('change', updateNloText); // 'change' catches check/uncheck events however they are triggered, not just using the mouse
            updateNloText();

            //// Toggle the checkbox every time the description is clicked, to simulate the behaviour of a label.
            $nloDesc.on('click', function () {
                $nloCheck.prop('checked', ! $nloCheck.prop('checked') ); // the `!` does the toggle
                $nloCheck.trigger('change'); // let all interested parties know that the checkbox has changed
            });

        }()

    }

}

