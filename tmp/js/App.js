/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/***** START BOILERPLATE CODE: Load client library, authorize user. *****/\n\n// Global variables for GoogleAuth object, auth status.\nvar GoogleAuth;\n\n/**\n * Load the API's client and auth2 modules.\n * Call the initClient function after the modules load.\n */\n\nfunction handleClientLoad() {\n  gapi.load('client:auth2', initClient);\n}\n\nfunction initClient() {\n  // Initialize the gapi.client object, which app uses to make API requests.\n  // Get API key and client ID from API Console.\n  // 'scope' field specifies space-delimited list of access scopes\n\n  gapi.client.init({\n    'clientId': 'REPLACE_ME',\n    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],\n    'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'\n  }).then(function () {\n    GoogleAuth = gapi.auth2.getAuthInstance();\n\n    // Listen for sign-in state changes.\n    GoogleAuth.isSignedIn.listen(updateSigninStatus);\n\n    // Handle initial sign-in state. (Determine if user is already signed in.)\n    setSigninStatus();\n\n    // Call handleAuthClick function when user clicks on \"Authorize\" button.\n    $('#execute-request-button').click(function () {\n      handleAuthClick(event);\n    });\n  });\n}\n\nfunction handleAuthClick(event) {\n  // Sign user in after click on auth button.\n  GoogleAuth.signIn();\n}\n\nfunction setSigninStatus() {\n  var user = GoogleAuth.currentUser.get();\n  isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');\n  // Toggle button text and displayed statement based on current auth status.\n  if (isAuthorized) {\n    defineRequest();\n  }\n}\n\nfunction updateSigninStatus(isSignedIn) {\n  setSigninStatus();\n}\n\nfunction createResource(properties) {\n  var resource = {};\n  var normalizedProps = properties;\n  for (var p in properties) {\n    var value = properties[p];\n    if (p && p.substr(-2, 2) == '[]') {\n      var adjustedName = p.replace('[]', '');\n      if (value) {\n        normalizedProps[adjustedName] = value.split(',');\n      }\n      delete normalizedProps[p];\n    }\n  }\n  for (var p in normalizedProps) {\n    // Leave properties that don't have values out of inserted resource.\n    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {\n      var propArray = p.split('.');\n      var ref = resource;\n      for (var pa = 0; pa < propArray.length; pa++) {\n        var key = propArray[pa];\n        if (pa == propArray.length - 1) {\n          ref[key] = normalizedProps[p];\n        } else {\n          ref = ref[key] = ref[key] || {};\n        }\n      }\n    };\n  }\n  return resource;\n}\n\nfunction removeEmptyParams(params) {\n  for (var p in params) {\n    if (!params[p] || params[p] == 'undefined') {\n      delete params[p];\n    }\n  }\n  return params;\n}\n\nfunction executeRequest(request) {\n  request.execute(function (response) {\n    console.log(response);\n  });\n}\n\nfunction buildApiRequest(requestMethod, path, params, properties) {\n  params = removeEmptyParams(params);\n  var request;\n  if (properties) {\n    var resource = createResource(properties);\n    request = gapi.client.request({\n      'body': resource,\n      'method': requestMethod,\n      'path': path,\n      'params': params\n    });\n  } else {\n    request = gapi.client.request({\n      'method': requestMethod,\n      'path': path,\n      'params': params\n    });\n  }\n  executeRequest(request);\n}\n\n/***** END BOILERPLATE CODE *****/\n\nfunction defineRequest() {\n  // See full sample for buildApiRequest() code, which is not\n  // specific to a particular API or API method.\n\n  buildApiRequest('GET', '/youtube/v3/videos', { 'id': 'Ks-_Mh1QhMc',\n    'part': 'snippet,contentDetails,statistics' });\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });