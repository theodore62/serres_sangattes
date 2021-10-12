(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_ajouter-fleur_ajouter-fleur_module_ts"],{

/***/ 3250:
/*!***************************************************************!*\
  !*** ./src/app/ajouter-fleur/ajouter-fleur-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterFleurPageRoutingModule": () => (/* binding */ AjouterFleurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ajouter_fleur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-fleur.page */ 1645);




const routes = [
    {
        path: '',
        component: _ajouter_fleur_page__WEBPACK_IMPORTED_MODULE_0__.AjouterFleurPage
    }
];
let AjouterFleurPageRoutingModule = class AjouterFleurPageRoutingModule {
};
AjouterFleurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AjouterFleurPageRoutingModule);



/***/ }),

/***/ 8206:
/*!*******************************************************!*\
  !*** ./src/app/ajouter-fleur/ajouter-fleur.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterFleurPageModule": () => (/* binding */ AjouterFleurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ajouter_fleur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-fleur-routing.module */ 3250);
/* harmony import */ var _ajouter_fleur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-fleur.page */ 1645);







let AjouterFleurPageModule = class AjouterFleurPageModule {
};
AjouterFleurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ajouter_fleur_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjouterFleurPageRoutingModule
        ],
        declarations: [_ajouter_fleur_page__WEBPACK_IMPORTED_MODULE_1__.AjouterFleurPage]
    })
], AjouterFleurPageModule);



/***/ }),

/***/ 1645:
/*!*****************************************************!*\
  !*** ./src/app/ajouter-fleur/ajouter-fleur.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterFleurPage": () => (/* binding */ AjouterFleurPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ajouter_fleur_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ajouter-fleur.page.html */ 701);
/* harmony import */ var _ajouter_fleur_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-fleur.page.scss */ 2538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);




// formulaire



// base de données




// service

//camera


let AjouterFleurPage = class AjouterFleurPage {
    constructor(router, alertController, formBuilder, afDB, firestore, toastCtrl, planteList, camera, afSG, loadingController) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.afDB = afDB;
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.planteList = planteList;
        this.camera = camera;
        this.afSG = afSG;
        this.loadingController = loadingController;
        this.isSubmitted = false;
        //url image à vide pour vérifiaction
        // ../../assets/images/img.png
        this.image = '';
        this.plante = {
            id: '',
            nom: '',
            variete: '',
            couleur: '',
            fleuraison: '',
            hauteur: '',
            description: '',
            type: '',
            de: '',
            a: '',
            image: '',
        };
        this.items = this.firestore.collection('Variete').valueChanges();
        this.buttonColor = '#9eb7d2';
        this.listMois = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'aout',
            'septembre',
            'octobre',
            'novembre',
            'décembre',
        ];
    }
    get errorControl() {
        return this.annonce.controls;
    }
    ngOnInit() {
        if (this.epoque == null) {
            this.epoqueFleuraison();
        }
        this.annonce = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            variete: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            couleur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            fleuraison: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            hauteur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            de: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            a: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ajouter() {
        this.router.navigateByUrl('/ajouter-varieter');
    }
    optionsfn() {
        this.epoque = this.theSelectObject.value;
    }
    epoqueFleuraison() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'type de la plante',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Fleur',
                        value: 'Fleur',
                        handler: () => {
                            // console.log('Radio 1 selected');
                        },
                        checked: true,
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Fruit',
                        value: 'Fruit',
                        handler: () => {
                            // console.log('Radio 2 selected');
                        },
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Legumes',
                        value: 'Legumes',
                        handler: () => {
                            // console.log('Radio 3 selected');
                        },
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (value) => {
                            // console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Ok',
                        handler: (data1) => {
                            console.log(data1);
                            this.epoque = data1;
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    addAnnonce() {
        console.log(this.annonce);
        if (!this.annonce.valid) {
            this.message = 'Veuillez veuillez compléter le formulaire';
            this.toastCtrl.showToast(this.message);
        }
        else {
            this.plante.nom = this.annonce.value.nom;
            this.plante.variete = this.annonce.value.variete;
            this.plante.couleur = this.annonce.value.couleur;
            this.plante.fleuraison = this.annonce.value.fleuraison;
            this.plante.hauteur = this.annonce.value.hauteur;
            this.plante.description = this.annonce.value.description;
            this.plante.type = this.annonce.value.type;
            this.plante.de = this.annonce.value.de;
            this.plante.a = this.annonce.value.a;
            this.url = this.image;
            console.log(this.url);
            if (this.url !== '') {
                console.log('ici');
                this.imagePath = new Date().getTime() + '.jpg';
                this.uploadFirebase();
                this.planteList.postPlanteList(this.plante).then((retour) => {
                    if (retour.id == null) {
                        this.message = "les données n'ont pas pu être enregistrées";
                        this.toastCtrl.showToast(this.message);
                    }
                    else {
                        this.firestore.doc(`Plantes/${retour.id}`).set({
                            id: retour.id,
                            nom: this.plante.nom,
                            variete: this.plante.variete,
                            couleur: this.plante.couleur,
                            fleuraison: this.plante.fleuraison,
                            hauteur: this.plante.hauteur,
                            description: this.plante.description,
                            type: this.plante.type,
                            de: this.plante.de,
                            a: this.plante.a,
                            image: this.imagePath,
                        });
                    }
                });
            }
            else {
                this.message = 'veuilliez rajouter une image';
                this.toastCtrl.showToast(this.message);
            }
        }
    }
    addPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const libraryImage = yield this.openLibrary();
            this.image = 'data:image/jpg;base64,' + libraryImage;
        });
    }
    openLibrary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            };
            return yield this.camera.getPicture(options);
        });
    }
    uploadFirebase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 2000,
            });
            //rajouter une conditions si url est vide de image pour bloquer la validation
            yield loading.present();
            this.upload = this.afSG
                .ref(this.imagePath)
                .putString(this.image, 'data_url');
            this.upload.then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.onDidDismiss();
                this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
                const alert = yield this.alertController.create({
                    header: 'Félicitation',
                    cssClass: ['color:white'],
                    message: 'Les données ont bien été enregistrées',
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
AjouterFleurPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__.AngularFireDatabase },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__.IonicToastService },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_3__.PlantesService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
AjouterFleurPage.propDecorators = {
    theSelectObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['type',] }]
};
AjouterFleurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-ajouter-fleur',
        template: _raw_loader_ajouter_fleur_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ajouter_fleur_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AjouterFleurPage);



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

/***/ 2538:
/*!*******************************************************!*\
  !*** ./src/app/ajouter-fleur/ajouter-fleur.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-icon,\nion-buttons {\n  color: #fff;\n}\n\nion-button {\n  --background: #9eb7d2;\n}\n\n#imageB {\n  --background: #7699bf;\n}\n\n.my-custom-interface .select-interface-option {\n  --color: #971e49;\n  --color-hover: #79193b;\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n\n.flex {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.img-box {\n  height: 200px;\n  overflow: hidden;\n}\n\nimg {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqb3V0ZXItZmxldXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsK0JBQUE7QUFBRjs7QUFJQTtFQUVFLFdBQUE7RUFDQSx5REFBQTtBQUZGOztBQVFBOzs7RUFHRSxXQUFBO0FBTEY7O0FBT0E7RUFDRSxxQkFBQTtBQUpGOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFLQTtFQUNFLDhDQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYWpvdXRlci1mbGV1ci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAvL3YyXHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzNjZhMDtcclxuICAvL3YxXHJcbiAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y1YWYxOTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLy92MlxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjMzM2NmEwLCAjOWViN2QyKTtcclxuICAvL3YxXHJcbiAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmNWFmMTksICNmMTI3MTEpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0vL1xyXG4vL3YyXHJcbmlvbi10aXRsZSxcclxuaW9uLWljb24sXHJcbmlvbi1idXR0b25zIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICM5ZWI3ZDI7XHJcbn1cclxuI2ltYWdlQiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzY5OWJmO1xyXG59XHJcbi5teS1jdXN0b20taW50ZXJmYWNlIC5zZWxlY3QtaW50ZXJmYWNlLW9wdGlvbiB7XHJcbiAgLS1jb2xvcjogIzk3MWU0OTtcclxuICAtLWNvbG9yLWhvdmVyOiAjNzkxOTNiO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uZmxleCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pbWctYm94IHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 701:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajouter-fleur/ajouter-fleur.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  color=\"light\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  color=\"light\">ajouter une plante</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"ajouter()\" >\r\n      <ion-icon  size=\"large\" name=\"add-circle-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-list style=\"background-color: silver;\">\r\n    <form (ngSubmit)=\"addAnnonce()\" [formGroup]=\"annonce\">\r\n      <ion-item>\r\n        <ion-label color=\"light\">Nom commun :</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" formControlName=\"nom\" ></ion-input>\r\n        \r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>  \r\n      <ion-item>\r\n        <ion-label color=\"light\">Variété:</ion-label>\r\n        <ion-select  color=\"light\" placeholder=\"Selectioner la varieté\" required formControlName=\"variete\"  >\r\n          <ion-select-option   *ngFor =\"let item of items |async\" value=\"{{ item.nom  }}\" >{{ item.nom }}</ion-select-option >\r\n        </ion-select>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label color=\"light\">Couleur:</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"couleur\"  required formControlName=\"couleur\"  ></ion-input>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>  \r\n      <ion-item *ngIf=\"epoque === 'Fleur' \">\r\n        <ion-label color=\"light\" >Epoque de fleuraison:</ion-label>   \r\n        <ion-select  color=\"light\" placeholder=\"Selectioner la fleuraison\" required formControlName=\"fleuraison\" *ngIf=\"epoque === 'Fleur' \">\r\n          <ion-select-option value=\"Annuelles\">Annuelles</ion-select-option>\r\n          <ion-select-option value=\"Bisannuelles\">Bisannuelles</ion-select-option>\r\n          <ion-select-option value=\"Vivaces\">Vivaces</ion-select-option>\r\n          <ion-select-option value=\"Aromatiques\">Aromatiques</ion-select-option>\r\n        </ion-select>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n      <ion-item *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \">\r\n        <ion-label color=\"light\" >Epoque de récolte:</ion-label>   \r\n        <ion-select  color=\"light\" placeholder=\"Selectioner la récolte\" required formControlName=\"fleuraison\" *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \">\r\n          <ion-select-option value=\"Ete\">Ete</ion-select-option>\r\n          <ion-select-option value=\"Hiver\">Hiver</ion-select-option>\r\n        </ion-select>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n       <ion-item >\r\n        <ion-label color=\"light\" *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \" >période de récolte:</ion-label>   \r\n        <ion-label color=\"light\" *ngIf=\"epoque === 'Fleur' \" >Mois de fleuraison:</ion-label>  \r\n        <ion-item>\r\n          <ion-select  color=\"light\" placeholder=\"de\" required formControlName=\"de\">\r\n            <ion-select-option  *ngFor=\"let mois of listMois\" value=\"{{ mois }}\">{{ mois }}</ion-select-option>\r\n          </ion-select>      \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\" style=\"width: 2em;\" >à</ion-label>   \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select  color=\"light\" placeholder=\"a\" required formControlName=\"a\">\r\n          <ion-select-option  *ngFor=\"let mois of listMois\" value=\"{{ mois }}\">{{ mois }}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"light\">Hauteur:</ion-label>\r\n        <ion-select  color=\"light\"  placeholder=\"Selectioner la Hauteur\" required formControlName=\"hauteur\"  >\r\n          <ion-select-option value=\"basse\">basse (5-20cm)</ion-select-option>\r\n          <ion-select-option value=\"moyenne\">moyenne (30-50cm)</ion-select-option>\r\n          <ion-select-option value=\"haute\">haute (80cm et +)</ion-select-option>\r\n        </ion-select>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label color=\"light\">Description:</ion-label>\r\n        <ion-textarea color=\"light\" rows=\"6\" cols=\"20\" placeholder=\"description\"  required formControlName=\"description\"  ></ion-textarea>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label  color=\"light\" >Type de plante</ion-label>\r\n        <ion-select placeholder=\"Selectioner le Type\" required formControlName=\"type\" value=\"{{ epoque }}\" (ionChange)=\"optionsfn();\" #type  class=\"custom-options\">\r\n          <ion-select-option value=\"Fleur\" color=\"light\" >Fleur</ion-select-option>\r\n          <ion-select-option value=\"Fruit\" color=\"light\" >Fruit</ion-select-option>\r\n          <ion-select-option value=\"Legumes\" color=\"light\" >Légume</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>  \r\n      <ion-button (click)=\"addPhoto()\" expand=\"block\" id=\"imageB\">\r\n        <ion-icon name=\"image\" slot=\"start\"></ion-icon>\r\n        Ouvrir la bibliothèque\r\n      </ion-button>\r\n      <div class=\"flex\">\r\n        <div class=\"img-box\">\r\n          <img [src]=\"image\" id=\"url\">\r\n        </div>\r\n      </div>\r\n  <ion-button   type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ajouter-fleur_ajouter-fleur_module_ts.js.map