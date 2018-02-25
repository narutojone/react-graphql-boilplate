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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
__export(__webpack_require__(5));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@sample-stack/graphql-gql");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(6));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
class CounterComponent extends React.Component {
    constructor() {
        super(...arguments);
        this._onClickIncrement = (e) => {
            e.preventDefault();
            this.props.increment(1);
        };
        this._onClickSave = (e) => {
            e.preventDefault();
            if (!this.props.isSaving) {
                this.props.save(this.props.counter.value);
            }
        };
        this._onClickLoad = (e) => {
            e.preventDefault();
            if (!this.props.isLoading) {
                this.props.load();
            }
        };
    }
    render() {
        const { counter, label, isSaving, isLoading, error } = this.props;
        return (React.createElement("form", null,
            React.createElement("legend", null, label),
            React.createElement("pre", null, JSON.stringify({ counter, isSaving, isLoading }, null, 2)),
            React.createElement("button", { onClick: this._onClickIncrement }, "click me!"),
            React.createElement("button", { disabled: isSaving, onClick: this._onClickSave }, isSaving ? 'saving...' : 'save'),
            React.createElement("button", { disabled: isLoading, onClick: this._onClickLoad }, isLoading ? 'loading...' : 'load'),
            error ? React.createElement("div", { className: "error" }, error) : null));
    }
}
exports.CounterComponent = CounterComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(11));
__export(__webpack_require__(13));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_redux_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(9);
const react_redux_typescript_1 = __webpack_require__(10);
const components_1 = __webpack_require__(0);
const mapStateToProps = (state) => ({
    counter: state['@sample-stack/counter'],
    isSaving: state['@sample-stack/isSaving'],
    isLoading: state['@sample-stack/isLoading'],
    error: state['@sample-stack/error'],
});
const mapDispatchToProps = (dispatch) => ({
    increment: (n) => dispatch(client_redux_1.incrementCounter(n)),
    load: () => dispatch(client_redux_1.loadCount(null)),
    save: (value) => dispatch(client_redux_1.saveCount({ value })),
});
const stateProps = react_redux_typescript_1.returntypeof(mapStateToProps);
const dispatchProps = react_redux_typescript_1.returntypeof(mapDispatchToProps);
exports.Counter = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(components_1.CounterComponent);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@sample-stack/client-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux-typescript");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const react_apollo_1 = __webpack_require__(2);
const recompose_1 = __webpack_require__(12);
const graphql_gql_1 = __webpack_require__(3);
const PersonListComponent = ({ persons }) => (React.createElement("div", null,
    React.createElement("h2", null, "Persons:"),
    persons && persons.map((person, i) => React.createElement("div", { key: i }, person.name))));
exports.PersonList = recompose_1.compose(react_apollo_1.graphql(graphql_gql_1.PERSONS_QUERY), recompose_1.flattenProp('data'), recompose_1.pure)(PersonListComponent);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const immutability_helper_1 = __webpack_require__(14);
const react_apollo_1 = __webpack_require__(2);
const components_1 = __webpack_require__(0);
const graphql_gql_1 = __webpack_require__(3);
const client_core_1 = __webpack_require__(15);
const updateQueries = {
    counter: (prev, { mutationResult }) => {
        const newAmount = mutationResult.data.addCount.amount;
        return immutability_helper_1.default(prev, {
            count: {
                amount: {
                    $set: newAmount,
                },
            },
        });
    },
};
exports.CounterWithApollo = (react_apollo_1.compose(react_apollo_1.graphql(graphql_gql_1.ADD_COUNT_MUTATION, {
    props: ({ ownProps, mutate }) => ({
        save: (amount) => {
            return () => mutate({
                variables: { amount },
                updateQueries,
            });
        },
    }),
}), react_apollo_1.graphql(graphql_gql_1.ADD_COUNT_MUTATION, {
    props: ({ ownProps, mutate }) => ({
        increment: (amount) => {
            return () => mutate({
                variables: { amount },
                updateQueries,
            });
        },
    }),
}))(react_apollo_1.graphql(graphql_gql_1.COUNT_QUERY, {
    name: 'countData',
    props: ({ countData }) => {
        const newlog = client_core_1.logger.child({ childName: 'UIController' });
        newlog.debug('count data : (%j)', countData);
        return {
            subscribeToCount: params => {
                return countData.subscribeToMore({
                    document: graphql_gql_1.COUNT_SUBSCRIPTION,
                    variables: {},
                    updateQuery: (prev, { subscriptionData }) => {
                        const payload = subscriptionData.data && subscriptionData.data.subscribeToWorkspace;
                        if (!payload) {
                            return prev;
                        }
                        return payload;
                    },
                });
            },
            counter: countData.count && countData.count.amount,
            isLoading: countData.loading,
            isSaving: false,
            load: () => countData.count.amount,
            error: countData.error,
        };
    },
})(components_1.CounterComponent)));


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@sample-stack/client-core");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map