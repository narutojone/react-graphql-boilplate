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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(3));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sampleReducers_1 = __webpack_require__(2);
exports.reducers = Object.assign({}, sampleReducers_1.reducers);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isSaving(state = false, action) {
    switch (action.type) {
        case '@@sample-stack/SAVE_COUNT_REQUEST':
            return true;
        case '@@sample-stack/SAVE_COUNT_SUCCESS':
        case '@@sample-stack/SAVE_COUNT_ERROR':
            return false;
        default:
            return state;
    }
}
function isLoading(state = false, action) {
    switch (action.type) {
        case '@@sample-stack/LOAD_COUNT_REQUEST':
            return true;
        case '@@sample-stack/LOAD_COUNT_SUCCESS':
        case '@@sample-stack/LOAD_COUNT_ERROR':
            return false;
        default:
            return state;
    }
}
function error(state = '', action) {
    switch (action.type) {
        case '@@sample-stack/LOAD_COUNT_REQUEST':
        case '@@sample-stack/SAVE_COUNT_REQUEST':
            return '';
        case '@@sample-stack/LOAD_COUNT_ERROR':
        case '@@sample-stack/SAVE_COUNT_ERROR':
            return action.error.toString();
        default:
            return state;
    }
}
const initialState = {
    value: 0,
};
function counter(state = initialState, action) {
    switch (action.type) {
        case '@@sample-stack/INCREMENT_COUNTER':
            const { delta } = action;
            return { value: state.value + delta };
        case '@@sample-stack/RESET_COUNTER':
            return { value: 0 };
        case '@@sample-stack/LOAD_COUNT_SUCCESS':
            return { value: action.response.value };
        default:
            return state;
    }
}
exports.reducers = {
    '@sample-stack/counter': counter,
    '@sample-stack/isSaving': isSaving,
    '@sample-stack/isLoading': isLoading,
    '@sample-stack/error': error,
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(5);
exports.incrementCounter = (delta) => ({
    type: '@@sample-stack/INCREMENT_COUNTER',
    delta,
});
exports.resetCounter = () => ({
    type: '@@sample-stack/RESET_COUNTER',
});
const _saveCount = {
    request: (request) => ({ type: '@@sample-stack/SAVE_COUNT_REQUEST', request }),
    success: (response, request) => ({ type: '@@sample-stack/SAVE_COUNT_SUCCESS', request, response }),
    error: (error, request) => ({ type: '@@sample-stack/SAVE_COUNT_ERROR', request, error }),
};
const _loadCount = {
    request: (request) => ({ type: '@@sample-stack/LOAD_COUNT_REQUEST', request: null }),
    success: (response, request) => ({ type: '@@sample-stack/LOAD_COUNT_SUCCESS', request: null, response }),
    error: (error, request) => ({ type: '@@sample-stack/LOAD_COUNT_ERROR', request: null, error }),
};
function apiActionGroupFactory(x, go) {
    return (request) => (dispatch) => {
        dispatch(x.request(request));
        go(request)
            .then((response) => dispatch(x.success(response, request)))
            .catch((e) => dispatch(x.error(e, request)));
    };
}
exports.saveCount = apiActionGroupFactory(_saveCount, api_1.api.save);
exports.loadCount = apiActionGroupFactory(_loadCount, api_1.api.load);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const flakify = (f) => new Promise((resolve, reject) => window.setTimeout(() => {
    try {
        if (Math.random() < 0.2) {
            throw new Error('Failed arbitrarily');
        }
        resolve(f());
    }
    catch (e) {
        return reject(e);
    }
}, 200 + Math.random() * 2000));
exports.api = {
    save: (counter) => flakify(() => {
        localStorage.setItem('__counterValue', counter.value.toString());
        return null;
    }),
    load: () => flakify(() => {
        const value = parseInt(localStorage.getItem('__counterValue'), 10);
        return { value };
    }),
};


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map