(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_ajouter-varieter_ajouter-varieter_module_ts"],{

/***/ 7365:
/*!*********************************************************************!*\
  !*** ./src/app/ajouter-varieter/ajouter-varieter-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterVarieterPageRoutingModule": () => (/* binding */ AjouterVarieterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ajouter_varieter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-varieter.page */ 1995);




const routes = [
    {
        path: '',
        component: _ajouter_varieter_page__WEBPACK_IMPORTED_MODULE_0__.AjouterVarieterPage
    }
];
let AjouterVarieterPageRoutingModule = class AjouterVarieterPageRoutingModule {
};
AjouterVarieterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AjouterVarieterPageRoutingModule);



/***/ }),

/***/ 3444:
/*!*************************************************************!*\
  !*** ./src/app/ajouter-varieter/ajouter-varieter.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterVarieterPageModule": () => (/* binding */ AjouterVarieterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ajouter_varieter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-varieter-routing.module */ 7365);
/* harmony import */ var _ajouter_varieter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-varieter.page */ 1995);







let AjouterVarieterPageModule = class AjouterVarieterPageModule {
};
AjouterVarieterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ajouter_varieter_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjouterVarieterPageRoutingModule
        ],
        declarations: [_ajouter_varieter_page__WEBPACK_IMPORTED_MODULE_1__.AjouterVarieterPage]
    })
], AjouterVarieterPageModule);



/***/ }),

/***/ 1995:
/*!***********************************************************!*\
  !*** ./src/app/ajouter-varieter/ajouter-varieter.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterVarieterPage": () => (/* binding */ AjouterVarieterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ajouter_varieter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ajouter-varieter.page.html */ 9047);
/* harmony import */ var _ajouter_varieter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-varieter.page.scss */ 7713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _services_variete_variete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/variete/variete.service */ 1257);




// formulaire



// base de données



// service

let AjouterVarieterPage = class AjouterVarieterPage {
    constructor(router, alertController, formBuilder, afDB, firestore, toastCtrl, varieteService) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.afDB = afDB;
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.varieteService = varieteService;
        this.isSubmitted = false;
        this.tableauVariete = [];
        this.variete = {
            id: '',
            nom: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.affichage == undefined) {
                this.affichage = 'liste';
            }
            this.varieterFrom = this.formBuilder.group({
                nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            });
            this.varieteList = yield this.initializeItems();
        });
    }
    segmentChanged(ev) {
        this.affichage = ev.detail.value;
    }
    get errorControl() {
        return this.varieterFrom.controls;
    }
    addVarieter() {
        if (!this.varieterFrom.valid) {
            // this.variete.nom = this.varieterFrom.value.nom;
            this.message = 'enter une valeur dans le champ';
            this.toastCtrl.showToast(this.message);
        }
        else {
            this.variete.nom = this.varieterFrom.value.nom;
            this.varieteService.postPlanteList(this.variete).then((retour) => {
                if (retour.id == null) {
                    this.message = "les données n'ont pas pu être enregistrées";
                    this.toastCtrl.showToast(this.message);
                }
                else {
                    this.firestore.doc(`Variete/${retour.id}`).set({
                        id: retour.id,
                        nom: this.varieterFrom.value.nom,
                    });
                }
            });
        }
    }
    filterList(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.varieteList = yield this.initializeItems();
            const searchTerm = ev.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.varieteList = this.varieteList.filter((currentPlant) => {
                if (currentPlant.nom && searchTerm) {
                    return (currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const teste = yield this.initializeItems();
            console.log('Begin async operation');
            setTimeout(() => {
                this.varieteList = teste;
                console.log('Async operation has ended');
                event.target.complete();
            }, 2000);
        });
    }
    initializeItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.tableauVariete = [];
            this.tableauVariete = yield this.varieteService.getVarieteList();
            console.log(this.tableauVariete);
            return this.tableauVariete;
        });
    }
    delete(idPlante) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(idPlante);
            this.varieteService.deleteVariete(idPlante);
            this.tableauVariete = [];
            this.varieteList = yield this.initializeItems();
        });
    }
};
AjouterVarieterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__.AngularFireDatabase },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__.IonicToastService },
    { type: _services_variete_variete_service__WEBPACK_IMPORTED_MODULE_3__.VarieteService }
];
AjouterVarieterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ajouter-varieter',
        template: _raw_loader_ajouter_varieter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ajouter_varieter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AjouterVarieterPage);



/***/ }),

/***/ 6086:
/*!*************************************************!*\
  !*** ./src/app/services/ionic-toast.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicToastService": () => (/* binding */ IonicToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 476);



let IonicToastService = class IonicToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(data) {
        this.myToast = this.toast
            .create({
            message: data,
            duration: 2000,
            position: 'top',
            cssClass: 'message'
        })
            .then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
};
IonicToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController }
];
IonicToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], IonicToastService);



/***/ }),

/***/ 1257:
/*!*****************************************************!*\
  !*** ./src/app/services/variete/variete.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VarieteService": () => (/* binding */ VarieteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Operators */ 8049);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 8274);





let VarieteService = class VarieteService {
    constructor(firestore, afSG) {
        this.firestore = firestore;
        this.afSG = afSG;
        this.ref = 'Variete';
        this.varieteList = this.firestore.collection('Variete');
    }
    getVarieteList() {
        return this.varieteList.valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    postPlanteList(variete) {
        return this.varieteList.add(variete);
    }
    deleteVariete(id) {
        const url = '/' + id;
        return this.varieteList.doc(url).delete();
    }
};
VarieteService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage }
];
VarieteService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], VarieteService);



/***/ }),

/***/ 7713:
/*!*************************************************************!*\
  !*** ./src/app/ajouter-varieter/ajouter-varieter.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-icon,\nion-back-button {\n  color: #fff;\n}\n\nion-button {\n  --background: #4070a6;\n}\n\nion-item, ion-list {\n  --ion-background-color: transparent !important;\n}\n\n.ajouter {\n  font-size: larger;\n  padding: 0.5em;\n  text-align: center;\n}\n\n.bar {\n  border-top: green 25px !important;\n}\n\n.supprimer {\n  font-size: larger;\n  padding: 0.5em;\n  margin-top: 2em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqb3V0ZXItdmFyaWV0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUFBSjs7QUFJRTtFQUVFLFdBQUE7RUFDQSx5REFBQTtBQUZKOztBQVFFOzs7RUFHRSxXQUFBO0FBTEo7O0FBT0U7RUFDRSxxQkFBQTtBQUpKOztBQU1BO0VBQ0ksOENBQUE7QUFISjs7QUFPQTtFQUNDLGlCQUFBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQ0FBQTtBQUpGOztBQU9BO0VBRUUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoiYWpvdXRlci12YXJpZXRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIC8vdjJcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzY2YTA7XHJcbiAgICAvL3YxXHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZjE5O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAvL3YyXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjMzM2NmEwLCAjOWViN2QyKTtcclxuICAgIC8vdjFcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxuICB9XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS8vXHJcbiAgLy92MlxyXG4gIGlvbi10aXRsZSxcclxuICBpb24taWNvbixcclxuICBpb24tYmFjay1idXR0b24gIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzQwNzBhNjtcclxuICB9XHJcbmlvbi1pdGVtLGlvbi1saXN0IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWpvdXRlcntcclxuIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmJhcntcclxuICBib3JkZXItdG9wOiBncmVlbiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdXBwcmltZXJ7XHJcblxyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 9047:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajouter-varieter/ajouter-varieter.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">La gestion des Variétés</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <!-- Disabled Segment -->\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"liste\">\r\n      <ion-segment-button value=\"ajouter\">\r\n        <ion-label>\r\n          <ion-icon name=\"add-circle-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"liste\">\r\n        <ion-label>\r\n          <ion-icon name=\"list-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"affichage === 'ajouter' \">\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ajouter\" color=\"light\">Ajouter une Variété</ion-label>\r\n  </ion-item>\r\n  <form (ngSubmit)=\"addVarieter()\" color=\"light\" [formGroup]=\"varieterFrom\">\r\n    <ion-item>\r\n      <ion-label color=\"light\">nom de la Variété:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"Variété\" formControlName=\"nom\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-button type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n<ion-content *ngIf=\"affichage !== 'ajouter' \">\r\n\r\n  <ion-item>\r\n    <ion-label color=\"light\" class=\"supprimer\">Supprimer une Variété</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\" placeholder=\"recherche\"></ion-searchbar>\r\n  </ion-item>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let variete of (varieteList)\">\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label color=\"light\">{{variete.nom }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"delete(variete.id)\" color=\"red\">\r\n          <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_ajouter-varieter_ajouter-varieter_module_ts.js.map