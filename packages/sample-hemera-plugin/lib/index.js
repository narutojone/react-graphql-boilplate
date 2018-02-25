module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Hp = __webpack_require__(1);
const HemeraJoi = __webpack_require__(2);
exports.options = {
    name: __webpack_require__(3).name,
};
exports.plugin = Hp(hemeraCounter, '>=2.0.0-0');
function hemeraCounter(hemera, opts, done) {
    const topic = 'counter';
    hemera.add({
        topic,
        cmd: 'add',
    }, (req, cb) => {
        cb(null, req.a + req.b);
    });
    done();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("hemera-plugin");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("hemera-joi");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"@sample-stack/hemera-counter","version":"0.0.0","description":"This is Container Configuration Service hemera plugin","main":"lib/index.js","scripts":{"jest":"./node_modules/.bin/jest","test":"ENV=test ENV_FILE=../../config/development/dev.env jest","test:debug":"npm test -- --runInBand","test:watch":"npm test -- --watch","prepublish":"npm run build","watch":"npm run build:lib:watch","build":"npm run build:clean && npm run build:lib","build:clean":"rimraf lib","build:lib":"webpack","build:lib:watch":"npm run build:lib -- --watch"},"publishConfig":{"access":"public"},"jest":{"testEnvironment":"node","roots":["src"],"modulePaths":["node_modules"],"moduleFileExtensions":["ts","tsx","js","json"],"transform":{"\\.(ts|tsx)$":"<rootDir>/../../node_modules/ts-jest/preprocessor.js"},"testRegex":"/__tests__/.*test*\\.(ts|tsx|js)$"},"engines":{"node":">=4.0.0"},"author":"","license":"MIT","dependencies":{"@sample-stack/utils":"*"},"peerDependencies":{"nats-hemera":"1.x","hemera-plugin":"0.x","hemera-joi":"1.x"},"devDependencies":{"cross-env":"^5.0.5","jest":"^21.1.0","rimraf":"^2.6.1","webpack":"^3.7.1"}}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map