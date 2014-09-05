if (Meteor.isClient) {

    //// Show current alert text, eg WebGL errors.
    Template.layout.helpers({
        hasWebGL: function () {
            var ctx, i
              , cvs = document.createElement('canvas')
              , contextNames = ['webgl','experimental-webgl','moz-webgl','webkit-3d'];
            ;
            if ( 0 <= navigator.userAgent.indexOf('MSIE') ) {
                try {
                    ctx = MSIEWebGLHelper.CreateGLContext(cvs, 'canvas');
                } catch (e) { }
            } else {
                for (i=0; i<contextNames.length; i++) {
                    try {
                        ctx = cvs.getContext(contextNames[i]);
                        if (ctx) {
                            console.log('WebGL context: ', contextNames[i]);
                            break;
                        }
                    } catch (e) { }
                }
            }
            return !! ctx; // convert to boolean
        }
    });

}
