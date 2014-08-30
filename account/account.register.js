if (Meteor.isClient) {

    //// When rendering the ‘register’ form, generate a BabelSlug and show it to the user.
    Template['account.register'].rendered = function() {


        //// Clientside modification of the “How did you hear about us?” fields.
        !function () {
            var
                hacId = 'AT_field_account-hear-about-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , hatId = 'AT_field_account-hear-about-text' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $hac = $('#' + hacId)
              , $hat = $('#' + hatId)
              , hacPlaceholder = $hac.attr('placeholder')
              , select = ''
              , updateHatPlaceholder = function () {
                    var code = $hac.children(':selected').val(); // http://jsperf.com/get-selected-option-text
                    Config.account.hearAboutData.forEach(function (data) { // `forEach()` has no `break`, so we waste a few loop cycles for the sake of tidy code
                        if (data.code === code) {
                            if (data.prompt) {
                                $hat.fadeIn().attr('placeholder', data.prompt);
                            } else {
                                $hat.fadeOut().attr('placeholder', '');
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

            //// Hide the 'hear-about-text' field when the template loads.
            $hat.hide();

        }()


        //// Clientside modification of the username field.
        !function () {
            var
                $babelslug = $('#AT_field_account-babelslug')
              , placeholder = $babelslug.attr('placeholder')
            ;
            $babelslug
               .before('<p>' + placeholder + ' <b id="account-babelslug-display">...</b></p>')
               .attr('value', '...')
               .css('display', 'none')
            ;
            Meteor.call('babelslug', function (error, result) {
                $('#account-babelslug-display').text(error || result.split('_')[0]); // `result` is in the form 'RedMouse-auk3Tbt92LDv5nNSM'
                if (! error) { $babelslug.attr('value', result); }
            });
        }()

    }

}

