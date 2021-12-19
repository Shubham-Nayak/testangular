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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- Pre-loader start -->\n   <div class=\"theme-loader\">\n    <div class=\"loader-track\">\n        <div class=\"preloader-wrapper\">\n            <div class=\"spinner-layer spinner-blue\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n            <div class=\"spinner-layer spinner-red\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n\n            <div class=\"spinner-layer spinner-yellow\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n\n            <div class=\"spinner-layer spinner-green\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div>\n                <div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Pre-loader end -->\n<div id=\"pcoded\" class=\"pcoded\">\n    <div class=\"pcoded-overlay-box\"></div>\n    <div class=\"pcoded-container navbar-wrapper\">\n        <nav class=\"navbar header-navbar pcoded-header\">\n            <div class=\"navbar-wrapper\">\n                <div class=\"navbar-logo\">\n                    <a class=\"mobile-menu waves-effect waves-light\" id=\"mobile-collapse\" href=\"#!\">\n                        <i class=\"ti-menu\"></i>\n                    </a>\n                    <div class=\"mobile-search waves-effect waves-light\">\n                        <div class=\"header-search\">\n                            <div class=\"main-search morphsearch-search\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-prepend search-close\"><i class=\"ti-close input-group-text\"></i></span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Keyword\">\n                                    <span class=\"input-group-append search-btn\"><i class=\"ti-search input-group-text\"></i></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"index.html\">\n                        <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\n                    </a>\n                    <a class=\"mobile-options waves-effect waves-light\">\n                        <i class=\"ti-more\"></i>\n                    </a>\n                </div>\n                <div class=\"navbar-container container-fluid\">\n                    <ul class=\"nav-left\">\n                        <li>\n                            <div class=\"sidebar_toggle\"><a href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a></div>\n                        </li>\n                        <li>\n                            <a href=\"#!\" onclick=\"javascript:toggleFullScreen()\" class=\"waves-effect waves-light\">\n                                <i class=\"ti-fullscreen\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <ul class=\"nav-right\">\n                        <li class=\"header-notification\">\n                            <a href=\"#!\" class=\"waves-effect waves-light\">\n                                <i class=\"ti-bell\"></i>\n                                <span class=\"badge bg-c-red\"></span>\n                            </a>\n                            <ul class=\"show-notification\">\n                                <li>\n                                    <h6>Notifications</h6>\n                                    <label class=\"label label-danger\">New</label>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <div class=\"media\">\n                                        <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\n                                        <div class=\"media-body\">\n                                            <h5 class=\"notification-user\">John Doe</h5>\n                                            <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                                            <span class=\"notification-time\">30 minutes ago</span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <div class=\"media\">\n                                        <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\n                                        <div class=\"media-body\">\n                                            <h5 class=\"notification-user\">Joseph William</h5>\n                                            <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                                            <span class=\"notification-time\">30 minutes ago</span>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <div class=\"media\">\n                                        <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\n                                        <div class=\"media-body\">\n                                            <h5 class=\"notification-user\">Sara Soudein</h5>\n                                            <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                                            <span class=\"notification-time\">30 minutes ago</span>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"user-profile header-notification\">\n                            <a href=\"#!\" class=\"waves-effect waves-light\">\n                                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n                                <span>John Doe</span>\n                                <i class=\"ti-angle-down\"></i>\n                            </a>\n                            <ul class=\"show-notification profile-notification\">\n                                <li class=\"waves-effect waves-light\">\n                                    <a href=\"#!\">\n                                        <i class=\"ti-settings\"></i> Settings\n                                    </a>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <a href=\"user-profile.html\">\n                                        <i class=\"ti-user\"></i> Profile\n                                    </a>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <a href=\"email-inbox.html\">\n                                        <i class=\"ti-email\"></i> My Messages\n                                    </a>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <a href=\"auth-lock-screen.html\">\n                                        <i class=\"ti-lock\"></i> Lock Screen\n                                    </a>\n                                </li>\n                                <li class=\"waves-effect waves-light\">\n                                    <a href=\"auth-normal-sign-in.html\">\n                                        <i class=\"ti-layout-sidebar-left\"></i> Logout\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n\n        <div class=\"pcoded-main-container\">\n            <div class=\"pcoded-wrapper\">\n                <nav class=\"pcoded-navbar\">\n                    <div class=\"sidebar_toggle\"><a href=\"#\"><i class=\"icon-close icons\"></i></a></div>\n                    <div class=\"pcoded-inner-navbar main-menu\">\n                        <div class=\"\">\n                            <div class=\"main-menu-header\">\n                                <img class=\"img-80 img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"User-Profile-Image\">\n                                <div class=\"user-details\">\n                                    <span id=\"more-details\">John Doe<i class=\"fa fa-caret-down\"></i></span>\n                                </div>\n                            </div>\n                            <div class=\"main-menu-content\">\n                                <ul>\n                                    <li class=\"more-details\">\n                                        <a href=\"user-profile.html\"><i class=\"ti-user\"></i>View Profile</a>\n                                        <a href=\"#!\"><i class=\"ti-settings\"></i>Settings</a>\n                                        <a href=\"auth-normal-sign-in.html\"><i class=\"ti-layout-sidebar-left\"></i>Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"p-15 p-b-0\">\n                            <form class=\"form-material\">\n                                <div class=\"form-group form-primary\">\n                                    <input type=\"text\" name=\"footer-email\" class=\"form-control\">\n                                    <span class=\"form-bar\"></span>\n                                    <label class=\"float-label\"><i class=\"fa fa-search m-r-10\"></i>Search Friend</label>\n                                </div>\n                            </form>\n                        </div>\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                                <a routerLink=\"/\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-home\"></i><b>D</b></span>\n                                    <span class=\"pcoded-mtext\">Dashboard</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                            </li>\n                        </ul>\n                        <div class=\"pcoded-navigation-label\">E-Learning</div>\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                            <li class=\"pcoded-hasmenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" >\n                                <a href=\"javascript:void(0)\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-layout-grid2-alt\"></i><b>BC</b></span>\n                                    <span class=\"pcoded-mtext\">Questionnaires</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                                <ul class=\"pcoded-submenu\">\n                                    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                                        <a routerLink=\"/questionnaire\" routerLinkActive=\"active\" class=\"waves-effect waves-dark\">\n                                            <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                            <span class=\"pcoded-mtext\">Questionnaire List</span>\n                                            <span class=\"pcoded-mcaret\"></span>\n                                        </a>\n                                    </li>\n                                    \n                                    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                                        <a routerLink=\"/add-questionnaire\" routerLinkActive=\"active\" class=\"waves-effect waves-dark\">\n                                            <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                            <span class=\"pcoded-mtext\">Add Questionnaire</span>\n                                            <span class=\"pcoded-mcaret\"></span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                          <li class=\"pcoded-hasmenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" >\n                              <a href=\"javascript:void(0)\" class=\"waves-effect waves-dark\">\n                                  <span class=\"pcoded-micon\"><i class=\"ti-layout-grid2-alt\"></i><b>BC</b></span>\n                                  <span class=\"pcoded-mtext\">Certifications</span>\n                                  <span class=\"pcoded-mcaret\"></span>\n                              </a>\n                              <ul class=\"pcoded-submenu\">\n                                  <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                                      <a routerLink=\"/certificate\" routerLinkActive=\"active\" class=\"waves-effect waves-dark\">\n                                          <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                          <span class=\"pcoded-mtext\">Certificate List</span>\n                                          <span class=\"pcoded-mcaret\"></span>\n                                      </a>\n                                  </li>\n                                  \n                                  <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                                      <a routerLink=\"/add-certificate\" routerLinkActive=\"active\" class=\"waves-effect waves-dark\">\n                                          <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                          <span class=\"pcoded-mtext\">Add Certificate</span>\n                                          <span class=\"pcoded-mcaret\"></span>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </li>\n                      </ul>\n                       \n                        <div class=\"pcoded-navigation-label\">Tables</div>\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                            <li class=\"\">\n                                <a href=\"bs-basic-table.html\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-receipt\"></i><b>B</b></span>\n                                    <span class=\"pcoded-mtext\">Table</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                            </li>\n                        </ul>\n                        <div class=\"pcoded-navigation-label\">Chart And Maps</div>\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                            <li class=\"\">\n                                <a href=\"chart-morris.html\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-bar-chart-alt\"></i><b>C</b></span>\n                                    <span class=\"pcoded-mtext\">Charts</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                            </li>\n                            <li class=\"\">\n                                <a href=\"map-google.html\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-map-alt\"></i><b>M</b></span>\n                                    <span class=\"pcoded-mtext\">Maps</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                            </li>\n                        </ul>\n                        <div class=\"pcoded-navigation-label\">Pages</div>\n                        <ul class=\"pcoded-item pcoded-left-item\">\n                            <li class=\"pcoded-hasmenu \">\n                                <a href=\"javascript:void(0)\" class=\"waves-effect waves-dark\">\n                                    <span class=\"pcoded-micon\"><i class=\"ti-id-badge\"></i><b>A</b></span>\n                                    <span class=\"pcoded-mtext\">Pages</span>\n                                    <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                                <ul class=\"pcoded-submenu\">\n                                    <li class=\"\">\n                                        <a href=\"auth-normal-sign-in.html\" class=\"waves-effect waves-dark\">\n                                            <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                            <span class=\"pcoded-mtext\">Login</span>\n                                            <span class=\"pcoded-mcaret\"></span>\n                                        </a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"auth-sign-up.html\" class=\"waves-effect waves-dark\">\n                                            <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                                            <span class=\"pcoded-mtext\">Registration</span>\n                                            <span class=\"pcoded-mcaret\"></span>\n                                        </a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"sample-page.html\" class=\"waves-effect waves-dark\">\n                                            <span class=\"pcoded-micon\"><i class=\"ti-layout-sidebar-left\"></i><b>S</b></span>\n                                            <span class=\"pcoded-mtext\">Sample Page</span>\n                                            <span class=\"pcoded-mcaret\"></span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                </nav>\n                <div class=\"pcoded-content\">\n                  <router-outlet></router-outlet>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FIFA';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
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





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shubham\Desktop\eDucation\FIFA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map