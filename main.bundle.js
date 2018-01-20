webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_training_component__ = __webpack_require__("../../../../../src/app/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_training_month_list_training_month_list_component__ = __webpack_require__("../../../../../src/app/training/training-month-list/training-month-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__training_training_filter_bar_training_filter_bar_component__ = __webpack_require__("../../../../../src/app/training/training-filter-bar/training-filter-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_courses_service__ = __webpack_require__("../../../../../src/app/services/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_routeprovider_service__ = __webpack_require__("../../../../../src/app/services/routeprovider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__training_training_overview_training_overview_component__ = __webpack_require__("../../../../../src/app/training/training-overview/training-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_my_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/my-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const appRoutes = [
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_5__training_training_component__["a" /* TrainingComponent */], resolve: { courses: __WEBPACK_IMPORTED_MODULE_9__services_routeprovider_service__["a" /* CourseDataResolver */] } }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__training_training_component__["a" /* TrainingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__training_training_month_list_training_month_list_component__["a" /* TrainingMonthListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__training_training_filter_bar_training_filter_bar_component__["a" /* TrainingFilterBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__training_training_overview_training_overview_component__["a" /* TrainingOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_my_filter_pipe__["a" /* MyFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_semantic_ui__["a" /* SuiModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_courses_service__["a" /* CoursesService */],
            __WEBPACK_IMPORTED_MODULE_9__services_routeprovider_service__["a" /* CourseDataResolver */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui huge menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <div class=\"right menu\">\n    <div class=\"ui dropdown item\">\n      Language <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a class=\"item\">English</a>\n        <a class=\"item\">Russian</a>\n        <a class=\"item\">Spanish</a>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"ui primary button\">Sign Up</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "../../../../../src/app/model/courses.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Course {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Course;



/***/ }),

/***/ "../../../../../src/app/pipes/my-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MyFilterPipe = class MyFilterPipe {
    transform(items, field, value) {
        console.log(items);
        console.log(field);
        const returnValue = [];
        if (!items) {
            return [];
        }
        if (!value || value.length === 0) {
            return items;
        }
        for (const item of items) {
            let matchfound = false;
            item.tags.forEach(tag => {
                if (tag.tagname.toLowerCase() === value.toLowerCase()) {
                    matchfound = true;
                }
            });
            if (matchfound) {
                returnValue.push(item);
            }
        }
        if (returnValue.length === 0) {
            return items;
        }
        return Array.from(new Set(returnValue));
    }
};
MyFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'myFilter'
    })
], MyFilterPipe);



/***/ }),

/***/ "../../../../../src/app/services/courses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CoursesService = class CoursesService {
    constructor(http) {
        this.http = http;
    }
    getCourseData() {
        return this.http.get('./assets/testdata/course.stub.json');
    }
};
CoursesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CoursesService);



/***/ }),

/***/ "../../../../../src/app/services/routeprovider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDataResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_service__ = __webpack_require__("../../../../../src/app/services/courses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CourseDataResolver = class CourseDataResolver {
    constructor(colleagueService) {
        this.colleagueService = colleagueService;
    }
    resolve(route, state) {
        return this.colleagueService.getCourseData();
    }
};
CourseDataResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */]])
], CourseDataResolver);



/***/ }),

/***/ "../../../../../src/app/training/training-filter-bar/training-filter-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training-filter-bar/training-filter-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui basic segment\">\n  <sui-search\n              optionsField=\"title\"\n              (input)=\"onSearchChange($event.target.value)\"></sui-search>\n</div>\n\n<div class=\"ui form basic segment\">\n  <div class=\"grouped fields\">\n    <div class=\"field\">\n      <div class=\"ui toggle checkbox\">\n        <input name=\"public\" type=\"checkbox\">\n        <label>Hide started courses</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui toggle checkbox\">\n        <input name=\"public\" type=\"checkbox\">\n        <label>Show suggestions</label>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"ui basic segment\">\n  <div class=\"ui floating dropdown labeled icon button\" suiDropdown>\n    <i class=\"filter icon\"></i>\n    <span class=\"text\">Category Filter</span>\n    <div class=\"menu\" suiDropdownMenu>\n      <div class=\"ui icon search input\">\n        <i class=\"search icon\"></i>\n        <input placeholder=\"Search tags...\" type=\"text\">\n      </div>\n      <div class=\"divider\"></div>\n      <div class=\"header\">\n        <i class=\"tags icon\"></i>\n        Tag Label\n      </div>\n      <div class=\"item\" *ngFor=\"let tag of tags\">\n        <div class=\"ui pink empty circular label\"></div>\n        {{ tag }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/training/training-filter-bar/training-filter-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingFilterBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TrainingFilterBarComponent = class TrainingFilterBarComponent {
    constructor() {
        this.typesearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ngOnInit() {
    }
    onSearchChange(searchValue) {
        this.typesearch.emit(searchValue);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], TrainingFilterBarComponent.prototype, "tags", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], TrainingFilterBarComponent.prototype, "typesearch", void 0);
TrainingFilterBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-training-filter-bar',
        template: __webpack_require__("../../../../../src/app/training/training-filter-bar/training-filter-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training/training-filter-bar/training-filter-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrainingFilterBarComponent);



/***/ }),

/***/ "../../../../../src/app/training/training-month-list/training-month-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training-month-list/training-month-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment basic\">\n\n  <div class=\"ui segments\">\n    <div class=\"ui segment\" *ngFor=\"let month of months\">\n\n      <div class=\"ui grid\">\n        <div class=\"row\">\n          <div class=\"column ten wide\">\n            {{ month.month }}\n          </div>\n          <div class=\"column six wide\">\n            <a class=\"ui horizontal label\">\n              <i class=\"book icon\"></i>\n              {{ month.count }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/training/training-month-list/training-month-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingMonthListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TrainingMonthListComponent = class TrainingMonthListComponent {
    constructor() {
        this.months = [
            { month: 'januari', count: 0 },
            { month: 'februari', count: 0 },
            { month: 'maart', count: 0 },
            { month: 'april', count: 0 },
            { month: 'mei', count: 0 },
            { month: 'juni', count: 0 },
            { month: 'juli', count: 0 },
            { month: 'augustus', count: 0 },
            { month: 'september', count: 0 },
            { month: 'october', count: 0 },
            { month: 'november', count: 0 },
            { month: 'december', count: 0 }
        ];
    }
    ngOnInit() {
    }
    updateMonthCount(values) {
        values.forEach(month => {
            this.months[month.monthnr].count = month.count;
        });
    }
};
TrainingMonthListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-training-month-list',
        template: __webpack_require__("../../../../../src/app/training/training-month-list/training-month-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training/training-month-list/training-month-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrainingMonthListComponent);



/***/ }),

/***/ "../../../../../src/app/training/training-overview/training-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training-overview/training-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui pink segment attached bottom\" (click)=\"panelOpen = !panelOpen\">\n  <div class=\"ui middle aligned grid\">\n    <div class=\"four wide column \"><h2>{{ course.title }}</h2></div>\n    <div class=\"four wide column\">{{ course.subtitle }}\n    </div>\n    <div class=\"two wide column\">\n      <div class=\"ui right floated relaxed list\">\n        <div class=\"item\" *ngFor=\"let date of course.dates\">\n          <i class=\"calendar middle aligned icon\"></i>\n          <div class=\"content\">\n            <div class=\"description\">{{ date.datetime | date: 'dd/MM/yyyy'}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"two wide right aligned column\">\n      <h3>\n        <i class=\"student icon\"></i>\n        {{ course.subscriptions.length }} / {{course.availableplaces}}\n      </h3>\n    </div>\n    <div class=\"four wide right aligned floated column\">\n      <button class=\"ui pink right labeled icon button\">\n        Subscribe\n        <i class=\"hand peace icon\"></i>\n      </button>\n    </div>\n  </div>\n\n</div>\n<sui-accordion>\n  <sui-accordion-panel [(isOpen)]=\"panelOpen\" [isDisabled]=\"true\">\n    <div content class=\"ui segment\">\n      <div class=\"row\">\n        <div class=\"ui two column grid\">\n          <div class=\"column four wide\">\n            <div class=\"ui tiny fluid vertical steps\">\n              <div class=\"step\" *ngFor=\"let date of course.dates\">\n                <i class=\"calendar icon\"></i>\n                <div class=\"content\">\n                  <div class=\"title\">{{date.sessionname}}</div>\n                  <div class=\"description\">{{ date.datetime | date: 'dd/MM/yyyy'}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"column nine wide\">\n            <div class=\"ui segment basic\">\n              <img class=\"ui small left floated image\"\n                   src=\"http://www.legobatman.com/assets/media/global/header/batwink-loop.gif\">\n              <h2>{{ course.title }}</h2>\n              <p>\n                {{ course.details }}\n              </p>\n            </div>\n          </div>\n\n          <div class=\"column three wide center aligned\">\n            <h2>Participants</h2>\n            <div class=\"ui list\">\n              <div class=\"item\" *ngFor=\"let subscriber of course.subscriptions\">\n                <img class=\"ui avatar image\"\n                     src=\"http://clipart.info/images/ccovers/1495576485lego-batman-head-png-clipart.png\">\n                <div class=\"content\">\n                  <a class=\"header\">{{ subscriber.subscribername }}</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row ui segment basic\">\n          <a class=\"ui pink label\" *ngFor=\"let tag of course.tags\">{{tag.tagname}}</a>\n        </div>\n      </div>\n    </div>\n  </sui-accordion-panel>\n</sui-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/training/training-overview/training-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_courses_model__ = __webpack_require__("../../../../../src/app/model/courses.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TrainingOverviewComponent = class TrainingOverviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_courses_model__["a" /* Course */])
], TrainingOverviewComponent.prototype, "course", void 0);
TrainingOverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-training-overview',
        template: __webpack_require__("../../../../../src/app/training/training-overview/training-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training/training-overview/training-overview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrainingOverviewComponent);



/***/ }),

/***/ "../../../../../src/app/training/training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n\n  <div class=\"column ui basic segment\">\n    <div class=\"ui right rail\">\n      <app-training-month-list></app-training-month-list>\n    </div>\n\n    <div class=\"ui left rail\">\n      <app-training-filter-bar [tags]=\"result\" (typesearch)=\"setfilter($event)\"></app-training-filter-bar>\n    </div>\n\n    <h2>Start in januari</h2>\n    <div *ngFor=\"let course of courses | myFilter : 'tagname' : filterparameter\">\n    <app-training-overview [course]=\"course\"></app-training-overview>\n    </div>\n\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_month_list_training_month_list_component__ = __webpack_require__("../../../../../src/app/training/training-month-list/training-month-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TrainingComponent = class TrainingComponent {
    constructor(route) {
        this.route = route;
        this.result = [];
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.courses = data['courses'];
        });
        this.monthcounter();
        this.tagsetter();
    }
    setfilter(filterstring) {
        this.filterparameter = filterstring;
    }
    tagsetter() {
        const subarray = [];
        this.courses.forEach(course => {
            course.tags.forEach(tag => {
                subarray.push(tag.tagname);
            });
        });
        this.result = Array.from(new Set(subarray));
    }
    monthcounter() {
        const monthcounterlist = [];
        this.courses.forEach(course => {
            course.dates.forEach(date => {
                monthcounterlist.push(new Date(date.datetime).getMonth());
            });
        });
        const results = new Counter(monthcounterlist);
        const updatearray = [{ monthnr: 1, count: 0 }];
        for (const [number, times] of results.entries()) {
            updatearray.push({ 'monthnr': number, 'count': times });
        }
        this.monthlist.updateMonthCount(updatearray);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TrainingComponent.prototype, "filterparameter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__training_month_list_training_month_list_component__["a" /* TrainingMonthListComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__training_month_list_training_month_list_component__["a" /* TrainingMonthListComponent */])
], TrainingComponent.prototype, "monthlist", void 0);
TrainingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-training',
        template: __webpack_require__("../../../../../src/app/training/training.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training/training.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
], TrainingComponent);

// counter class to implement easy counting
// https://stackoverflow.com/questions/17313268/idiomatically-find-the-number-of-occurrences-a-given-value-has-in-an-array
class Counter extends Map {
    constructor(iter, key = null) {
        super();
        this.key = key || (x => x);
        for (const x of iter) {
            this.add(x);
        }
    }
    add(x) {
        x = this.key(x);
        this.set(x, (this.get(x) || 0) + 1);
    }
}
/* unused harmony export Counter */



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map