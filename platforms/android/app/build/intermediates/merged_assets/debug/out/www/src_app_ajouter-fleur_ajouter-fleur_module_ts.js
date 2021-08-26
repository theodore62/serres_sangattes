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
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
        this.plante = {
            id: '',
            nom: '',
            variete: '',
            couleur: '',
            fleuraison: '',
            hauteur: '',
            description: '',
            type: '',
            image: '',
        };
        this.items = this.firestore.collection('Variete').valueChanges();
    }
    get errorControl() {
        return this.annonce.controls;
    }
    ngOnInit() {
        this.annonce = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            variete: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            couleur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            fleuraison: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            hauteur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.epoqueFleuraison();
    }
    ajouter() {
        this.router.navigateByUrl('/ajouter-varieter');
    }
    addAnnonce() {
        console.log(this.annonce);
        if (!this.annonce.valid) {
            this.message = 'enter une valeur dans le champ';
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.plante.nom = this.annonce.value.nom;
            this.plante.variete = this.annonce.value.variete;
            this.plante.couleur = this.annonce.value.couleur;
            this.plante.fleuraison = this.annonce.value.fleuraison;
            this.plante.hauteur = this.annonce.value.hauteur;
            this.plante.description = this.annonce.value.description;
            this.plante.type = this.annonce.value.type;
            this.imagePath = new Date().getTime() + '.jpg';
            this.uploadFirebase();
            this.planteList.postPlanteList(this.plante).then((retour) => {
                if (retour.id == null) {
                    this.message = "la plante n'a pas pu être enregistré ";
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
                        image: this.imagePath,
                    });
                    this.message = 'la plante à était enregistré vous pouvez en saisir une autre';
                    this.toastCtrl.showToast(this.message);
                }
            });
        }
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
                            console.log('Radio 1 selected');
                        },
                        checked: true,
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Fruit',
                        value: 'Fruit',
                        handler: () => {
                            console.log('Radio 2 selected');
                        },
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Legumes',
                        value: 'Legumes',
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
                            console.log(data1);
                            this.epoque = data1;
                        },
                    },
                ],
            });
            yield alert.present();
        });
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
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options);
        });
    }
    uploadFirebase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 2000
            });
            yield loading.present();
            this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
            this.upload.then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.onDidDismiss();
                this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
                const alert = yield this.alertController.create({
                    header: 'Félicitation',
                    message: 'L\'envoi de la photo dans Firebase est terminé!',
                    buttons: ['OK']
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n\n.flex {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.img-box {\n  height: 200px;\n  overflow: hidden;\n}\n\nimg {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqb3V0ZXItZmxldXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDQTtFQUNJLHlEQUFBO0FBRUo7O0FBQUE7RUFDSSw4Q0FBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFJSjs7QUFGRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhFO0VBQ0UsYUFBQTtBQU1KIiwiZmlsZSI6ImFqb3V0ZXItZmxldXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmNWFmMTksICNmMTI3MTEpO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsZXgge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltZy1ib3gge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  color=\"light\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  color=\"light\">ajouter une plante</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"ajouter()\" >\r\n      <ion-icon  size=\"large\" name=\"add-circle-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-list style=\"background-color: silver;\">\r\n    <form (ngSubmit)=\"addAnnonce()\" [formGroup]=\"annonce\">\r\n      <ion-item>\r\n        <ion-label color=\"light\">Nom commun :</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" formControlName=\"nom\" ></ion-input>\r\n        \r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>  \r\n      <ion-item>\r\n        <ion-label color=\"light\">Variété:</ion-label>\r\n        <ion-select  color=\"light\" placeholder=\"Select One\" required formControlName=\"variete\"  >\r\n          <ion-select-option   *ngFor =\"let item of items |async\" value=\"{{ item.nom  }}\" >{{ item.nom }}</ion-select-option >\r\n        </ion-select>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label color=\"light\">Couleur:</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"couleur\"  required formControlName=\"couleur\"  ></ion-input>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>  \r\n      <ion-item *ngIf=\"epoque === 'Fleur' \">\r\n        <ion-label color=\"light\" >Epoque de fleuraison:</ion-label>   \r\n        <ion-select  color=\"light\" placeholder=\"Select One\" required formControlName=\"fleuraison\" *ngIf=\"epoque === 'Fleur' \">\r\n          <ion-select-option value=\"Annuelles\">Annuelles</ion-select-option>\r\n          <ion-select-option value=\"Bisannuelles\">Bisannuelles</ion-select-option>\r\n          <ion-select-option value=\"Vivaces\">Vivaces</ion-select-option>\r\n          <ion-select-option value=\"Aromatiques\">Aromatiques</ion-select-option>\r\n        </ion-select>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n      <ion-item *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \">\r\n        <ion-label color=\"light\" >Epoque de récolte:</ion-label>   \r\n        <ion-select  color=\"light\" placeholder=\"Select One\" required formControlName=\"fleuraison\" *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \">\r\n          <ion-select-option value=\"Ete\">Ete</ion-select-option>\r\n          <ion-select-option value=\"Hiver\">Hiver</ion-select-option>\r\n        </ion-select>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n\r\n      <ion-item>\r\n        <ion-label color=\"light\">Hauteur:</ion-label>\r\n        <ion-select  color=\"light\" placeholder=\"Select One\" required formControlName=\"hauteur\" >\r\n          <ion-select-option value=\"basse\">basse</ion-select-option>\r\n          <ion-select-option value=\"moyenne\">moyenne</ion-select-option>\r\n          <ion-select-option value=\"haute\">haute</ion-select-option>\r\n        </ion-select>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label color=\"light\">Description:</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"description\"  required formControlName=\"description\"  ></ion-input>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.required\">\r\n          champ obligatoire \r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label  color=\"light\" >Type de plante</ion-label>\r\n        <ion-select  color=\"light\" placeholder=\"Select One\" required formControlName=\"type\" >\r\n          <ion-select-option value=\"Fleur\">Fleur</ion-select-option>\r\n          <ion-select-option value=\"Fruit\">Fruit</ion-select-option>\r\n          <ion-select-option value=\"Legume\">Légume</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>  \r\n      <ion-button (click)=\"addPhoto()\" color=\"tertiary\" expand=\"block\">\r\n        <ion-icon name=\"image\" slot=\"start\"></ion-icon>\r\n        Ouvrir la bibliothèque\r\n      </ion-button>\r\n      <div class=\"flex\">\r\n        <div class=\"img-box\">\r\n          <img [src]=\"image\">\r\n        </div>\r\n      </div>\r\n  <ion-button color=\"light\" type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ajouter-fleur_ajouter-fleur_module_ts.js.map