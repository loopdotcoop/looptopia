if (Meteor.isClient) {


    /**********************************************************
    IEWebGL support routines
    You can copy, use, modify, distribute this file.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS

    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
    FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    **********************************************************/

    MSIEWebGLHelper = {

        'GetGLContext': function (cnv, attributes) {
            var ctxNames = ["webgl", "experimental-webgl"];
            var glCtx = null;
            try {
                for (var i = 0; i < ctxNames.length && glCtx == null; ++i)
                    glCtx = cnv.getContext(ctxNames[i], attributes);
            }
            catch (e) { }
            return glCtx;
        },

        'CreateNativeCanvas': function (element, id, replace) {
            var cnv = document.createElement("canvas");
            if (replace) {
                if (element.attributes.width) cnv.width = element.attributes.width.value;
                if (element.attributes.height) cnv.height = element.attributes.height.value;
                if (element.attributes.style) cnv.style.cssText = element.attributes.style.value;
                element.parentNode.replaceChild(cnv, element);
            }
            else {
                element.appendChild(cnv);
            }

            cnv.innerHTML = "Your browser does not support &lt;canvas&gt; tag.";
            cnv.id = id;
            return cnv;
        },

        'CreatePluginCanvas': function (element, id, replace) {
            var obj = document.createElement("object");

            if (replace) {
                if (element.attributes.width) obj.width = element.attributes.width.value;
                if (element.attributes.height) obj.height = element.attributes.height.value;
                if (element.attributes.style) obj.style.cssText = element.attributes.style.value;
                element.parentNode.replaceChild(obj, element);
            }
            else {
                element.appendChild(obj);
            }

            var altMessage = 'To get WebGL support, please <a href="http://iewebgl.com/download/latest/">download</a> and install IEWebGL plugin and refresh the page.';
            if (obj.innerHTML) {
                obj.innerHTML = altMessage;
            }
            else { /* IE8 workaround */
                obj.altHtml = altMessage;
            }
            
            obj.id = id;
            obj.type = "application/x-webgl";
            return obj;
        },

        'CreateGLCanvas': function (el, id, replace) {
            if (navigator.userAgent.indexOf("MSIE") >= 0) {
                var usePlugin;
                try {
                    usePlugin = WebGLRenderingContext.hasOwnProperty('iewebgl');
                } catch (e) {
                    usePlugin = true;
                }

                if (usePlugin) {
                    return MSIEWebGLHelper.CreatePluginCanvas(el, id, replace);
                }
                else {
                    return MSIEWebGLHelper.CreateNativeCanvas(el, id, replace);
                }
            }
            else {
                return MSIEWebGLHelper.CreateNativeCanvas(el, id, replace);
            }
        },

        'CreateGLContext': function (element, id, replace, attributes) {

            var cnv = MSIEWebGLHelper.CreateGLCanvas(element, id, replace);
            var gl = MSIEWebGLHelper.GetGLContext(cnv, attributes);

            return gl;
        },

        'CreateGLCanvasInline': function (id) {
            var placeHolder = document.getElementById("WebGLCanvasCreationScript");
            MSIEWebGLHelper.CreateGLCanvas(placeHolder, id, true);
        }

    }



//     runWebGLTest = function () {
//           var detailCounter = 0;
      
//       function getParam(str){
//         return ctx.getParameter(str);
//       }
      
//       function addLine(tableID, name, value){
//         console.log(tableID, name, value);
//         // if(typeof(value) === "object" && value !== null){
          
//         //   var temp = '';
//         //   for(var i = 0; i < value.length; i++){
//         //     temp += value[i];
//         //     if(i < value.length-1){
//         //       temp += ', ';
//         //     }
//         //   }
//         //   value = temp;
//         // }

//         // var table = getTag(tableID);

//         // var tr = document.createElement('tr');
//         // var tdName = document.createElement('td');
//         // tdName.setAttribute('class', 'left');
        
//         // var tdValue = document.createElement("td");
        
//         // // Highlight every other line to make reading a bit easier
//         // if(detailCounter%2 === 0){
//         //   tr.style.background = '#CCC';
//         // }
//         // detailCounter++;
          
//         // tdName.innerHTML += name;
//         // tdValue.innerHTML += value;
        
//         // tr.appendChild(tdName);
//         // tr.appendChild(tdValue);        
//         // table.appendChild(tr);
//       }
      
//       function getTag(str){
//         return document.getElementById(str);
//       }
      
//       function commasToBr(s){
//         var str = '';
//         for(i in s){
//          str += s[i] + '<br />';
//         }
//         return str;
//       }
      
//       var cvs = document.createElement('canvas');
//       var contextNames = ['webgl','experimental-webgl','moz-webgl','webkit-3d'];
//       var ctx;

//       if(navigator.userAgent.indexOf('MSIE') >= 0) {
//         console.log(1);
//         try{
//           ctx = MSIEWebGLHelper.CreateGLContext(cvs, 'canvas');
//          }catch(e){}
//       }
//       else{
//         for(var i = 0; i < contextNames.length; i++){
//           try{
//             ctx = cvs.getContext(contextNames[i]);
//             if(ctx){
//               addLine('tab','Context Name', contextNames[i]);
//               break;
//             }
//           }catch(e){}
//         }
//       }
    
//       addLine( 'doesIt', 'Summary', (ctx ? 'yes' : 'no') );
      
//       addLine('tab','Platform', navigator.platform);
//       addLine('tab','Agent', navigator.userAgent);

//       if(ctx){
//         addLine('tab','Vendor', getParam(ctx.VENDOR));
//         addLine('tab','Version', getParam(ctx.VERSION));
//         addLine('tab','Renderer', getParam(ctx.RENDERER));
//         addLine('tab','Shading Language Version', getParam(ctx.SHADING_LANGUAGE_VERSION));
//         detailCounter = 0;
        
//         addLine('bits', 'RGBA Bits', getParam(ctx.RED_BITS) + ', ' + getParam(ctx.GREEN_BITS) + ', ' + getParam(ctx.BLUE_BITS) + ', ' + getParam(ctx.ALPHA_BITS));
//         addLine('bits', 'Depth Bits', getParam(ctx.DEPTH_BITS));
        
//         addLine('shader','Max Vertex Attribs', getParam(ctx.MAX_VERTEX_ATTRIBS));
//         addLine('shader','Max Vertex Texture Image Units', getParam(ctx.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
//         addLine('shader','Max Varying Vectors', getParam(ctx.MAX_VARYING_VECTORS));        
//         addLine('shader','Max Uniform Vectors', getParam(ctx.MAX_VERTEX_UNIFORM_VECTORS));
        
//         addLine('tex', 'Max Combined Texture Image Units', getParam(ctx.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
//         addLine('tex', 'Max Texture Size', getParam(ctx.MAX_TEXTURE_SIZE));
//         addLine('tex', 'Max Cube Map Texture Size', getParam(ctx.MAX_CUBE_MAP_TEXTURE_SIZE));
//         addLine('tex', 'Num. Compressed Texture Formats', getParam(ctx.NUM_COMPRESSED_TEXTURE_FORMATS));

//         addLine('misc', 'Max Render Buffer Size', getParam(ctx.MAX_RENDERBUFFER_SIZE));
//         addLine('misc', 'Max Viewport Dimensions', getParam(ctx.MAX_VIEWPORT_DIMS));
//         addLine('misc', 'Aliased Line Width Range', getParam(ctx.ALIASED_LINE_WIDTH_RANGE));
//         addLine('misc', 'Aliased Point Size Range', getParam(ctx.ALIASED_POINT_SIZE_RANGE));
//         addLine('misc', 'Supported Extensions', ctx.getSupportedExtensions().length === 0 ? 'none' : commasToBr(ctx.getSupportedExtensions()));
//       }
//       else{
//         document.body.removeChild(document.getElementById('bits'));
//         document.body.removeChild(document.getElementById('shader'));
//         document.body.removeChild(document.getElementById('misc'));
//         document.body.removeChild(document.getElementById('tex'));
//       }

//     }

}