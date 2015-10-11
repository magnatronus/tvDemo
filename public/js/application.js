/**
 * application.js
 *
 * This is the entry point to the application and handles the initial loading of required JavaScript files.
 *
 * developed by Steve Rogers (@sarmcon)
 * Oct 2015
 */
var resourceLoader;

 /**
  * Run when the App launches
  */
 App.onLaunch = function(options){

  var javascriptFiles = [
        `${options.BASEURL}js/ResourceLoader.js`,
        `${options.BASEURL}js/Presenter.js`
  ];
  
  evaluateScripts(javascriptFiles, function(success) {

    if(success){
      resourceLoader = new ResourceLoader(options.BASEURL);
      resourceLoader.loadResource("", function(doc) {
        doc.addEventListener("select", Presenter.load.bind(Presenter));
        navigationDocument.pushDocument(doc);
      });
    } else {
      var alert = createAlert("Evaluate Scripts Error", "There was an error attempting to evaluate the external JavaScript files.\n\n Please check your network connection and try again later.");
      navigationDocument.presentModal(alert);
 
      throw ("Playback Example: unable to evaluate scripts.");
    }

  });

 }

 /**
 * This convenience function returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {  
 
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`
 
    var parser = new DOMParser();
 
    var alertDoc = parser.parseFromString(alertString, "application/xml");
 
    return alertDoc
}