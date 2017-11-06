webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/todo.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOGGLE_TODO; });
var ADD_TODO = 'ADD_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
//# sourceMappingURL=todo.actions.js.map

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_todo_reducer__ = __webpack_require__("../../../../../src/app/reducers/todo.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_container_container_component__ = __webpack_require__("../../../../../src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_todo_input_todo_input_component__ = __webpack_require__("../../../../../src/app/components/todo-input/todo-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_priority_directive__ = __webpack_require__("../../../../../src/app/directives/priority.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_container_container_component__["a" /* ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_todo_input_todo_input_component__["a" /* TodoInputComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_priority_directive__["a" /* PriorityDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot({
                todo: __WEBPACK_IMPORTED_MODULE_5__reducers_todo_reducer__["a" /* todoReducer */]
            }, {
                initialState: {
                    todo: [{
                            id: 1509995182175,
                            description: 'Todo test',
                            responsible: 'Juanda',
                            priority: 'Low',
                            done: false
                        }]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                maxAge: 25 // Retain last 25 states
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__components_container_container_component__["a" /* ContainerComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\r\n<div class=\"container\">\r\n  <h2>NgRx Todo</h2>\r\n</div>\r\n<app-todo-input\r\n    (addTodoEvent)=\"addTodo($event)\"\r\n    [priorities]=\"priorities\">\r\n</app-todo-input>\r\n<app-todo-list\r\n    [todoList$]=\"todos$ | async\"\r\n    (toggleTodoEvent)=\"toggleTodo($event)\">\r\n</app-todo-list>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_todo_actions__ = __webpack_require__("../../../../../src/app/actions/todo.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerComponent = (function () {
    function ContainerComponent(_store) {
        this._store = _store;
        this.priorities = ['Low', 'Medium', 'High'];
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.todos$ = this._store.select('todo');
    };
    ContainerComponent.prototype.addTodo = function (todo) {
        todo.id = new Date().valueOf();
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_todo_actions__["a" /* ADD_TODO */], payload: todo });
    };
    ContainerComponent.prototype.toggleTodo = function (todo) {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_todo_actions__["c" /* TOGGLE_TODO */], payload: todo });
    };
    return ContainerComponent;
}());
ContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-container',
        template: __webpack_require__("../../../../../src/app/components/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/container/container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], ContainerComponent);

var _a;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo-input/todo-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid.ng-touched:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n.ng-invalid.ng-untouched:not(form) {\r\n  border-left: 5px solid darkgray; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-input/todo-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)=\"addTodo();todoForm.reset()\"\r\n          #todoForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <input [(ngModel)]=\"todo.description\"\r\n                   #description=\"ngModel\"\r\n                   name=\"description\"\r\n                   id=\"description\"\r\n                   placeholder=\"Todo description\"\r\n                   class=\"form-control\"\r\n                   minlength=\"5\"\r\n                   maxlength=\"50\"\r\n                   required/>\r\n            <div *ngIf=\"description.errors && (description.dirty || description.touched)\"\r\n                 class=\"alert alert-danger\">\r\n                <div [hidden]=\"!description.errors.required\">\r\n                    Description is required!\r\n                </div>\r\n                <div [hidden]=\"!description.errors.minlength\">\r\n                    Description must be at least 5 characters long.\r\n                </div>\r\n                <div [hidden]=\"!description.errors.maxlength\">\r\n                    Description cannot be more than 50 characters long.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"responsible\">Responsible</label>\r\n            <input [(ngModel)]=\"todo.responsible\"\r\n                   #responsible=\"ngModel\"\r\n                   name=\"responsible\"\r\n                   id=\"responsible\"\r\n                   placeholder=\"Responsible\"\r\n                   class=\"form-control\"\r\n                   minlength=\"3\"\r\n                   maxlength=\"30\"\r\n                   required/>\r\n            <div *ngIf=\"responsible.errors && (responsible.dirty || responsible.touched)\"\r\n                 class=\"alert alert-danger\">\r\n                <div [hidden]=\"!responsible.errors.required\">\r\n                    Responsible is required!\r\n                </div>\r\n                <div [hidden]=\"!responsible.errors.minlength\">\r\n                    Responsible must be at least 5 characters long.\r\n                </div>\r\n                <div [hidden]=\"!responsible.errors.maxlength\">\r\n                    Responsible cannot be more than 50 characters long.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Priority</label>\r\n            <select [(ngModel)]=\"todo.priority\"\r\n                    #priority=\"ngModel\"\r\n                    name=\"priority\"\r\n                    id=\"priority\"\r\n                    class=\"form-control\"\r\n                    required>\r\n                <option *ngFor=\"let x of priorities\"\r\n                        [ngValue]=\"x\"\r\n                        [selected]=\"priority.value===x\">\r\n                    {{x}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <button class=\"btn btn-primary\" [disabled]=\"!todoForm.form.valid\">Add todo</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/todo-input/todo-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoInputComponent = (function () {
    function TodoInputComponent() {
        this.addTodoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */];
    }
    TodoInputComponent.prototype.ngOnInit = function () {
        this._resetTodo();
    };
    TodoInputComponent.prototype.addTodo = function () {
        this.addTodoEvent.emit(this.todo);
        this._resetTodo();
    };
    TodoInputComponent.prototype._resetTodo = function () {
        this.todo = {
            id: 0,
            description: '',
            responsible: '',
            priority: 'Low',
            done: false
        };
    };
    return TodoInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TodoInputComponent.prototype, "addTodoEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TodoInputComponent.prototype, "priorities", void 0);
TodoInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-todo-input',
        template: __webpack_require__("../../../../../src/app/components/todo-input/todo-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todo-input/todo-input.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoInputComponent);

//# sourceMappingURL=todo-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-through {\r\n  text-decoration: line-through;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n        <tr>\r\n            <th></th>\r\n            <th>Description</th>\r\n            <th>Responsible</th>\r\n            <th>Priority</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let todo of todoList$\">\r\n            <th><input type=\"checkbox\" [ngModel]=\"todo.done\" (click)=\"toggleTodo(todo)\"/></th>\r\n            <td><span [class.line-through]=\"todo.done\">{{todo.description}}</span></td>\r\n            <td><span [class.line-through]=\"todo.done\">{{todo.responsible}}</span></td>\r\n            <td><span [appPriority]=\"todo.priority\" class=\"badge\">{{todo.priority}}</span></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = (function () {
    function TodoListComponent() {
        this.toggleTodoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.toggleTodoEvent.emit(todo);
    };
    return TodoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "todoList$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "toggleTodoEvent", void 0);
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoListComponent);

//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/priority.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriorityDirective = (function () {
    function PriorityDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    PriorityDirective.prototype.ngOnInit = function () {
        switch (this.appPriority) {
            case 'Low':
                this.classPriority = 'badge-success';
                break;
            case 'Medium':
                this.classPriority = 'badge-warning';
                break;
            case 'High':
                this.classPriority = 'badge-danger';
                break;
            default:
                this.classPriority = 'badge-success';
        }
        this.renderer.addClass(this.el.nativeElement, this.classPriority);
    };
    return PriorityDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PriorityDirective.prototype, "appPriority", void 0);
PriorityDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appPriority]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], PriorityDirective);

var _a, _b;
//# sourceMappingURL=priority.directive.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/todo.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = todoReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_todo_actions__ = __webpack_require__("../../../../../src/app/actions/todo.actions.ts");

function todoReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_todo_actions__["a" /* ADD_TODO */]:
            return state.concat([
                Object.assign({}, {
                    id: action.payload.id,
                    description: action.payload.description,
                    responsible: action.payload.responsible,
                    priority: action.payload.priority,
                    done: false
                })
            ]);
        case __WEBPACK_IMPORTED_MODULE_0__actions_todo_actions__["b" /* REMOVE_TODO */]:
            return state.filter(function (todo) { return todo.id !== action.payload.id; });
        case __WEBPACK_IMPORTED_MODULE_0__actions_todo_actions__["c" /* TOGGLE_TODO */]:
            return state.map(function (todo) {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return Object.assign({}, todo, {
                    done: !action.payload.done
                });
            });
        default:
            return state;
    }
}
//# sourceMappingURL=todo.reducer.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map