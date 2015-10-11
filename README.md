# tvDemo Introduction

**tvDemo** is a test project (written with NodeJS, ExpressJS and EJS) for the new Apple tvOS. This is actually a modification to the demo code that Apple uses to give an overview of the template functionality of tvOS. I thought the best way to get to grips with it was to try using other technologies to create a duplicate app, and though nowwhere near perfect, it does appear to work and I do like the user of EJS to render the TVML templates.


## Prerequisites
Yo will need  the latest (at the moment - 11 Oct 2015)) beta of XCode 7.1 as well as this project if you want to run the code and see what it does (though you don't need a physical developer kit to run the app as XCode has a simulator).

You should create a simple Swift (or ObjC) tvOS app project (as explained in the developer docs) and then just set the following to connect to the server when it is running:

```
    static let TVBaseURL = "http://localhost:9001/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"
 
```

Setting tvBaseURL to wherever the Node server is running.

