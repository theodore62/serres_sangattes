(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["default-src_app_modal_modal_page_ts"],{

/***/ 9660:
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 1084);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 9096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);





// service



//camera




let ModalPage = class ModalPage {
    constructor(alertController, afSG, plantesService, modalController, formBuilder, camera, firestore, loadingController, toastCtrl, router) {
        this.alertController = alertController;
        this.afSG = afSG;
        this.plantesService = plantesService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.firestore = firestore;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.planteDetail = [];
        this.image = '';
        this.isSubmitted = false;
        this.texte = '';
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
    }
    get errorControl() {
        return this.annonce.controls;
    }
    ngOnInit() {
        this.varieters = this.firestore.collection('Variete').valueChanges();
        this.annonce = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            variete: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            couleur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            fleuraison: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            hauteur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            image: [''],
        });
        this.plantesService.getDetailPlante(this.id).then((detailPlante) => {
            this.planteDetail.push(detailPlante);
            this.urlImageUpdate = this.planteDetail[0].image;
            this.afSG
                .ref('/' + detailPlante.image)
                .getDownloadURL()
                .subscribe((imgUrl) => {
                this.planteDetail[0].image = imgUrl;
                this.planteDetail.forEach((items) => {
                    this.urlImage = items.image;
                    this.epoque = items.type;
                    if (this.epoque !== 'Fleur') {
                        this.texte = 'Epoque de récolte:';
                        document.getElementById('fleuraisonLF').style.display = 'block';
                        document.getElementById('nom').setAttribute('value', items.nom);
                        document
                            .getElementById('couleur')
                            .setAttribute('value', items.couleur);
                        document
                            .getElementById('hauteur')
                            .setAttribute('value', items.hauteur);
                        document
                            .getElementById('description')
                            .setAttribute('value', items.description);
                        document.getElementById('type').setAttribute('value', items.type);
                        document
                            .getElementById('urlimage')
                            .setAttribute('src', items.image);
                        document
                            .getElementById('fleuraisonLF')
                            .setAttribute('value', items.fleuraison);
                        document
                            .getElementById('variete')
                            .setAttribute('value', items.variete);
                    }
                    else {
                        this.texte = 'Epoque de fleuraison:';
                        document.getElementById('fleuraison').style.display = 'block';
                        document.getElementById('nom').setAttribute('value', items.nom);
                        document
                            .getElementById('couleur')
                            .setAttribute('value', items.couleur);
                        document
                            .getElementById('hauteur')
                            .setAttribute('value', items.hauteur);
                        document
                            .getElementById('description')
                            .setAttribute('value', items.description);
                        document.getElementById('type').setAttribute('value', items.type);
                        document
                            .getElementById('urlimage')
                            .setAttribute('src', items.image);
                        document
                            .getElementById('fleuraison')
                            .setAttribute('value', items.fleuraison);
                        document
                            .getElementById('variete')
                            .setAttribute('value', items.variete);
                    }
                });
            });
        });
    }
    closeModal() {
        this.modalController.dismiss({
            dismissed: true,
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
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            };
            return yield this.camera.getPicture(options);
        });
    }
    addAnnonce() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.annonce.valid) {
                this.message = 'enter une valeur dans le champ';
                return false;
            }
            else {
                console.log(this.image);
                if (this.image !== '') {
                    this.imagePath = new Date().getTime() + '.jpg';
                    this.uploadFirebase();
                    this.afSG.refFromURL(this.urlImage).delete();
                    this.annonce.value.image = this.imagePath;
                }
                else {
                    this.annonce.value.image = this.urlImageUpdate;
                }
                const loading = yield this.loadingController.create({
                    duration: 2000,
                });
                yield loading.present();
                this.plantesService.updatePlante(this.id, this.urlImage, this.annonce.value);
                yield loading.onDidDismiss();
                const alert = yield this.alertController.create({
                    header: 'Félicitation',
                    message: 'La ou les modification(s) on ou à bien était éffectuer',
                    buttons: ['OK'],
                });
                yield alert.present();
                this.modalController.dismiss({
                    dismissed: true,
                });
            }
        });
    }
    uploadFirebase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.upload = this.afSG
                .ref(this.imagePath)
                .putString(this.image, 'data_url');
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorage },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__.PlantesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.IonicToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



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

/***/ 9096:
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #f5af19;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#f5af19, #f12711);\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5REFBQTtBQUVKOztBQUFBO0VBQ0ksOENBQUE7QUFHSiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y1YWYxOTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y1YWYxOSwgI2YxMjcxMSk7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 1084:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>modifier la plante</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"closeModal()\" >\n      <ion-icon  size=\"large\" name=\"close-circle-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"background-color: silver;\">\n    <form (ngSubmit)=\"addAnnonce()\" [formGroup]=\"annonce\">\n      <ion-item>\n        <ion-label color=\"light\">Nom commun :</ion-label>\n        <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" id='nom' value='' formControlName=\"nom\" ></ion-input>\n         <!-- Error messages -->\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\">\n          champ obligatoire \n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\">\n          minimun 2 caractéres\n        </span>\n      </ion-item>  \n      <ion-item>\n        <ion-label color=\"light\">Variété:</ion-label>\n        <ion-select  color=\"light\" placeholder=\"Select One\" required  id='variete' value='' formControlName=\"variete\">\n          <ion-select-option   *ngFor =\"let varieter of varieters |async\" value=\"{{ varieter.nom  }}\" >{{ varieter.nom }}</ion-select-option >\n        </ion-select>\n      </ion-item> \n      <ion-item>\n        <ion-label color=\"light\">Couleur:</ion-label>\n        <ion-input color=\"light\" type=\"text\" placeholder=\"couleur\"  required id='couleur' value='' formControlName=\"couleur\" ></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.required\">\n          champ obligatoire \n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.minlength\">\n          minimun 2 caractéres\n        </span>\n      </ion-item>  \n      <ion-item>\n        <ion-label color=\"light\" >{{ texte }}</ion-label>\n\n        <ion-select  color=\"light\" placeholder=\"fleuraison\" required id='fleuraison' value=''  formControlName=\"fleuraison\" style=\"display: none;\" >\n          <ion-select-option value=\"Annuelles\">Annuelles</ion-select-option>\n          <ion-select-option value=\"Bisannuelles\">Bisannuelles</ion-select-option>\n          <ion-select-option value=\"Vivaces\">Vivaces</ion-select-option>\n          <ion-select-option value=\"Aromatiques\">Aromatiques</ion-select-option>\n        </ion-select>\n\n        <ion-select  color=\"light\" placeholder=\"Select One\" required id='fleuraisonLF' value=''  formControlName=\"fleuraison\" style=\"display: none;\">\n          <ion-select-option value=\"Ete\">Ete</ion-select-option>\n          <ion-select-option value=\"Hiver\">Hiver</ion-select-option>\n        </ion-select>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\n          champ obligatoire \n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\n          minimun 2 caractéres\n        </span>\n      </ion-item> \n\n      <ion-item>\n        <ion-label color=\"light\">Hauteur:</ion-label>\n        <ion-select  color=\"light\" placeholder=\"Select One\" required  id='hauteur' value='' formControlName=\"hauteur\">\n          <ion-select-option value=\"basse\">basse</ion-select-option>\n          <ion-select-option value=\"moyenne\">moyenne</ion-select-option>\n          <ion-select-option value=\"haute\">haute</ion-select-option>\n        </ion-select>\n      </ion-item> \n      <ion-item>\n        <ion-label color=\"light\">Description:</ion-label>\n        <ion-input color=\"light\" type=\"text\" placeholder=\"description\"  required    id='description' value='' formControlName=\"description\" ></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.required\">\n          champ obligatoire \n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.minlength\">\n          minimun 2 caractéres\n        </span>\n      </ion-item> \n      <ion-item>\n        <ion-label  color=\"light\" >Type de plante</ion-label>\n        <ion-select  color=\"light\" placeholder=\"Select One\" required  id='type' value='' formControlName=\"type\" >\n          <ion-select-option value=\"Fleur\">Fleur</ion-select-option>\n          <ion-select-option value=\"Fruit\">Fruit</ion-select-option>\n          <ion-select-option value=\"Legume\">Légume</ion-select-option>\n        </ion-select>\n      </ion-item>  \n      <ion-button (click)=\"addPhoto()\" color=\"tertiary\" expand=\"block\">\n        <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n        Ouvrir la bibliothèque\n      </ion-button>\n      <div class=\"flex\">\n        <div class=\"img-box\">\n          <img id='urlimage' [src]=\"image\">\n        </div>\n      </div>\n  <ion-button color=\"light\" type=\"submit\" expand=\"block\">Valider</ion-button>\n  </form>\n</ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modal_modal_page_ts.js.map