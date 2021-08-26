(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_details_details_module_ts"],{

/***/ 5048:
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 1735);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 396:
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 5048);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 1735);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 1735:
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 9795);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 8202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ 8274);





// service


let DetailsPage = class DetailsPage {
    constructor(dataService, plantesService, afSG) {
        this.dataService = dataService;
        this.plantesService = plantesService;
        this.afSG = afSG;
        this.planteDetail = [];
    }
    ngOnInit() {
        this.id = this.dataService.getData('id');
        this.plantesService.getDetailPlante(this.id).then(detailPlante => {
            this.planteDetail.push(detailPlante);
            console.log(this.planteDetail);
            this.afSG.ref('/' + detailPlante.image).getDownloadURL().subscribe(imgUrl => {
                this.planteDetail[0].image = imgUrl;
                console.log(this.planteDetail);
            });
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__.PlantesService },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsPage);



/***/ }),

/***/ 8202:
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item, ion-list, ion-card {\n  --ion-background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDRTtFQUNFLHlEQUFBO0FBRUo7O0FBQUU7RUFDRSw4Q0FBQTtBQUdKIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZjE5O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y1YWYxOSwgI2YxMjcxMSk7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLGlvbi1saXN0LGlvbi1jYXJkIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 9795:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>details de la plante</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card  *ngFor =\"let plante of (planteDetail)\">\r\n    <!-- <img src=\"{{ plante.image }}\" /> -->\r\n    <ion-img [src]=\"plante.image\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-title>{{ plante.nom }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-list-header>\r\n          <h2>Détail de la plante</h2>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"../../assets/images/iconDetails/icons8-plant-64.png\"/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ plante.variete }}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"../../assets/images/iconDetails/icons8-hauteur-30.png\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ plante.hauteur }}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"../../assets/images/iconDetails/icons8-processus.gif\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ plante.fleuraison }}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"../../assets/images/iconDetails/icons8-inverser-les-couleurs-30.png\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ plante.couleur }}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"../../assets/images/iconDetails/icons8-modifier-les-icônes-aligner-le-texte-à-gauche-32.png\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ plante.description }}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_details_details_module_ts.js.map