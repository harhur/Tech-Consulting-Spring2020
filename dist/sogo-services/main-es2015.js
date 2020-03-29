(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/analytics.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/analytics.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<table>\r\n  <caption>\r\n    ANALYTICS\r\n  </caption>\r\n  <tr>\r\n    <th> Average Vehicle Price: </th>\r\n    <td> ${{ priceAverage() }} </td>\r\n  </tr>\r\n  <tr>\r\n    <th> Starred Vehicles: </th>\r\n    <td> {{ numStarred }} </td>\r\n  </tr>\r\n  <tr>\r\n    <th> Most Common Car Color: </th>\r\n    <td> {{ mostCommonColor }} </td>\r\n  </tr>\r\n  <tr>\r\n    <th> Most Common Car Make: </th>\r\n    <td> {{ mostCommonMake }} </td>\r\n  </tr>\r\n  <tr>\r\n    <th> Car Price Range(Lowest to Highest): </th>\r\n    <td> {{ lowestPrice }} - {{ highestPrice }} </td>\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar [color]=\"'success'\">\r\n  <mat-toolbar-row>\r\n    <a href=\"#\"><h2><img class=\"SogoLogo\" src=\"../assets/Logo/sogo.PNG\" align=\"center\"> Sogo Services | ViLog</h2></a>\r\n    <span class=\"toolbar-button\"></span>\r\n\r\n    <a mat-raised-button class=\"text\" [color]=\"'successbutton'\" style=\"margin-right: 40px\" routerLink=\"/view-all\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"search icon\">search</mat-icon>\r\n      View & Search</a>\r\n    <a mat-raised-button class=\"text\" [color]=\"'successbutton'\" style=\"margin-right: 40px\" routerLink=\"/recently-added\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"recently added icon\">new_releases</mat-icon>\r\n      Recently Added</a>\r\n\r\n    <a mat-raised-button class=\"text\" [color]=\"'successbutton'\" style=\"margin-right: 10px; width: 140px\" routerLink=\"/starred\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"recently added icon\">star_outline</mat-icon>\r\n      Starred</a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n<!-- Routed components go here -->\r\n<!-- i.e, anything that ONLY is shown on the homepage -->\r\n\r\n<!--<div id=\"map\" class=\"map\"></div>-->\r\n\r\n<app-analytics></app-analytics>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car/car.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car/car.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h2>Details about the <em>{{this.car.model}} - {{this.car.make}}</em></h2>\r\n\r\n            <ul class=\"panel\">\r\n                <span class=\"panel-text\">\r\n                    <li>Car ID: {{this.car?.carId}}</li>\r\n                    <li>Model: {{this.car?.model}} - {{this.car.year}}</li>\r\n                    <li>Make: {{this.car?.make}}</li>\r\n                    <li>Color: {{this.car?.color}}</li>\r\n                    <li>Price: {{this.car?.price}}</li>\r\n                    <li>Date added: {{this.car?.dateAdded}}</li>\r\n                    <li>Last updated: {{this.car?.lastUpdated}}</li>\r\n                    <li>Vehicle Identification: {{this.car?.vin}}</li>\r\n                    <li>Plant ID: {{this.car?.plantId}}</li>\r\n                    <li>Starred: {{this.car?.starred}}</li>\r\n                </span>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recently-added/recently-added.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recently-added/recently-added.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1 style=\"margin-bottom: 30px\">Recently Added Cars</h1>\r\n\r\n    <h3 style=\"margin-bottom: 0px;\">Filter</h3>\r\n    <mat-form-field appearance=\"fill\" color=\"primary\">\r\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex: Tesla\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"carId\">\r\n            <th mat-header-cell *matHeaderCellDef > Car ID </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.carId}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"model\">\r\n            <th mat-header-cell *matHeaderCellDef> Model Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"dateAdded\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Added </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRecord(row)\"></tr>\r\n    </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/starred/starred.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starred/starred.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1 style=\"margin-bottom: 30px\">Starred Cars</h1>\r\n\r\n    <h3 style=\"margin-bottom: 0px;\">Filter</h3>\r\n    <mat-form-field appearance=\"fill\" color=\"primary\">\r\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex: Tesla\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"carId\">\r\n            <th mat-header-cell *matHeaderCellDef> Car ID </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.carId}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"model\">\r\n            <th mat-header-cell *matHeaderCellDef> Model Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"dateAdded\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Added </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRecord(row)\"></tr>\r\n    </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all/view-all.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-all/view-all.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1 style=\"margin-bottom: 30px\">All Available Cars</h1>\r\n\r\n    <h3 style=\"margin-bottom: 0px;\">Filter</h3>\r\n    <mat-form-field appearance=\"fill\" color=\"primary\">\r\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex: Tesla\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"carId\">\r\n            <th mat-header-cell *matHeaderCellDef> Car ID </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.carId}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"model\">\r\n            <th mat-header-cell *matHeaderCellDef> Model Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"dateAdded\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Added </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRecord(row)\"></tr>\r\n    </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/analytics/analytics.component.css":
/*!***************************************************!*\
  !*** ./src/app/analytics/analytics.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLFVBQVUseUJBQXlCOztBQUVuQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1idXR0b24ge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5Tb2dvTG9nbyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RDZENkQ7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RDZENkQ7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogU3RlZWxCbHVlO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkZGZmfVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuY2FwdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/analytics/analytics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/analytics/analytics.component.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json", 1);



let AnalyticsComponent = class AnalyticsComponent {
    constructor() {
        let jsonString = JSON.stringify(_assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__);
        this.carArray = JSON.parse(jsonString);
        this.numStarred = 0;
        this.mostCommonColor = "";
        this.mostCommonMake = "";
        this.lowestPrice = 0;
        this.highestPrice = 0;
        this.numStarredCars();
        this.mostCommonCarColor();
        this.mostCommonCarMake();
        this.lowestCarPrice();
        this.highestCarPrice();
    }
    ngOnInit() { }
    priceAverage() {
        var total = 0;
        var len = 0;
        _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__.forEach((car) => {
            total = car.price + total;
            len++;
        });
        return total / len;
    }
    numStarredCars() {
        for (let car of this.carArray) {
            if (car.starred === true) {
                this.numStarred += 1;
            }
        }
    }
    mostCommonCarColor() {
        var carColorArr = [];
        var colorNumArr = [];
        for (let car of this.carArray) {
            if (carColorArr.indexOf(car.color) == -1) {
                carColorArr.push(car.color);
                colorNumArr.push(1);
            }
            else {
                colorNumArr[carColorArr.indexOf(car.color)] = colorNumArr[carColorArr.indexOf(car.color)] + 1;
            }
        }
        this.mostCommonColor = carColorArr[colorNumArr.indexOf(Math.max(...colorNumArr))];
    }
    mostCommonCarMake() {
        var carMakeArr = [];
        var makeNumArr = [];
        for (let car of this.carArray) {
            if (carMakeArr.indexOf(car.make) == -1) {
                carMakeArr.push(car.make);
                makeNumArr.push(1);
            }
            else {
                makeNumArr[carMakeArr.indexOf(car.make)] = makeNumArr[carMakeArr.indexOf(car.make)] + 1;
            }
        }
        this.mostCommonMake = carMakeArr[makeNumArr.indexOf(Math.max(...makeNumArr))];
    }
    lowestCarPrice() {
        var minPrice = this.carArray[0].price;
        for (let car of this.carArray) {
            if (car.price < minPrice) {
                minPrice = car.price;
            }
        }
        this.lowestPrice = minPrice;
    }
    highestCarPrice() {
        var maxPrice = this.carArray[0].price;
        for (let car of this.carArray) {
            if (car.price > maxPrice) {
                maxPrice = car.price;
            }
        }
        this.highestPrice = maxPrice;
    }
};
AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analytics.component.css */ "./src/app/analytics/analytics.component.css")).default]
    })
], AnalyticsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car.component.ts");
/* harmony import */ var _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recently-added/recently-added.component */ "./src/app/recently-added/recently-added.component.ts");
/* harmony import */ var _starred_starred_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starred/starred.component */ "./src/app/starred/starred.component.ts");
/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all/view-all.component */ "./src/app/view-all/view-all.component.ts");







const appRoutes = [
    { path: 'recently-added', component: _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_4__["RecentlyAddedComponent"] },
    { path: 'view-all', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllComponent"] },
    { path: 'car', component: _car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"] },
    { path: 'starred', component: _starred_starred_component__WEBPACK_IMPORTED_MODULE_5__["StarredComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLFVBQVUseUJBQXlCOztBQUVuQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLlNvZ29Mb2dvIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiBTdGVlbEJsdWU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNlZWRkZmZ9XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/dummyData.json */ "./src/assets/dummyData.json", 1);



let AppComponent = 
// Attribution :
// https://medium.com/@balramchavan/using-openstreetmap-inside-angular-v6-3d42cbf03e57
class AppComponent {
    constructor() {
        this.title = 'sogo-services';
        this.latitude = 18.5204;
        this.longitude = 73.8567;
        this.latLong = new Array();
    }
    /*
    may be needed for future
    setCenter() {
      var view = this.map.getView();
      view.setCenter(ol.proj.fromLonLat([35.04440, 31.25012]));
      view.setZoom(8);
    }
    */
    ngOnInit() {
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([35.04440, 31.25012]),
                zoom: 8
            })
        });
        this.generateCoordinates();
    }
    // Generate random coordinates for OpenStreetMaps from the pre-existing JSON data
    generateCoordinates() {
        _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__.forEach(element => {
            let latitude = (Math.random() * (31.7719 - 35.6012) + 35.6012).toFixed(4);
            let longitude = (Math.random() * (35.2170 - 38.5432) + 38.5432).toFixed(4);
            let car = {
                carId: element.carId,
                dateAdded: element.dateAdded,
                color: element.color,
                price: element.price,
                vin: element.vin,
                lastUpdated: element.lastUpdated,
                year: element.year,
                model: element.model,
                make: element.make,
                plantId: element.plantId,
                starred: element.starred,
                latitude: +latitude,
                longitude: +longitude
            };
            this.latLong.push(car);
        });
        console.log(this.latLong);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
    // Attribution :
    // https://medium.com/@balramchavan/using-openstreetmap-inside-angular-v6-3d42cbf03e57
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recently-added/recently-added.component */ "./src/app/recently-added/recently-added.component.ts");
/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-all/view-all.component */ "./src/app/view-all/view-all.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");
/* harmony import */ var _starred_starred_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./starred/starred.component */ "./src/app/starred/starred.component.ts");

















const appRoutes = [
    { path: 'recently-added', component: _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_11__["RecentlyAddedComponent"] },
    { path: 'view-all', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_12__["ViewAllComponent"] },
    { path: 'car', component: _car_car_component__WEBPACK_IMPORTED_MODULE_14__["CarComponent"] },
    { path: 'starred', component: _starred_starred_component__WEBPACK_IMPORTED_MODULE_16__["StarredComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_11__["RecentlyAddedComponent"],
            _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_12__["ViewAllComponent"],
            _recently_added_recently_added_component__WEBPACK_IMPORTED_MODULE_11__["RecentlyAddedComponent"],
            _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_12__["ViewAllComponent"],
            _car_car_component__WEBPACK_IMPORTED_MODULE_14__["CarComponent"],
            _starred_starred_component__WEBPACK_IMPORTED_MODULE_16__["StarredComponent"],
            _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_15__["AnalyticsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/car/car.component.css":
/*!***************************************!*\
  !*** ./src/app/car/car.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n.panel {\r\n    padding-top: 10px;\r\n    width: 350px;\r\n    height: 220px;\r\n    background: #6D6D6D;\r\n    border-radius: 25px;\r\n    box-shadow: -1px 3px 18px 10px #C8C8C8;\r\n}\r\n\r\n.panel-text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    color: white;\r\n}\r\n\r\nli {\r\n    padding-top: 2px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2Nhci9jYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUEsVUFBVSx5QkFBeUI7O0FBRW5DO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUN2RkE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Nhci9jYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLlNvZ29Mb2dvIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiBTdGVlbEJsdWU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNlZWRkZmZ9XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuXHJcbi5wYW5lbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNkQ2RDZEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggM3B4IDE4cHggMTBweCAjQzhDOEM4O1xyXG59XHJcblxyXG4ucGFuZWwtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/car/car.component.ts":
/*!**************************************!*\
  !*** ./src/app/car/car.component.ts ***!
  \**************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json", 1);




let CarComponent = class CarComponent {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.activeRoute.queryParams.subscribe(params => {
            this.id = +params['id'];
        });
        this.getCar(this.id);
        // TODO: Use table to show Car attributes
    }
    ngOnInit() {
    }
    getCar(id) {
        _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_3__.forEach((car) => {
            if (car.carId === id) {
                this.car = car;
            }
        });
    }
};
CarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car/car.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car.component.css */ "./src/app/car/car.component.css")).default]
    })
], CarComponent);



/***/ }),

/***/ "./src/app/recently-added/recently-added.component.css":
/*!*************************************************************!*\
  !*** ./src/app/recently-added/recently-added.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLFVBQVUseUJBQXlCOztBQUVuQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWNlbnRseS1hZGRlZC9yZWNlbnRseS1hZGRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYnV0dG9uIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uU29nb0xvZ28ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogc3RlZWxibHVlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ2RDZEO1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ2RDZEO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IFN0ZWVsQmx1ZTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2VlZGRmZn1cclxuXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmNhcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/recently-added/recently-added.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recently-added/recently-added.component.ts ***!
  \************************************************************/
/*! exports provided: RecentlyAddedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyAddedComponent", function() { return RecentlyAddedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json", 1);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RecentlyAddedComponent = class RecentlyAddedComponent {
    constructor(router) {
        this.router = router;
        this.displayedColumns = ['carId', 'model', 'dateAdded'];
        this.jsonString = JSON.stringify(_assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__);
        this.carArray = JSON.parse(this.jsonString);
        this.carArray.sort(function compare(a, b) {
            var addedA = new Date(a.dateAdded);
            var addedB = new Date(b.dateAdded);
            return +addedA - +addedB;
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.carArray);
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getRecord(row) {
        console.log(row.carId);
        console.log(this.router.url);
        this.router.navigate(['./car'], { queryParams: { id: row.carId } });
    }
};
RecentlyAddedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RecentlyAddedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recently-added',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recently-added.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recently-added/recently-added.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recently-added.component.css */ "./src/app/recently-added/recently-added.component.css")).default]
    })
], RecentlyAddedComponent);



/***/ }),

/***/ "./src/app/starred/starred.component.css":
/*!***********************************************!*\
  !*** ./src/app/starred/starred.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLFVBQVUseUJBQXlCOztBQUVuQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zdGFycmVkL3N0YXJyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLlNvZ29Mb2dvIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENkQ2RDtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiBTdGVlbEJsdWU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNlZWRkZmZ9XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/starred/starred.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starred/starred.component.ts ***!
  \**********************************************/
/*! exports provided: StarredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredComponent", function() { return StarredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json", 1);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StarredComponent = class StarredComponent {
    constructor(router) {
        this.router = router;
        this.displayedColumns = ['carId', 'model', 'dateAdded'];
        this.jsonString = JSON.stringify(_assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__);
        this.starredArray = JSON.parse(this.jsonString);
        this.starredArray = this.starredArray.filter(function (arr) {
            return arr.starred;
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.starredArray);
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getRecord(row) {
        console.log(row.carId);
        console.log(this.router.url);
        this.router.navigate(['./car'], { queryParams: { id: row.carId } });
    }
};
StarredComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StarredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starred',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starred.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/starred/starred.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starred.component.css */ "./src/app/starred/starred.component.css")).default]
    })
], StarredComponent);



/***/ }),

/***/ "./src/app/view-all/view-all.component.css":
/*!*************************************************!*\
  !*** ./src/app/view-all/view-all.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-button {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.SogoLogo {\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\ntable {\r\n    width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 80%;\r\n}\r\n\r\n.mat-input-element::-webkit-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-moz-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::-ms-input-placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n.mat-input-element::placeholder{\r\n    color: steelblue;\r\n    font-size: medium;\r\n    font-weight: 400;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: green !important;\r\n}\r\n\r\n.mat-row:hover {\r\n    background-color: steelblue;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.mat-row {\r\n    background-color: #6D6D6D;\r\n}\r\n\r\n.map {\r\n    width: 75%;\r\n    height: 90%;\r\n}\r\n\r\n.text {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: SteelBlue;\r\n}\r\n\r\ndiv {\r\n    padding-left: 30px;\r\n}\r\n\r\ntable {\r\n  width: 25%;\r\n  padding-top: 10px;\r\n  padding-right: 10px;\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  margin-top: 25px;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr:hover {background-color: #eeddff}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\ntd {\r\n  text-align: right;\r\n}\r\n\r\ncaption {\r\n  background-color: #eeeeee;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFKQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUpBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBSkE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLFVBQVUseUJBQXlCOztBQUVuQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsbC92aWV3LWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYnV0dG9uIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uU29nb0xvZ28ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogc3RlZWxibHVlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ2RDZEO1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ2RDZEO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IFN0ZWVsQmx1ZTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2VlZGRmZn1cclxuXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmNhcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/view-all/view-all.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-all/view-all.component.ts ***!
  \************************************************/
/*! exports provided: ViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return ViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json");
var _assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/dummyData.json */ "./src/assets/dummyData.json", 1);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ViewAllComponent = class ViewAllComponent {
    constructor(router) {
        this.router = router;
        this.displayedColumns = ['carId', 'model', 'dateAdded'];
        this.jsonString = JSON.stringify(_assets_dummyData_json__WEBPACK_IMPORTED_MODULE_2__);
        this.carArray = JSON.parse(this.jsonString);
        this.carArray.sort((a, b) => a.carId - b.carId);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.carArray);
    }
    ngOnInit() {
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getRecord(row) {
        this.router.navigate(['./car'], { queryParams: { id: row.carId } });
    }
};
ViewAllComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all/view-all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-all.component.css */ "./src/app/view-all/view-all.component.css")).default]
    })
], ViewAllComponent);



/***/ }),

/***/ "./src/assets/dummyData.json":
/*!***********************************!*\
  !*** ./src/assets/dummyData.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"carId\":0,\"dateAdded\":\"2018-1-22\",\"color\":\"green\",\"price\":53300,\"vin\":500473911531,\"lastUpdated\":\"2017-7-12 16:18:27\",\"year\":2013,\"model\":\"Mustang\",\"make\":\"Ford\",\"plantId\":1,\"starred\":true,\"latitude\":32.4442,\"longitude\":35.2501},{\"carId\":1,\"dateAdded\":\"2016-6-22\",\"color\":\"pink\",\"price\":19416,\"vin\":504096604206,\"lastUpdated\":\"2018-10-14 14:28:5\",\"year\":2017,\"model\":\"Grand Cherokee\",\"make\":\"Cadillac\",\"plantId\":5,\"starred\":false,\"latitude\":34.2332,\"longitude\":35.6008},{\"carId\":2,\"dateAdded\":\"2018-7-25\",\"color\":\"purple\",\"price\":50149,\"vin\":1221647654720,\"lastUpdated\":\"2016-9-2 0:2:6\",\"year\":1996,\"model\":\"Mustang\",\"make\":\"Tesla\",\"plantId\":5,\"starred\":false,\"latitude\":35.3603,\"longitude\":36.1689},{\"carId\":3,\"dateAdded\":\"2017-2-28\",\"color\":\"purple\",\"price\":17044,\"vin\":1573779961447,\"lastUpdated\":\"2018-9-21 18:3:37\",\"year\":1998,\"model\":\"Mustang\",\"make\":\"Jeep\",\"plantId\":14,\"starred\":true,\"latitude\":33.335,\"longitude\":35.9415},{\"carId\":4,\"dateAdded\":\"2018-1-10\",\"color\":\"black\",\"price\":75277,\"vin\":465881630666,\"lastUpdated\":\"2019-1-1 8:27:22\",\"year\":2000,\"model\":\"Encore\",\"make\":\"Cadillac\",\"plantId\":1,\"starred\":false,\"latitude\":34.1951,\"longitude\":35.2336},{\"carId\":5,\"dateAdded\":\"2017-3-18\",\"color\":\"silver\",\"price\":4697,\"vin\":1522478144532,\"lastUpdated\":\"2019-4-3 20:28:19\",\"year\":1996,\"model\":\"Model 3\",\"make\":\"Buick\",\"plantId\":11,\"starred\":true,\"latitude\":34.7889,\"longitude\":37.4065},{\"carId\":6,\"dateAdded\":\"2016-8-8\",\"color\":\"red\",\"price\":16486,\"vin\":198097610569,\"lastUpdated\":\"2016-4-5 8:30:2\",\"year\":2016,\"model\":\"Grand Cherokee\",\"make\":\"Ford\",\"plantId\":14,\"starred\":false,\"latitude\":34.0468,\"longitude\":36.4077},{\"carId\":7,\"dateAdded\":\"2016-1-29\",\"color\":\"brown\",\"price\":73590,\"vin\":345455106537,\"lastUpdated\":\"2017-11-12 21:11:34\",\"year\":1996,\"model\":\"Encore\",\"make\":\"Buick\",\"plantId\":2,\"starred\":false,\"latitude\":33.805,\"longitude\":36.1382},{\"carId\":8,\"dateAdded\":\"2018-10-25\",\"color\":\"red\",\"price\":50471,\"vin\":888303741331,\"lastUpdated\":\"2016-6-20 6:17:17\",\"year\":2000,\"model\":\"Enclave\",\"make\":\"Jeep\",\"plantId\":9,\"starred\":false,\"latitude\":34.7852,\"longitude\":37.1202},{\"carId\":9,\"dateAdded\":\"2018-3-12\",\"color\":\"brown\",\"price\":13425,\"vin\":1393584259720,\"lastUpdated\":\"2017-8-19 1:25:51\",\"year\":2014,\"model\":\"Model X\",\"make\":\"Ford\",\"plantId\":1,\"starred\":true,\"latitude\":33.3951,\"longitude\":36.225},{\"carId\":10,\"dateAdded\":\"2016-6-4\",\"color\":\"black\",\"price\":79886,\"vin\":1142228857046,\"lastUpdated\":\"2018-10-4 4:7:11\",\"year\":2007,\"model\":\"Wrangler\",\"make\":\"Cadillac\",\"plantId\":15,\"starred\":true,\"latitude\":34.2878,\"longitude\":36.3266},{\"carId\":11,\"dateAdded\":\"2018-2-29\",\"color\":\"pink\",\"price\":85035,\"vin\":1358544223506,\"lastUpdated\":\"2017-5-8 21:1:3\",\"year\":2018,\"model\":\"Encore\",\"make\":\"Tesla\",\"plantId\":3,\"starred\":true,\"latitude\":35.4278,\"longitude\":35.7106},{\"carId\":12,\"dateAdded\":\"2019-8-15\",\"color\":\"green\",\"price\":98555,\"vin\":621419093548,\"lastUpdated\":\"2018-11-1 21:47:31\",\"year\":2018,\"model\":\"Grand Cherokee\",\"make\":\"Buick\",\"plantId\":4,\"starred\":true,\"latitude\":34.8371,\"longitude\":35.7863},{\"carId\":13,\"dateAdded\":\"2019-7-1\",\"color\":\"pink\",\"price\":77302,\"vin\":1697703109712,\"lastUpdated\":\"2017-4-14 20:6:9\",\"year\":2018,\"model\":\"Grand Cherokee\",\"make\":\"Cadillac\",\"plantId\":5,\"starred\":true,\"latitude\":33.8461,\"longitude\":37.6621},{\"carId\":14,\"dateAdded\":\"2019-10-1\",\"color\":\"black\",\"price\":97306,\"vin\":589894997279,\"lastUpdated\":\"2019-11-21 13:1:23\",\"year\":2007,\"model\":\"Grand Cherokee\",\"make\":\"Buick\",\"plantId\":7,\"starred\":true,\"latitude\":34.156,\"longitude\":37.4488},{\"carId\":15,\"dateAdded\":\"2019-9-23\",\"color\":\"black\",\"price\":27991,\"vin\":572325928153,\"lastUpdated\":\"2018-10-2 15:20:23\",\"year\":1997,\"model\":\"Mustang\",\"make\":\"Buick\",\"plantId\":7,\"starred\":true,\"latitude\":31.952,\"longitude\":38.4262},{\"carId\":16,\"dateAdded\":\"2016-5-1\",\"color\":\"green\",\"price\":17285,\"vin\":1685298915748,\"lastUpdated\":\"2019-5-18 8:31:12\",\"year\":2005,\"model\":\"Model X\",\"make\":\"Ford\",\"plantId\":2,\"starred\":true,\"latitude\":35.358,\"longitude\":36.7408},{\"carId\":17,\"dateAdded\":\"2018-7-27\",\"color\":\"purple\",\"price\":59582,\"vin\":1348543491753,\"lastUpdated\":\"2016-4-16 1:17:12\",\"year\":2016,\"model\":\"Wrangler\",\"make\":\"Buick\",\"plantId\":15,\"starred\":false,\"latitude\":34.1741,\"longitude\":37.8068},{\"carId\":18,\"dateAdded\":\"2018-7-9\",\"color\":\"pink\",\"price\":22264,\"vin\":213970047538,\"lastUpdated\":\"2019-9-10 11:15:18\",\"year\":2016,\"model\":\"Enclave\",\"make\":\"Jeep\",\"plantId\":4,\"starred\":false,\"latitude\":35.5906,\"longitude\":38.1507},{\"carId\":19,\"dateAdded\":\"2017-1-21\",\"color\":\"black\",\"price\":11239,\"vin\":1073304477746,\"lastUpdated\":\"2018-1-23 17:58:45\",\"year\":2006,\"model\":\"Encore\",\"make\":\"Jeep\",\"plantId\":1,\"starred\":false,\"latitude\":33.2343,\"longitude\":35.3111},{\"carId\":20,\"dateAdded\":\"2017-4-27\",\"color\":\"blue\",\"price\":92602,\"vin\":1628925320929,\"lastUpdated\":\"2018-1-28 10:26:7\",\"year\":2011,\"model\":\"Wrangler\",\"make\":\"Jeep\",\"plantId\":14,\"starred\":false,\"latitude\":35.4765,\"longitude\":35.9735},{\"carId\":21,\"dateAdded\":\"2017-2-29\",\"color\":\"silver\",\"price\":78625,\"vin\":1029419467311,\"lastUpdated\":\"2017-3-12 6:33:45\",\"year\":1996,\"model\":\"Enclave\",\"make\":\"Jeep\",\"plantId\":7,\"starred\":false,\"latitude\":31.8106,\"longitude\":37.1468},{\"carId\":22,\"dateAdded\":\"2019-10-10\",\"color\":\"green\",\"price\":14011,\"vin\":1874707173221,\"lastUpdated\":\"2018-5-19 20:6:42\",\"year\":2018,\"model\":\"Mustang\",\"make\":\"Buick\",\"plantId\":13,\"starred\":false,\"latitude\":32.7738,\"longitude\":37.4962},{\"carId\":23,\"dateAdded\":\"2019-1-15\",\"color\":\"blue\",\"price\":91379,\"vin\":902771113814,\"lastUpdated\":\"2017-2-7 3:24:21\",\"year\":2008,\"model\":\"Grand Cherokee\",\"make\":\"Ford\",\"plantId\":2,\"starred\":true,\"latitude\":32.0561,\"longitude\":38.1609},{\"carId\":24,\"dateAdded\":\"2016-6-27\",\"color\":\"blue\",\"price\":36964,\"vin\":700196103237,\"lastUpdated\":\"2016-9-5 22:2:50\",\"year\":2016,\"model\":\"Grand Cherokee\",\"make\":\"Tesla\",\"plantId\":3,\"starred\":false,\"latitude\":34.1967,\"longitude\":36.0385},{\"carId\":25,\"dateAdded\":\"2018-5-3\",\"color\":\"blue\",\"price\":25476,\"vin\":1714771323282,\"lastUpdated\":\"2017-9-17 6:8:22\",\"year\":1995,\"model\":\"Grand Cherokee\",\"make\":\"Jeep\",\"plantId\":9,\"starred\":false,\"latitude\":33.7101,\"longitude\":37.4578},{\"carId\":26,\"dateAdded\":\"2017-9-4\",\"color\":\"green\",\"price\":39350,\"vin\":1851277054960,\"lastUpdated\":\"2017-6-2 4:16:19\",\"year\":1996,\"model\":\"Model 3\",\"make\":\"Buick\",\"plantId\":7,\"starred\":true,\"latitude\":33.6641,\"longitude\":35.2704},{\"carId\":27,\"dateAdded\":\"2018-9-2\",\"color\":\"pink\",\"price\":46800,\"vin\":1098858051789,\"lastUpdated\":\"2019-6-11 8:3:0\",\"year\":2018,\"model\":\"Model X\",\"make\":\"Tesla\",\"plantId\":2,\"starred\":false,\"latitude\":32.5441,\"longitude\":37.4097},{\"carId\":28,\"dateAdded\":\"2016-6-27\",\"color\":\"silver\",\"price\":15921,\"vin\":649158209834,\"lastUpdated\":\"2018-1-19 15:20:23\",\"year\":2006,\"model\":\"Wrangler\",\"make\":\"Buick\",\"plantId\":10,\"starred\":false,\"latitude\":32.5227,\"longitude\":36.4612},{\"carId\":29,\"dateAdded\":\"2019-1-5\",\"color\":\"green\",\"price\":74089,\"vin\":1578466355797,\"lastUpdated\":\"2018-11-22 21:56:48\",\"year\":1999,\"model\":\"Model 3\",\"make\":\"Buick\",\"plantId\":12,\"starred\":false,\"latitude\":35.5472,\"longitude\":36.9204},{\"carId\":30,\"dateAdded\":\"2018-9-7\",\"color\":\"black\",\"price\":61377,\"vin\":588033031765,\"lastUpdated\":\"2018-11-27 13:38:12\",\"year\":2010,\"model\":\"Grand Cherokee\",\"make\":\"Cadillac\",\"plantId\":5,\"starred\":false,\"latitude\":33.2669,\"longitude\":35.3704},{\"carId\":31,\"dateAdded\":\"2019-5-29\",\"color\":\"blue\",\"price\":25645,\"vin\":1711433727263,\"lastUpdated\":\"2016-11-14 15:41:29\",\"year\":1998,\"model\":\"Model 3\",\"make\":\"Jeep\",\"plantId\":15,\"starred\":false,\"latitude\":32.0141,\"longitude\":36.7023},{\"carId\":32,\"dateAdded\":\"2018-11-13\",\"color\":\"blue\",\"price\":82792,\"vin\":645028620620,\"lastUpdated\":\"2016-8-15 14:25:7\",\"year\":2014,\"model\":\"Encore\",\"make\":\"Jeep\",\"plantId\":9,\"starred\":true,\"latitude\":31.8011,\"longitude\":36.629},{\"carId\":33,\"dateAdded\":\"2019-9-3\",\"color\":\"silver\",\"price\":90791,\"vin\":995339365559,\"lastUpdated\":\"2019-4-4 10:1:5\",\"year\":1999,\"model\":\"Enclave\",\"make\":\"Buick\",\"plantId\":13,\"starred\":false,\"latitude\":32.2275,\"longitude\":36.9097},{\"carId\":34,\"dateAdded\":\"2017-3-22\",\"color\":\"red\",\"price\":20337,\"vin\":1838007349919,\"lastUpdated\":\"2019-8-8 19:12:40\",\"year\":2004,\"model\":\"Model X\",\"make\":\"Ford\",\"plantId\":4,\"starred\":true,\"latitude\":34.9699,\"longitude\":37.294},{\"carId\":35,\"dateAdded\":\"2016-11-2\",\"color\":\"blue\",\"price\":97089,\"vin\":512974151765,\"lastUpdated\":\"2016-2-1 8:34:52\",\"year\":2002,\"model\":\"Grand Cherokee\",\"make\":\"Ford\",\"plantId\":6,\"starred\":true,\"latitude\":34.2731,\"longitude\":38.2763},{\"carId\":36,\"dateAdded\":\"2016-9-23\",\"color\":\"purple\",\"price\":29662,\"vin\":964207016015,\"lastUpdated\":\"2018-5-19 18:46:45\",\"year\":2016,\"model\":\"Model X\",\"make\":\"Cadillac\",\"plantId\":12,\"starred\":true,\"latitude\":34.9144,\"longitude\":36.9664},{\"carId\":37,\"dateAdded\":\"2016-4-20\",\"color\":\"pink\",\"price\":72214,\"vin\":509348290090,\"lastUpdated\":\"2018-6-1 12:19:54\",\"year\":2014,\"model\":\"Enclave\",\"make\":\"Buick\",\"plantId\":13,\"starred\":false,\"latitude\":34.8333,\"longitude\":36.1458},{\"carId\":38,\"dateAdded\":\"2016-7-13\",\"color\":\"silver\",\"price\":65800,\"vin\":18515148577,\"lastUpdated\":\"2016-4-15 11:54:16\",\"year\":2018,\"model\":\"Model X\",\"make\":\"Jeep\",\"plantId\":1,\"starred\":true,\"latitude\":33.513,\"longitude\":37.6032},{\"carId\":39,\"dateAdded\":\"2016-2-22\",\"color\":\"blue\",\"price\":72615,\"vin\":345477209694,\"lastUpdated\":\"2019-6-22 20:53:58\",\"year\":2000,\"model\":\"Model 3\",\"make\":\"Tesla\",\"plantId\":4,\"starred\":false,\"latitude\":34.3869,\"longitude\":38.0642},{\"carId\":40,\"dateAdded\":\"2018-3-13\",\"color\":\"blue\",\"price\":74984,\"vin\":761174635672,\"lastUpdated\":\"2017-7-29 5:19:19\",\"year\":2006,\"model\":\"Grand Cherokee\",\"make\":\"Cadillac\",\"plantId\":13,\"starred\":true,\"latitude\":32.9229,\"longitude\":37.9227},{\"carId\":41,\"dateAdded\":\"2016-6-2\",\"color\":\"silver\",\"price\":11352,\"vin\":1246638158209,\"lastUpdated\":\"2018-1-20 15:5:46\",\"year\":2017,\"model\":\"Grand Cherokee\",\"make\":\"Jeep\",\"plantId\":13,\"starred\":true,\"latitude\":35.3292,\"longitude\":35.4572},{\"carId\":42,\"dateAdded\":\"2016-7-10\",\"color\":\"brown\",\"price\":70750,\"vin\":1795150885757,\"lastUpdated\":\"2018-9-12 0:55:47\",\"year\":2007,\"model\":\"Mustang\",\"make\":\"Tesla\",\"plantId\":14,\"starred\":true,\"latitude\":31.8986,\"longitude\":38.2197},{\"carId\":43,\"dateAdded\":\"2018-4-17\",\"color\":\"purple\",\"price\":39077,\"vin\":1467735514485,\"lastUpdated\":\"2018-6-24 7:12:40\",\"year\":2003,\"model\":\"Model 3\",\"make\":\"Buick\",\"plantId\":1,\"starred\":false,\"latitude\":34.4693,\"longitude\":36.4205},{\"carId\":44,\"dateAdded\":\"2017-2-16\",\"color\":\"purple\",\"price\":87370,\"vin\":179986447055,\"lastUpdated\":\"2018-10-28 16:43:32\",\"year\":1997,\"model\":\"Encore\",\"make\":\"Cadillac\",\"plantId\":5,\"starred\":false,\"latitude\":32.7948,\"longitude\":37.3617},{\"carId\":45,\"dateAdded\":\"2018-5-12\",\"color\":\"purple\",\"price\":61432,\"vin\":1597647150316,\"lastUpdated\":\"2019-10-10 19:55:50\",\"year\":1995,\"model\":\"Model 3\",\"make\":\"Jeep\",\"plantId\":7,\"starred\":false,\"latitude\":34.7154,\"longitude\":35.6743},{\"carId\":46,\"dateAdded\":\"2016-8-15\",\"color\":\"red\",\"price\":35744,\"vin\":387938265253,\"lastUpdated\":\"2018-3-10 11:10:7\",\"year\":2006,\"model\":\"Enclave\",\"make\":\"Ford\",\"plantId\":8,\"starred\":true,\"latitude\":33.6915,\"longitude\":37.5589},{\"carId\":47,\"dateAdded\":\"2016-3-19\",\"color\":\"pink\",\"price\":20514,\"vin\":606739819361,\"lastUpdated\":\"2017-9-14 4:25:9\",\"year\":1997,\"model\":\"Model X\",\"make\":\"Ford\",\"plantId\":11,\"starred\":false,\"latitude\":32.1298,\"longitude\":36.1561},{\"carId\":48,\"dateAdded\":\"2017-6-27\",\"color\":\"pink\",\"price\":55714,\"vin\":488881874305,\"lastUpdated\":\"2017-2-8 14:15:7\",\"year\":2006,\"model\":\"Model X\",\"make\":\"Tesla\",\"plantId\":5,\"starred\":false,\"latitude\":33.3573,\"longitude\":38.1129},{\"carId\":49,\"dateAdded\":\"2019-4-29\",\"color\":\"silver\",\"price\":32331,\"vin\":92386141303,\"lastUpdated\":\"2019-7-21 22:15:19\",\"year\":2013,\"model\":\"Enclave\",\"make\":\"Cadillac\",\"plantId\":14,\"starred\":false,\"latitude\":34.1452,\"longitude\":35.9817}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abhib\Documents\ViLog\Tamid-Sogo-Services\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map