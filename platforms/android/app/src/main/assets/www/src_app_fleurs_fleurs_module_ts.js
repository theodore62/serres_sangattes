(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_fleurs_fleurs_module_ts"],{

/***/ 6802:
/*!*************************************************!*\
  !*** ./src/app/fleurs/fleurs-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleursPageRoutingModule": () => (/* binding */ FleursPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _fleurs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleurs.page */ 9601);




const routes = [
    {
        path: '',
        component: _fleurs_page__WEBPACK_IMPORTED_MODULE_0__.FleursPage
    }
];
let FleursPageRoutingModule = class FleursPageRoutingModule {
};
FleursPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FleursPageRoutingModule);



/***/ }),

/***/ 6728:
/*!*****************************************!*\
  !*** ./src/app/fleurs/fleurs.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleursPageModule": () => (/* binding */ FleursPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fleurs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleurs-routing.module */ 6802);
/* harmony import */ var _fleurs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleurs.page */ 9601);







let FleursPageModule = class FleursPageModule {
};
FleursPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fleurs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FleursPageRoutingModule
        ],
        declarations: [_fleurs_page__WEBPACK_IMPORTED_MODULE_1__.FleursPage]
    })
], FleursPageModule);



/***/ }),

/***/ 9601:
/*!***************************************!*\
  !*** ./src/app/fleurs/fleurs.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleursPage": () => (/* binding */ FleursPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_fleurs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fleurs.page.html */ 4245);
/* harmony import */ var _fleurs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleurs.page.scss */ 5018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.page */ 9660);









// service



let FleursPage = class FleursPage {
    constructor(firestore, dataService, router, plantesService, afSG, alertController, modalController, routerOutlet, navCtrl) {
        this.firestore = firestore;
        this.dataService = dataService;
        this.router = router;
        this.plantesService = plantesService;
        this.afSG = afSG;
        this.alertController = alertController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.tableauPlante = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.datas = this.dataService.getData('data');
            this.planteList = yield this.initializeItems();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const teste = yield this.initializeItems();
            console.log('Begin async operation');
            setTimeout(() => {
                this.planteList = teste;
                console.log('Async operation has ended');
                event.target.complete();
            }, 2000);
        });
    }
    initializeItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.tableauPlante = [];
            const planteListe = yield this.plantesService.getPlanteList();
            planteListe.forEach((resulta) => {
                if (resulta.fleuraison === this.datas) {
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
                            -1 ||
                        currentPlant.de.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    detail(idPlante) {
        this.dataService.setData('id', idPlante);
        this.router.navigateByUrl('/details');
    }
    delete(idPlante, url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.afSG.refFromURL(url).delete();
            this.plantesService.deletePlante(idPlante);
            this.tableauPlante = [];
            this.planteList = yield this.initializeItems();
            console.log(this.planteList);
        });
    }
    update(idPlante, anneeFleuraison) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                cssClass: 'my-custom-class',
                componentProps: { data: 'plante', id: idPlante, fleuraison: anneeFleuraison },
            });
            return yield modal.present();
        });
    }
};
FleursPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__.PlantesService },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
FleursPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fleurs',
        template: _raw_loader_fleurs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fleurs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FleursPage);



/***/ }),

/***/ 5018:
/*!*****************************************!*\
  !*** ./src/app/fleurs/fleurs.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-searchbar,\nion-toolbar,\nion-label,\nion-item,\nion-icon,\nion-back-button {\n  color: #fff;\n}\n\nion-button {\n  --background: #4070a6;\n}\n\nion-item, ion-list, ion-item-options, ion-item-option {\n  --ion-background-color: transparent !important;\n}\n\n.my-custom-modal .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFFRSwrQkFBQTtBQUNGOztBQUdBO0VBRUUsV0FBQTtFQUNBLHlEQUFBO0FBREY7O0FBUUE7Ozs7Ozs7RUFPRSxXQUFBO0FBTEY7O0FBT0E7RUFDRSxxQkFBQTtBQUpGOztBQU1BO0VBQ0UsOENBQUE7QUFIRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRkYiLCJmaWxlIjoiZmxldXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLy92MlxyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzY2YTA7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vdjJcclxuICBjb2xvcjogI2ZmZjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzMzNjZhMCwgIzllYjdkMik7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS8vXHJcbi8vdjJcclxuaW9uLXRpdGxlLFxyXG5pb24tc2VhcmNoYmFyLFxyXG5pb24tdG9vbGJhcixcclxuaW9uLWxhYmVsLFxyXG5pb24taXRlbSxcclxuaW9uLWljb24sXHJcbmlvbi1iYWNrLWJ1dHRvbiAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzQwNzBhNjtcclxufVxyXG5pb24taXRlbSxpb24tbGlzdCxpb24taXRlbS1vcHRpb25zLGlvbi1pdGVtLW9wdGlvbiB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubXktY3VzdG9tLW1vZGFsIC5tb2RhbC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDIwJTtcclxuICB0b3A6IDgwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGRpc3BsYXk6IGJsb2NrOyAgXHJcbn0iXX0= */");

/***/ }),

/***/ 4245:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fleurs/fleurs.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Fleurs</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\" ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let plante of (planteList)\" >\r\n    <ion-item-sliding>\r\n      <ion-item (click)=\"detail(plante.id)\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-img [src]=\"plante.image\"></ion-img>\r\n        </ion-thumbnail>\r\n        <ion-label>{{plante.nom }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"delete(plante.id,plante.image)\" color='red'>\r\n          <ion-icon name=\"trash-outline\" size=\"small\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"update(plante.id,plante.fleuraison)\" color='red'>\r\n          <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_fleurs_fleurs_module_ts.js.map