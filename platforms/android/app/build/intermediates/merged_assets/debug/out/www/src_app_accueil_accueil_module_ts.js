(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_accueil_accueil_module_ts"],{

/***/ 2895:
/*!***************************************************!*\
  !*** ./src/app/accueil/accueil-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageRoutingModule": () => (/* binding */ AccueilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page */ 5672);




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_0__.AccueilPage
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ 8913:
/*!*******************************************!*\
  !*** ./src/app/accueil/accueil.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageModule": () => (/* binding */ AccueilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil-routing.module */ 2895);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page */ 5672);







let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccueilPageRoutingModule
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_1__.AccueilPage]
    })
], AccueilPageModule);



/***/ }),

/***/ 5672:
/*!*****************************************!*\
  !*** ./src/app/accueil/accueil.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPage": () => (/* binding */ AccueilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_accueil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accueil.page.html */ 1127);
/* harmony import */ var _accueil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page.scss */ 6937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);







let AccueilPage = class AccueilPage {
    constructor(router, dataService, alertController) {
        this.router = router;
        this.dataService = dataService;
        this.alertController = alertController;
    }
    ngOnInit() { }
    fleurs(data) {
        this.dataService.setData('data', data);
        this.router.navigateByUrl('/fleurs');
    }
    fruits(data) {
        this.dataService.setData('data', data);
        this.router.navigateByUrl('/fruits');
    }
    legumes(data) {
        this.dataService.setData('data', data);
        this.router.navigateByUrl('/legumes');
    }
    ajouter() {
        // this.dataService.setData( 'idAnnonce',idAnnonce);
        this.router.navigateByUrl('/ajouter-fleur');
    }
    alertRadioFleurs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Radio',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Annuelles',
                        value: 'Annuelles',
                        handler: () => {
                            console.log('Radio 1 selected');
                        },
                        checked: true,
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Bisannuelles',
                        value: 'Bisannuelles',
                        handler: () => {
                            console.log('Radio 2 selected');
                        },
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Vivaces',
                        value: 'Vivaces',
                        handler: () => {
                            console.log('Radio 3 selected');
                        },
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Aromatiques',
                        value: 'Aromatiques',
                        handler: () => {
                            console.log('Radio 3 selected');
                        },
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (value) => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Ok',
                        handler: (data1) => {
                            console.log('Confirm Ok');
                            this.fleurs(data1);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    alertRadioFruitLegumes(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Radio',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Ete',
                        value: 'Ete',
                        handler: () => {
                            console.log(data);
                            console.log('Radio 1 selected');
                        },
                        checked: true,
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Hiver',
                        value: 'Hiver',
                        handler: () => {
                            console.log('Radio 2 selected');
                        },
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Ok',
                        handler: (data2) => {
                            console.log(data2);
                            if (data === 'fruits') {
                                this.fruits(data2);
                            }
                            else {
                                this.legumes(data2);
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
AccueilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AccueilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-accueil',
        template: _raw_loader_accueil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accueil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccueilPage);



/***/ }),

/***/ 6937:
/*!*******************************************!*\
  !*** ./src/app/accueil/accueil.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-icon,\nion-buttons {\n  color: #fff;\n}\n\n#fleurs {\n  background-image: url('roses.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n#fond_fleurs {\n  background-color: silver;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin: 1em;\n  width: 100%;\n  height: 20%;\n  opacity: 0.8;\n  color: black;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n#fruits {\n  background-image: url('117981_w1024h1024c1cx2652cy2652.webp');\n  background-repeat: no-repeat;\n  background-position: center center;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n}\n\n#fond_fruits {\n  background-color: silver;\n}\n\n#legumes {\n  background-image: url('content_lg.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n}\n\n#fond_legumes {\n  background-color: silver;\n}\n\n#groupe {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (min-width: 500px) {\n  #groupe {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n  }\n\n  #fond_fleurs {\n    background-color: silver;\n    background-position: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin: 1em;\n    width: 100%;\n    height: 50%;\n    opacity: 0.8;\n    color: black;\n    font-size: 2.5em;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsK0JBQUE7QUFBRjs7QUFJQTtFQUVFLFdBQUE7RUFDQSx5REFBQTtBQUZGOztBQVFBOzs7RUFHRSxXQUFBO0FBTEY7O0FBU0E7RUFDRSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBRUUsd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsNkRBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtBQVBGOztBQVVBO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFQRjs7RUFTQTtJQUNFLHdCQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImFjY3VlaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLy92MlxyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzY2YTA7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vdjJcclxuICBjb2xvcjogI2ZmZjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzMzNjZhMCwgIzllYjdkMik7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLy9cclxuLy92MlxyXG5pb24tdGl0bGUsXHJcbmlvbi1pY29uLFxyXG5pb24tYnV0dG9ucyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0vL1xyXG4jZmxldXJzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Jvc2VzLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2ZvbmRfZmxldXJzIHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jZnJ1aXRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzLzExNzk4MV93MTAyNGgxMDI0YzFjeDI2NTJjeTI2NTIud2VicFwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb25kX2ZydWl0cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jbGVndW1lcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250ZW50X2xnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb25kX2xlZ3VtZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuI2dyb3VwZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAjZ3JvdXBlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICNmb25kX2ZsZXVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1127:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Accueil</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"ajouter()\" >\r\n      <ion-icon  size=\"large\" name=\"add-circle-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div id=\"groupe\">\r\n    <div id=\"fleurs\" (click)=\"alertRadioFleurs()\">\r\n      <div id=\"fond_fleurs\">\r\n        <ion-label>fleurs</ion-label>\r\n      </div>\r\n    </div>\r\n    <div id=\"fruits\" (click)=\"alertRadioFruitLegumes('fruits')\">\r\n      <div id=\"fond_fleurs\">\r\n        <ion-label>fruits</ion-label>\r\n      </div>\r\n    </div>\r\n    <div id=\"legumes\" (click)=\"alertRadioFruitLegumes('legumes')\">\r\n      <div id=\"fond_fleurs\">\r\n        <ion-label>legumes</ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_accueil_accueil_module_ts.js.map