if (Meteor.isClient) {

    //// After rendering the ‘sign-in’ form, focus on the ‘Email Address’ field.
    Template['you.sign-in'].rendered = function() {
        $('#AT_field_email').focus();
    }

}

