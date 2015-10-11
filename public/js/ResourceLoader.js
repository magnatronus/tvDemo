/*
 * ResourceLoader.js
 * 
 * Helper to load our requested resource using XMLHttpRequest
 */


function ResourceLoader(baseurl) {
    this.BASEURL = baseurl;
}


/**
 * This will load the specified resource and then invoke the callback
 * This version uses the XMLHttpRequest method as we do not need to parse the result before using 
  * as EJS does this for us.
 */
ResourceLoader.prototype.loadResource = function(url, callback) {

    var self = this;

    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() {
        callback.call(self,templateXHR.responseXML);
    }, false);

    templateXHR.open("GET", `${self.BASEURL}` + url, true);
    templateXHR.send();
    return templateXHR;

}


