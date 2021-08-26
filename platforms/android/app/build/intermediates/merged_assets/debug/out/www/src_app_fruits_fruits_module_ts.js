(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_fruits_fruits_module_ts"],{

/***/ 3666:
/*!*************************************************!*\
  !*** ./src/app/fruits/fruits-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsPageRoutingModule": () => (/* binding */ FruitsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _fruits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruits.page */ 1045);




const routes = [
    {
        path: '',
        component: _fruits_page__WEBPACK_IMPORTED_MODULE_0__.FruitsPage
    }
];
let FruitsPageRoutingModule = class FruitsPageRoutingModule {
};
FruitsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FruitsPageRoutingModule);



/***/ }),

/***/ 8468:
/*!*****************************************!*\
  !*** ./src/app/fruits/fruits.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsPageModule": () => (/* binding */ FruitsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fruits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruits-routing.module */ 3666);
/* harmony import */ var _fruits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits.page */ 1045);







let FruitsPageModule = class FruitsPageModule {
};
FruitsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fruits_routing_module__WEBPACK_IMPORTED_MODULE_0__.FruitsPageRoutingModule
        ],
        declarations: [_fruits_page__WEBPACK_IMPORTED_MODULE_1__.FruitsPage]
    })
], FruitsPageModule);



/***/ }),

/***/ 1045:
/*!***************************************!*\
  !*** ./src/app/fruits/fruits.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsPage": () => (/* binding */ FruitsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_fruits_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fruits.page.html */ 3160);
/* harmony import */ var _fruits_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits.page.scss */ 6811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.page */ 9660);








// service



let FruitsPage = class FruitsPage {
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
            console.log(this.datas);
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
                    if (resulta.fleuraison === this.datas && resulta.type === 'Fruit') {
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
FruitsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__.PlantesService },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet }
];
FruitsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fruits',
        template: _raw_loader_fruits_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fruits_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FruitsPage);



/***/ }),

/***/ 6811:
/*!*****************************************!*\
  !*** ./src/app/fruits/fruits.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item, ion-list, ion-item-options, ion-item-option {\n  --ion-background-color: transparent !important;\n}\n\n.my-custom-modal .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZydWl0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBQ0U7RUFDRSwrQkFBQTtBQUVKOztBQUFFO0VBQ0UseURBQUE7QUFHSjs7QUFERTtFQUNFLDhDQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUtKIiwiZmlsZSI6ImZydWl0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZjE5O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y1YWYxOSwgI2YxMjcxMSk7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLGlvbi1saXN0LGlvbi1pdGVtLW9wdGlvbnMsaW9uLWl0ZW0tb3B0aW9uIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5teS1jdXN0b20tbW9kYWwgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 3160:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits/fruits.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Fruits</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let plante of (planteList)\" color=\"light\">\r\n    <ion-item-sliding>\r\n      <ion-item (click)=\"detail(plante.id)\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-img [src]=\"plante.image\"></ion-img>\r\n        </ion-thumbnail>\r\n        <ion-label>{{plante.nom }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"delete(plante.id,plante.image)\" color='red'>\r\n          <ion-icon name=\"trash-outline\" size=\"small\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"update(plante.id,plante.fleuraison)\" color='red'>\r\n          <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_fruits_fruits_module_ts.js.map