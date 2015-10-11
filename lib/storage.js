/**
 * storage.js

 * a quick and dirty helper module to store temp vars while the app is running
 * should probably use somthing a bit better - but you get the idea!
 * 
 * developed by Steve Rogers (@sarmcon)
 * Oct 2015
 */
var store={};


/**
 * Exported Functions
 */
exports.get = getData;
exports.set = saveData;


/**
 * Save a value to our temp store
 * @param key
 * @param value
 */
function saveData(key, value){
	store[key] = value;
}

/**
 * Get a value to our temp store
 * @param key
 */
function getData(key){
	return store[key]||false;
}