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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 1084);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 9096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _services_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commande/commande.service */ 151);
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/client/client.service */ 1811);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);





//----//
// service



//----//


//camera




let ModalPage = class ModalPage {
    // ---------------------------------------------- //
    // ---------------------------------------------- //
    constructor(alertController, afSG, plantesService, commandeService, clientService, modalController, formBuilder, camera, firestore, loadingController, toastCtrl, router) {
        this.alertController = alertController;
        this.afSG = afSG;
        this.plantesService = plantesService;
        this.commandeService = commandeService;
        this.clientService = clientService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.firestore = firestore;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.isSubmitted = false;
        this.planteDetail = [];
        this.image = '';
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
            de: '',
            a: '',
            image: '',
        };
        this.clientDetail = [];
    }
    get errorControl() {
        if (this.data === 'commande') {
            return this.formulaireCommande.controls;
        }
        else if (this.data === 'client') {
            return this.formulaireClient.controls;
        }
        else {
            return this.annonce.controls;
        }
    }
    ngOnInit() {
        //---------------------------------------------------------------------------------//
        //-------------------------commandes-----------------------------------------------//
        //---------------------------------------------------------------------------------//
        if (this.data === 'commande') {
            this.formulaireCommande = this.formBuilder.group({
                nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                prix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                quantite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                infoComplementaire: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            });
            this.commandeService
                .getDetailCommande(this.idCommande)
                .then((detailCommande) => {
                // document
                //   .getElementById('nom')
                //   .setAttribute('value', detailCommande.nom);
                // document
                //   .getElementById('client')
                //   .setAttribute('value', detailCommande.client);
                // document
                //   .getElementById('prix')
                //   .setAttribute('value', detailCommande.prix);
                // document
                //   .getElementById('quantite')
                //   .setAttribute('value', detailCommande.quantite);
                // document
                //   .getElementById('infoComplementaire')
                //   .setAttribute('value', detailCommande.infoComplementaire);
            });
        }
        //---------------------------------------------------------------------------------//
        //-------------------------client--------------------------------------------------//
        //---------------------------------------------------------------------------------//
        else if (this.data === 'client') {
            if (this.affichage == undefined) {
                this.affichage = 'ajouter';
            }
            this.formulaireClient = this.formBuilder.group({
                nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
                prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
                fixe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
                portable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
                adresse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
                postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(5)]],
            });
            console.log(this.idClient);
            this.clientService.getClient(this.idClient).then((detailClient) => {
                console.log(detailClient);
                this.clientDetail.push(detailClient);
                this.clientDetail.forEach((index) => {
                    document.getElementById('nom').setAttribute('value', index.nom);
                    document
                        .getElementById('prenom')
                        .setAttribute('value', index.prenom);
                    document
                        .getElementById('email')
                        .setAttribute('value', index.email);
                    document
                        .getElementById('fixe')
                        .setAttribute('value', index.fixe);
                    document
                        .getElementById('portable')
                        .setAttribute('value', index.portable);
                    document
                        .getElementById('adresse')
                        .setAttribute('value', index.adresse);
                    document
                        .getElementById('postal')
                        .setAttribute('value', index.postal);
                });
            });
        }
        //---------------------------------------------------------------------------------//
        //------------------------------detail des plantes---------------------------------//
        //---------------------------------------------------------------------------------//
        else {
            this.varieters = this.firestore.collection('Variete').valueChanges();
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
            this.annonce = this.formBuilder.group({
                nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                variete: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                couleur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                fleuraison: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                hauteur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                de: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                a: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
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
                            document
                                .getElementById('type')
                                .setAttribute('value', items.type);
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
                            document
                                .getElementById('type')
                                .setAttribute('value', items.type);
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
                        document.getElementById('de').setAttribute('value', items.de);
                        document.getElementById('a').setAttribute('value', items.a);
                    });
                });
            });
        }
    }
    //---------------------------------------------------------------------------------//
    //-------------------------commandes-----------------------------------------------//
    //---------------------------------------------------------------------------------//
    addCommande() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.formulaireCommande.valid) {
                this.message = 'enter une valeur dans le champ';
                return false;
            }
            else {
                const loading = yield this.loadingController.create({
                    duration: 2000,
                });
                yield loading.present();
                this.commandeService.updateCommande(this.idCommande, this.formulaireCommande.value);
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
    //---------------------------------------------------------------------------------//
    //------------------------------detail des plantes---------------------------------//
    //---------------------------------------------------------------------------------//
    addPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const libraryImage = yield this.openLibrary();
            this.image = 'data:image/jpg;base64,' + libraryImage;
        });
    }
    openLibrary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.upload = this.afSG
                .ref(this.imagePath)
                .putString(this.image, 'data_url');
        });
    }
    addAnnonce() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    //---------------------------------------------------------------------------------//
    //-------------------------client--------------------------------------------------//
    //---------------------------------------------------------------------------------//
    addClient() { }
    segmentChanged(ev) {
        this.affichage = ev.detail.value;
    }
    closeModal() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__.AngularFireStorage },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__.PlantesService },
    { type: _services_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__.CommandeService },
    { type: _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.IonicToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
ModalPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    idCommande: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    idClient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



/***/ }),

/***/ 1811:
/*!***************************************************!*\
  !*** ./src/app/services/client/client.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Operators */ 8049);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 8274);





let ClientService = class ClientService {
    constructor(firestore, afSG) {
        this.firestore = firestore;
        this.afSG = afSG;
        this.ref = 'Client';
        this.client = this.firestore.collection('Client');
    }
    getListClients() {
        return this.client.valueChanges();
        // return this.client.valueChanges().pipe(first()).toPromise();
    }
    postClient(client) {
        return this.client.add(client);
    }
    getClient(id) {
        const url = '/' + id;
        return this.client.doc(url).valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    updateClient(id, values) {
        const url = '/' + id;
        this.client.doc(url).update(values);
        return;
    }
    deleteClient(id) {
        const url = '/' + id;
        return this.client.doc(url).delete();
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage }
];
ClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ClientService);



/***/ }),

/***/ 151:
/*!*******************************************************!*\
  !*** ./src/app/services/commande/commande.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandeService": () => (/* binding */ CommandeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Operators */ 8049);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 8274);





let CommandeService = class CommandeService {
    constructor(firestore, afSG) {
        this.firestore = firestore;
        this.afSG = afSG;
        this.ref = 'Commandes';
        this.commande = this.firestore.collection('Commandes');
    }
    getListCommandes() {
        return this.commande.valueChanges();
    }
    getCommandesList() {
        return this.commande.valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    postCommande(commande) {
        return this.commande.add(commande);
    }
    getDetailCommande(id) {
        const url = '/' + id;
        return this.commande.doc(url).valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    updateCommande(id, values) {
        const url = '/' + id;
        this.commande.doc(url).update(values);
        return;
    }
    deleteCommande(id) {
        const url = '/' + id;
        return this.commande.doc(url).delete();
    }
};
CommandeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage }
];
CommandeService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], CommandeService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-icon,\nion-back-button {\n  color: #fff;\n}\n\nion-button {\n  --background: #9eb7d2;\n}\n\n#imageB {\n  --background: #7699bf;\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n\n.segement {\n  --background: #3467a0;\n}\n\n.commande {\n  text-align: center;\n}\n\n.bouttonCommande {\n  --background: #7296be;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLCtCQUFBO0FBQUY7O0FBSUE7RUFFRSxXQUFBO0VBQ0EseURBQUE7QUFGRjs7QUFRQTs7O0VBR0UsV0FBQTtBQUxGOztBQU9BO0VBQ0UscUJBQUE7QUFKRjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBS0E7RUFDRSw4Q0FBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSxxQkFBQTtBQURGIiwiZmlsZSI6Im1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIC8vdjJcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzM2NmEwO1xyXG4gIC8vdjFcclxuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZjE5O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvL3YyXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCMzMzY2YTAsICM5ZWI3ZDIpO1xyXG4gIC8vdjFcclxuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y1YWYxOSwgI2YxMjcxMSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS8vXHJcbi8vdjJcclxuaW9uLXRpdGxlLFxyXG5pb24taWNvbixcclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICM5ZWI3ZDI7XHJcbn1cclxuI2ltYWdlQiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzY5OWJmO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlZ2VtZW50e1xyXG4gIC0tYmFja2dyb3VuZDogIzM0NjdhMDtcclxufVxyXG5cclxuXHJcbi5jb21tYW5kZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvdXR0b25Db21tYW5kZXtcclxuICAtLWJhY2tncm91bmQ6ICM3Mjk2YmU7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title *ngIf=\"data === 'plante'\">modifier la plante</ion-title>\r\n    <ion-title *ngIf=\"data === 'commande'\">modifier la Commande</ion-title>\r\n    <ion-title *ngIf=\"data === 'client'\">détail sûr le client</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"closeModal()\">\r\n      <ion-icon size=\"large\" name=\"close-circle-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- /***************************************************************************/ -->\r\n<!-- /*******************************Commandes***********************************/ -->\r\n<!-- /***************************************************************************/ -->\r\n\r\n<ion-content *ngIf=\"data === 'commande'\" class=\"commande\">\r\n  <ion-label color=\"light\" class=\"titreAjouter\">Ajouter une Commande:</ion-label>\r\n  <ion-item>\r\n    <ion-input color=\"light\" type=\"text\" [(ngModel)]=\"nom\" placeholder=\"nom\"></ion-input>\r\n    <ion-input color=\"light\" type=\"number\" [(ngModel)]=\"prix\" placeholder=\"prix\">\r\n    </ion-input>\r\n    <ion-input color=\"light\" type=\"number\" [(ngModel)]=\"quantite\" placeholder=\"quantité\"></ion-input>\r\n    <ion-item>\r\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"chevron-down-circle-outline\" (click)=\"addLigne()\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-item>\r\n  <ion-label color=\"light\">Détails de la commande:</ion-label>\r\n  <form (ngSubmit)=\"addCommande()\" [formGroup]=\"formulaireCommande\">\r\n    <ion-item>\r\n      <ion-label color=\"light\">Nom du client :</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"Nom du client\" id='client' value='' formControlName=\"client\">\r\n      </ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.client.errors?.required\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.client.errors?.minlength\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Nom de la plante :</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"Nom de la plante\" id='nom' value='' formControlName=\"nom\">\r\n      </ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Prix :</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"prix\" id='prix' value='' formControlName=\"prix\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.prix.errors?.required\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.prix.errors?.minlength\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Quantité :</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"quantité\" id='quantite' value='' formControlName=\"quantite\">\r\n      </ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.quantite.errors?.required\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.quantite.errors?.minlength\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">info complémentaire :</ion-label>\r\n      <ion-textarea color=\"light\" rows=\"6\" cols=\"20\" placeholder=\"info complémentaire\" required\r\n        formControlName=\"infoComplementaire\" id='infoComplementaire' value=''></ion-textarea>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.infoComplementaire.errors?.required\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.infoComplementaire.errors?.minlength\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n\r\n    <ion-button class=\"bouttonCommande\" type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n<!-- /***************************************************************************/ -->\r\n<!-- /****************************client*****************************************/ -->\r\n<!-- /***************************************************************************/ -->\r\n<ion-toolbar *ngIf=\"data === 'client'\" class=\"segement\">\r\n  <!-- Disabled Segment -->\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"ajouter\">\r\n    <ion-segment-button value=\"ajouter\">\r\n      <ion-label>\r\n        <ion-icon  name=\"person-outline\" size=\"small\"></ion-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"liste\">\r\n      <ion-label>\r\n        <ion-icon name=\"list-outline\" size=\"small\"></ion-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n<ion-content *ngIf=\"data === 'client' && affichage === 'ajouter'\" class=\"client\">\r\n  <ion-item class=\"titre\">\r\n    <ion-label color=\"light\">Détails du client:</ion-label>\r\n  </ion-item>\r\n  <form (ngSubmit)=\"addClient()\" color=\"light\" [formGroup]=\"formulaireClient\">\r\n    <ion-item>\r\n      <ion-label color=\"light\">nom:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" id=\"nom\" formControlName=\"nom\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Prénom:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"prenom\" id=\"prenom\" formControlName=\"prenom\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.prenom.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.prenom.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Email:</ion-label>\r\n      <ion-input color=\"light\" type=\"email\" placeholder=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.email.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Téléphone fixe:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"fixe\" id=\"fixe\" formControlName=\"fixe\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.fixe.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.fixe.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Téléphone portable:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"portable\" id=\"portable\" formControlName=\"portable\">\r\n      </ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.portable.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.portable.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Adresse:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"adresse\" id=\"adresse\" formControlName=\"adresse\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.adresse.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.adresse.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Code postal:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"postal\" id=\"postal\" formControlName=\"postal\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.postal.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.postal.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-button type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n</ion-content>\r\n<ion-content *ngIf=\"data === 'client' && affichage === 'liste'\" class=\"client\">\r\n  <ion-item>\r\n    <ion-label color=\"light\" class=\"supprimer\">Liste des commandes</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\" placeholder=\"recherche\"></ion-searchbar>\r\n  </ion-item>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <!-- *ngFor=\"let variete of (varieteList)\" -->\r\n  <ion-list>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <!-- <ion-label color=\"light\">{{variete.nom }}</ion-label> -->\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <!-- <ion-item-option (click)=\"delete(variete.id)\" color=\"red\">\r\n          <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n        </ion-item-option> -->\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n<!-- /***************************************************************************/ -->\r\n<!-- /****************************Plantes****************************************/ -->\r\n<!-- /***************************************************************************/ -->\r\n\r\n<ion-content *ngIf=\"data === 'plante'\">\r\n\r\n  <ion-list style=\"background-color: silver;\">\r\n    <form (ngSubmit)=\"addAnnonce()\" [formGroup]=\"annonce\">\r\n      <ion-item>\r\n        <ion-label color=\"light\">Nom commun :</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" id='nom' value='' formControlName=\"nom\"></ion-input>\r\n        <!-- Error messages -->\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">Variété:</ion-label>\r\n        <ion-select color=\"light\" placeholder=\"Select One\" required id='variete' value='' formControlName=\"variete\">\r\n          <ion-select-option *ngFor=\"let varieter of varieters |async\" value=\"{{ varieter.nom  }}\">{{ varieter.nom }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">Couleur:</ion-label>\r\n        <ion-input color=\"light\" type=\"text\" placeholder=\"couleur\" required id='couleur' value=''\r\n          formControlName=\"couleur\"></ion-input>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.couleur.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">{{ texte }}</ion-label>\r\n\r\n        <ion-select color=\"light\" placeholder=\"fleuraison\" required id='fleuraison' value=''\r\n          formControlName=\"fleuraison\" style=\"display: none;\">\r\n          <ion-select-option value=\"Annuelles\">Annuelles</ion-select-option>\r\n          <ion-select-option value=\"Bisannuelles\">Bisannuelles</ion-select-option>\r\n          <ion-select-option value=\"Vivaces\">Vivaces</ion-select-option>\r\n          <ion-select-option value=\"Aromatiques\">Aromatiques</ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-select color=\"light\" placeholder=\"Select One\" required id='fleuraisonLF' value=''\r\n          formControlName=\"fleuraison\" style=\"display: none;\">\r\n          <ion-select-option value=\"Ete\">Ete</ion-select-option>\r\n          <ion-select-option value=\"Hiver\">Hiver</ion-select-option>\r\n        </ion-select>\r\n\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.fleuraison.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\" *ngIf=\"epoque === 'Fruit' || epoque === 'Legumes' \">période de récolte:</ion-label>\r\n        <ion-label color=\"light\" *ngIf=\"epoque === 'Fleur' \">Mois de fleuraison:</ion-label>\r\n        <ion-item>\r\n          <ion-select color=\"light\" placeholder=\"de\" required formControlName=\"de\" id=\"de\">\r\n            <ion-select-option *ngFor=\"let mois of listMois\" value=\"{{ mois }}\">{{ mois }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label color=\"light\" style=\"width: 2em;\">à</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-select color=\"light\" placeholder=\"a\" required formControlName=\"a\" id=\"a\">\r\n            <ion-select-option *ngFor=\"let mois of listMois\" value=\"{{ mois }}\">{{ mois }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"light\">Hauteur:</ion-label>\r\n        <ion-select color=\"light\" placeholder=\"Select One\" required id='hauteur' value='' formControlName=\"hauteur\">\r\n          <ion-select-option value=\"basse\">basse</ion-select-option>\r\n          <ion-select-option value=\"moyenne\">moyenne</ion-select-option>\r\n          <ion-select-option value=\"haute\">haute</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">Description:</ion-label>\r\n\r\n        <ion-textarea color=\"light\" rows=\"6\" cols=\"20\" placeholder=\"description\" required formControlName=\"description\"\r\n          id='description' value=''></ion-textarea>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.description.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">Type de plante</ion-label>\r\n        <ion-select color=\"light\" placeholder=\"Select One\" required id='type' value='' formControlName=\"type\">\r\n          <ion-select-option value=\"Fleur\">Fleur</ion-select-option>\r\n          <ion-select-option value=\"Fruit\">Fruit</ion-select-option>\r\n          <ion-select-option value=\"Legumes\">Légume</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-button (click)=\"addPhoto()\" expand=\"block\" id=\"imageB\">\r\n        <ion-icon name=\"image\" slot=\"start\"></ion-icon>\r\n        Ouvrir la bibliothèque\r\n      </ion-button>\r\n      <div class=\"flex\">\r\n        <div class=\"img-box\">\r\n          <img id='urlimage' [src]=\"image\">\r\n        </div>\r\n      </div>\r\n      <ion-button type=\"submit\" expand=\"block\">Valider</ion-button>\r\n    </form>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modal_modal_page_ts.js.map