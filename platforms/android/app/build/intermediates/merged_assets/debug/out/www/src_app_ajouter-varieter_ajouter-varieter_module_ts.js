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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ajouter_varieter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ajouter-varieter.page.html */ 9047);
/* harmony import */ var _ajouter_varieter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-varieter.page.scss */ 7713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);




// formulaire



// base de données



let AjouterVarieterPage = class AjouterVarieterPage {
    constructor(router, alertController, formBuilder, afDB, firestore, toastCtrl) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.afDB = afDB;
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.varieter = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
        });
    }
    get errorControl() {
        return this.varieter.controls;
    }
    addVarieter() {
        if (!this.varieter.valid) {
            this.message = 'enter une valeur dans le champ';
            return false;
        }
        else {
            this.firestore
                .collection('Variete')
                .add({
                nom: this.varieter.value.nom,
            })
                .then((retour) => {
                if (retour.id == null) {
                    this.message = "la variétèe n'a pas pu être enregistré ";
                    this.toastCtrl.showToast(this.message);
                }
                else {
                    this.message = 'la variétèe à était enregistré vous pouvez en saisir une autre';
                    this.toastCtrl.showToast(this.message);
                }
            });
        }
    }
};
AjouterVarieterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__.IonicToastService }
];
AjouterVarieterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqb3V0ZXItdmFyaWV0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDQTtFQUNJLHlEQUFBO0FBRUo7O0FBQUE7RUFDSSw4Q0FBQTtBQUdKIiwiZmlsZSI6ImFqb3V0ZXItdmFyaWV0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmNWFmMTksICNmMTI3MTEpO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  color=\"light\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  color=\"light\" >ajouter une variétèe</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content > \r\n      <form (ngSubmit)=\"addVarieter()\" color=\"light\" [formGroup]=\"varieter\" >\r\n        <ion-item > \r\n          <ion-label color=\"light\">nom de la fleur:</ion-label>\r\n          <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" formControlName=\"nom\" ></ion-input>\r\n           <!-- Error messages -->\r\n          <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\"  class=\"color\">\r\n            champ obligatoire \r\n          </span>\r\n          <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\"  class=\"color\">\r\n            minimun 2 caractéres\r\n          </span>\r\n        </ion-item>  \r\n\r\n    <ion-button color=\"light\" type=\"submit\" expand=\"block\">Valider</ion-button>\r\n    </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ajouter-varieter_ajouter-varieter_module_ts.js.map