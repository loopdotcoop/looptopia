if (Meteor.isClient) {
    Template['account.register'].rendered = function() {
        var
            $babelslug = $('#AT_field_account-babelslug')
          , placeholder = $babelslug.attr('placeholder')
          , babelslug = 'RedMouse'
        ;
        $babelslug.before('<p>' + placeholder + ' <b>' + babelslug + '</b></p>');
        $babelslug.attr('value', babelslug);
        // $('#AT_field_account-babelslug').css('border', '1px solid red');
    }
    Meteor.startup(function () {
    });
}