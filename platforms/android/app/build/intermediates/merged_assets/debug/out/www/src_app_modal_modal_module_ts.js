(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_modal_modal_module_ts"],{

/***/ 9130:
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": () => (/* binding */ ModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 9660);




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 2641:
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": () => (/* binding */ ModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 9130);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page */ 9660);







let ModalPageModule = class ModalPageModule {
};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
    })
], ModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modal_modal_module_ts.js.map