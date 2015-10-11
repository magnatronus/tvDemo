/*
 * Presenter.js
 *
 * from Original Apple example code - modfied to use XMLHttpRequest loading in rResouceLoader
 *
 */

var Presenter = {

    // The default Presenter
    defaultPresenter: function(xml) {
       if(this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            navigationDocument.pushDocument(xml);
        }
    },

    // modal presenter
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    // menu bar presenter
    menuBarItemPresenter: function(xml, ele) {
  
        var feature = ele.parentNode.getFeature("MenuBarDocument");
        if (feature) {
            var currentDoc = feature.getDocument(ele);
            if (!currentDoc) {
                feature.setDocument(xml, ele);
            }
        }
    },

 
    // document load event handler
    load: function(event) {
         console.log(event);

        var self = this,
            ele = event.target,
            templateURL = ele.getAttribute("template"),
            presentation = ele.getAttribute("presentation");

        if (templateURL) {

            self.showLoadingIndicator(presentation);

            // modified to use our XMLHttpRequest Loader
            resourceLoader.loadResource(templateURL, function(doc) {
     
                doc.addEventListener("select", self.load.bind(self));
                doc.addEventListener("highlight", self.load.bind(self));

                if (self[presentation] instanceof Function) {
                    self[presentation].call(self, doc, ele);
                } else {
                    self.defaultPresenter.call(self, doc);
                }

            });
        }
    },

    // generate doc from TVML code
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }

        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

 
    // display a loading indicator
    showLoadingIndicator: function(presentation) {
   
         if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }
        
       if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },

    // remove loading indicator
    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },

    /**
     * @description Instead of a loading a template from the server, it can stored in a property 
     * or variable for convenience. This is generally employed for templates that can be reused and
     * aren't going to change often, like a loadingIndicator.
     */
    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`
}
