if (Meteor.isClient) {

    //// When rendering the ‘register’ form, generate a BabelSlug and show it to the user.
    Template['account.register'].rendered = function() {
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
    }

}

