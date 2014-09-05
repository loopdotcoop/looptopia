if (Meteor.isClient) {

    //// When rendering the ‘register’ form, generate a BabelSlug and show it to the user.
    Template['you.register'].rendered = Template['you.profile'].rendered = function() { // @todo better solution to this quick fix

        //// Focus on the ‘Email Address’ field.
        $('#AT_field_email').focus();


        //// Place the ‘email’ and ‘password’ fields next to each other for desktop screen widths, and improve placeholder text.
        !function () {
            var
                $eml = $('#AT_field_email')
              , $pwd = $('#AT_field_password')
              , $emlPa = $eml.parent()
              , $pwdPa = $pwd.parent()
              , $pwdRow = $emlPa.parent()
            ;

            //// Fix columns.
            $emlPa.removeClass('large-12').addClass('large-6');
            $pwdPa.removeClass('large-12').addClass('large-6').insertAfter($emlPa);
            $eml.prop('placeholder', 'Enter your Email');
            $pwd.prop('placeholder', 'Choose a password');

        }()


        //// Modify the username field.
        !function () {
            var
                $babelslug = $('#AT_field_you-babelslug')
              , placeholder = $babelslug.prop('placeholder')
            ;
            $babelslug
               .before('<p class="pre-username">' + placeholder + ':</p><h2 id="you-babelslug-display">...</h2>')
               .prop('value', '...')
               .css('display', 'none')
            ;
            Meteor.call('babelslug', function (error, result) {
                $('#you-babelslug-display').text(error || result.split('_')[0]); // `result` is in the form 'RedMouse-auk3Tbt92LDv5nNSM'
                if (! error) { $babelslug.prop('value', result); } // using `attr()` instead of `prop()` would allow you to ‘Inspect Element’ the value attribute
            });
        }()


        //// Modify the “Age group” field, converting it from `<input type="text">` to `<select>`. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var
                agcId = 'AT_field_you-age-group-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $agc = $('#' + agcId)
              , placeholder = $agc.prop('placeholder')
              , select = ''
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + agcId + '" name="' + agcId + '">\n';
            Config.you.ageGroupData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the dropdown menu.
            $agc
               .before('<div class="select-box">\n' + select + '</div>')
               .remove()
            ;
            $agc = $('#' + agcId); // make `$agc` a reference to the new dropdown menu @todo do we need this now?

        }()


        //// Modify the “Based in” field, converting it from `<input type="text">` to `<select>`. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var
                bicId = 'AT_field_you-based-in-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $bic = $('#' + bicId)
              , placeholder = $bic.prop('placeholder')
              , select = ''
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + bicId + '" name="' + bicId + '">\n';
            Config.you.basedInData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the dropdown menu.
            $bic
               .before('<div class="select-box">\n' + select + '</div>')
               .remove()
            ;
            $bic = $('#' + bicId); // make `$bic` a reference to the new dropdown menu @todo do we need this now?

        }()


        //// Modify the “How did you hear about us?” fields.
        !function () {
            var
                hacId = 'AT_field_you-hear-about-code' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , hatId = 'AT_field_you-hear-about-text' // in `<input id="x" name="y" ... >`, "x" and "y" are expected to be identical
              , $hac = $('#' + hacId)
              , $hat = $('#' + hatId)
              , hacPlaceholder = $hac.prop('placeholder')
              , select = ''
              , updateHatPlaceholder = function () {
                    var code = $hac.children(':selected').val(); // http://jsperf.com/get-selected-option-text
                    Config.you.hearAboutData.forEach(function (data) { // `forEach()` has no `break`, so we waste a few loop cycles for the sake of tidy code
                        if (data.code === code) {
                            if (data.prompt) {
                                $hat.fadeIn().focus().prop('placeholder', data.prompt);
                            } else {
                                $hat.fadeOut().prop('placeholder', '');
                            }
                        }
                    });
                }
            ;

            //// Build HTML for the dropdown menu.
            select += '<select id="' + hacId + '" name="' + hacId + '">\n';
            Config.you.hearAboutData.forEach(function (data) {
                select += '  <option value="' + data.code + '">' + data.label + '</option>\n';
            });
            select += '</select>\n';

            //// Replace the simple text-field with the dropdown menu.
            $hac
               .before('<div class="select-box">\n' + select + '</div>')
               .remove()
            ;
            $hac = $('#' + hacId); // make `$hac` a reference to the new dropdown menu

            //// Update the 'hear-about-text' placeholder text every time the 'hear-about-code' dropdown changes.
            $hac.on('change', updateHatPlaceholder);

            //// Hide the 'hear-about-text' field when the Template loads.
            $hat.hide();

        }()


        //// Modify the “Newsletter Opt” field, hiding it and adding a `<checkbox>` controller. @todo simplify this when https://github.com/splendido/accounts-templates-core/ adds the 'select' type
        !function () {
            var $nloDesc, $nloCheck
                nloId = 'AT_field_you-newsletter-opt'
              , $nloText = $('#' + nloId)
              , placeholder = $nloText.prop('placeholder')
              , updateNloText = function () {
                    $nloText.prop( 'value', $nloCheck.prop('checked') ? 'y' : 'n' );
                }
            ;

            //// Hide the simple text-field, and show the description and checkbox.
            $nloText
               .before('<div class="newsletter-opt  columns  large-8 large-offset-2  medium-8 medium-offset-2"><input type="checkbox" id="' + nloId + '-check"><p id="' + nloId + '-description">' + placeholder + '</p></div>')
               .css('display', 'none')
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


        //// Modify the ‘Privacy Policy’ and ‘Terms of Use’ links. https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
        !function () {
            $('.at-agreement a[href*="legal/privacy"]')
               .prop('target', '_blank')
               .prop('title', 'Read the ' + Config.about.organization + ' privacy policy')
            ;
            $('.at-agreement a[href*="legal/terms"]')
               .prop('target', '_blank')
               .prop('title', 'Read the ' + Config.about.organization + ' terms of use')
            ;
        }()

    }

}

