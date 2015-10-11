/**
 * This is the router for all the TVML requests
 * Basic but functional
 *
 * developed by Steve Rogers (@sarmcon)
 * Oct 2015
 */
 var express = require('express'), 
 	router = express.Router(),
 	db = require('../lib/storage');


// Lets put some request debugging in
router.use(function (req, res, next) {
  console.log("Request--> " + req.originalUrl);
  next();
});


/**
 * Our TVML Routes
 */
router.get('/tvml/Alert.xml.js', function (req, res) {
  res.render('tvml/Alert');
});

router.get('/tvml/AlertWithDescription.xml.js', function (req, res) {
  res.render('tvml/AlertWithDescription');
});

router.get('/tvml/AlertWithShelf.xml.js', function (req, res) {
  res.render('tvml/AlertWithShelf',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Catalog.xml.js', function (req, res) {
  res.render('tvml/Catalog',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Compilation.xml.js', function (req, res) {
  res.render('tvml/Compilation',{baseURL: db.get("baseURL")});
});

router.get('/tvml/DescriptiveAlert.xml.js', function (req, res) {
  res.render('tvml/DescriptiveAlert');
});

router.get('/tvml/Form.xml.js', function (req, res) {
  res.render('tvml/Form');
});

router.get('/tvml/ListItemExamples.xml.js', function (req, res) {
  res.render('tvml/ListItemExamples',{baseURL: db.get("baseURL")});
});

router.get('/tvml/ListWithBanner.xml.js', function (req, res) {
  res.render('tvml/ListWithBanner',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Loading.xml.js', function (req, res) {
  res.render('tvml/Loading');
});

router.get('/tvml/Main.xml.js', function (req, res) {
  res.render('tvml/Main',{baseURL: db.get("baseURL")});
});

router.get('/tvml/MenuBar.xml.js', function (req, res) {
  res.render('tvml/MenuBar',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Parade.xml.js', function (req, res) {
  res.render('tvml/Parade', {baseURL: db.get("baseURL")});
});

router.get('/tvml/Product.xml.js', function (req, res) {
  res.render('tvml/Product',{baseURL: db.get("baseURL")});
});

router.get('/tvml/ProductBundle.xml.js', function (req, res) {
  res.render('tvml/ProductBundle',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Rating.xml.js', function (req, res) {
  res.render('tvml/Rating');
});

router.get('/tvml/Search.xml.js', function (req, res) {
  res.render('tvml/Search',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Stack.xml.js', function (req, res) {
  res.render('tvml/Stack',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Stack_DarkTheme.xml.js', function (req, res) {
  res.render('tvml/Stack_DarkTheme',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Stack_LightTheme.xml.js', function (req, res) {
  res.render('tvml/Stack_LightTheme',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Stack_Room.xml.js', function (req, res) {
  res.render('tvml/Stack_Room',{baseURL: db.get("baseURL")});
});

router.get('/tvml/Stack_Separator.xml.js', function (req, res) {
  res.render('tvml/Stack_Separator',{baseURL: db.get("baseURL")});
});


/**
 * And Our Default Route
 */
router.get('/', function (req, res) {
  
  // record the application base URL here
  db.set("baseURL", req.protocol + '://' + req.get('host'));
  console.log("setting the baseURL: " + db.get("baseURL"));

  res.render('tvml/index',{baseURL: db.get("baseURL")});
});

// export
module.exports = router