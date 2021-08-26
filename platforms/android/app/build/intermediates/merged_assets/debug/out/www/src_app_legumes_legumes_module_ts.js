(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_legumes_legumes_module_ts"],{

/***/ 3220:
/*!***************************************************!*\
  !*** ./src/app/legumes/legumes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegumesPageRoutingModule": () => (/* binding */ LegumesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _legumes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legumes.page */ 2062);




const routes = [
    {
        path: '',
        component: _legumes_page__WEBPACK_IMPORTED_MODULE_0__.LegumesPage
    }
];
let LegumesPageRoutingModule = class LegumesPageRoutingModule {
};
LegumesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LegumesPageRoutingModule);



/***/ }),

/***/ 3055:
/*!*******************************************!*\
  !*** ./src/app/legumes/legumes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegumesPageModule": () => (/* binding */ LegumesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _legumes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legumes-routing.module */ 3220);
/* harmony import */ var _legumes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legumes.page */ 2062);







let LegumesPageModule = class LegumesPageModule {
};
LegumesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _legumes_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegumesPageRoutingModule
        ],
        declarations: [_legumes_page__WEBPACK_IMPORTED_MODULE_1__.LegumesPage]
    })
], LegumesPageModule);



/***/ }),

/***/ 2062:
/*!*****************************************!*\
  !*** ./src/app/legumes/legumes.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegumesPage": () => (/* binding */ LegumesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_legumes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./legumes.page.html */ 674);
/* harmony import */ var _legumes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legumes.page.scss */ 2677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.page */ 9660);








// service



let LegumesPage = class LegumesPage {
    constructor(firestore, dataService, router, plantesService, afSG, alertController, modalController, routerOutlet) {
        this.firestore = firestore;
        this.dataService = dataService;
        this.router = router;
        this.plantesService = plantesService;
        this.afSG = afSG;
        this.alertController = alertController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.tableauPlante = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.datas = this.dataService.getData('data');
            this.planteList = yield this.initializeItems();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.planteList = this.initializeItems();
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    initializeItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.tableauPlante.length <= 0) {
                const planteListe = yield this.plantesService.getPlanteList();
                planteListe.forEach((resulta) => {
                    if (resulta.fleuraison === this.datas && resulta.type === 'Legume') {
                        console.log(resulta.image);
                        this.afSG
                            .ref('/' + resulta.image)
                            .getDownloadURL()
                            .subscribe((imgUrl) => {
                            resulta.image = imgUrl;
                            this.tableauPlante.push(resulta);
                        });
                    }
                });
                console.log(this.tableauPlante);
            }
            return this.tableauPlante;
        });
    }
    filterList(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.planteList = yield this.initializeItems();
            const searchTerm = ev.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.planteList = this.planteList.filter((currentPlant) => {
                if (currentPlant.nom && searchTerm) {
                    return (currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1 ||
                        currentPlant.variete.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                            -1 ||
                        currentPlant.couleur.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                            -1 ||
                        currentPlant.hauteur.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                            -1);
                }
            });
        });
    }
    detail(idPlante) {
        this.dataService.setData('id', idPlante);
        this.router.navigateByUrl('/details');
    }
    delete(idPlante, url) {
        this.afSG.refFromURL(url).delete();
        this.plantesService.deletePlante(idPlante);
        window.location.assign('/fleurs');
    }
    update(idPlante, anneeFleuraison) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                cssClass: 'my-custom-class',
                componentProps: { id: idPlante, fleuraison: anneeFleuraison },
            });
            return yield modal.present();
        });
    }
};
LegumesPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__.PlantesService },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet }
];
LegumesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-legumes',
        template: _raw_loader_legumes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_legumes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LegumesPage);



/***/ }),

/***/ 2677:
/*!*******************************************!*\
  !*** ./src/app/legumes/legumes.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item, ion-list, ion-item-options, ion-item-option {\n  --ion-background-color: transparent !important;\n}\n\n.my-custom-modal .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZ3VtZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNFO0VBQ0UsK0JBQUE7QUFFSjs7QUFBRTtFQUNFLHlEQUFBO0FBR0o7O0FBREU7RUFDRSw4Q0FBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFLSiIsImZpbGUiOiJsZWd1bWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxuICB9XHJcbiAgaW9uLWl0ZW0saW9uLWxpc3QsaW9uLWl0ZW0tb3B0aW9ucyxpb24taXRlbS1vcHRpb24ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm15LWN1c3RvbS1tb2RhbCAubW9kYWwtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRvcDogODAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 674:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legumes/legumes.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Légumes</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let plante of (planteList)\" color=\"light\">\r\n    <ion-item-sliding>\r\n      <ion-item (click)=\"detail(plante.id)\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-img [src]=\"plante.image\"></ion-img>\r\n        </ion-thumbnail>\r\n        <ion-label>{{plante.nom }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"delete(plante.id,plante.image)\" color='red'>\r\n          <ion-icon name=\"trash-outline\" size=\"small\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"update(plante.id,plante.fleuraison)\" color='red'>\r\n          <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_legumes_legumes_module_ts.js.map