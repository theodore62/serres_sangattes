(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_getion-de-clients_getion-de-clients_module_ts"],{

/***/ 3029:
/*!***********************************************************************!*\
  !*** ./src/app/getion-de-clients/getion-de-clients-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetionDeClientsPageRoutingModule": () => (/* binding */ GetionDeClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _getion_de_clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getion-de-clients.page */ 3135);




const routes = [
    {
        path: '',
        component: _getion_de_clients_page__WEBPACK_IMPORTED_MODULE_0__.GetionDeClientsPage
    }
];
let GetionDeClientsPageRoutingModule = class GetionDeClientsPageRoutingModule {
};
GetionDeClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetionDeClientsPageRoutingModule);



/***/ }),

/***/ 5762:
/*!***************************************************************!*\
  !*** ./src/app/getion-de-clients/getion-de-clients.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetionDeClientsPageModule": () => (/* binding */ GetionDeClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _getion_de_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getion-de-clients-routing.module */ 3029);
/* harmony import */ var _getion_de_clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getion-de-clients.page */ 3135);







let GetionDeClientsPageModule = class GetionDeClientsPageModule {
};
GetionDeClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _getion_de_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetionDeClientsPageRoutingModule
        ],
        declarations: [_getion_de_clients_page__WEBPACK_IMPORTED_MODULE_1__.GetionDeClientsPage]
    })
], GetionDeClientsPageModule);



/***/ }),

/***/ 3135:
/*!*************************************************************!*\
  !*** ./src/app/getion-de-clients/getion-de-clients.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetionDeClientsPage": () => (/* binding */ GetionDeClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_getion_de_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./getion-de-clients.page.html */ 1707);
/* harmony import */ var _getion_de_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getion-de-clients.page.scss */ 3536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/client/client.service */ 1811);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.page */ 9660);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);





// formulaire


// service



let GetionDeClientsPage = class GetionDeClientsPage {
    constructor(formBuilder, toastCtrl, clientService, modalController, firestore) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.clientService = clientService;
        this.modalController = modalController;
        this.firestore = firestore;
        this.tableauClients = [];
        this.client = {
            id: '',
            nom: '',
            prenom: '',
            email: '',
            fixe: '',
            portable: '',
            adresse: '',
            postal: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.affichage == undefined) {
                this.affichage = 'liste';
            }
            this.clientsList = yield this.initializeItems();
            this.clientFrom = this.formBuilder.group({
                nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
                prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
                fixe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
                portable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
                adresse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
                postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(5)]],
            });
        });
    }
    segmentChanged(ev) {
        this.affichage = ev.detail.value;
    }
    initializeItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.tableauClients = [];
            this.tableauClients = yield this.clientService.getListClients();
            return this.tableauClients;
        });
    }
    filterList(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.clientsList = yield this.initializeItems();
            const searchTerm = ev.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.clientsList = this.clientsList.filter((currentPlant) => {
                if (currentPlant.nom && searchTerm) {
                    return (currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                        currentPlant.prenom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const teste = yield this.initializeItems();
            console.log('Begin async operation');
            setTimeout(() => {
                this.clientsList = teste;
                console.log('Async operation has ended');
                event.target.complete();
            }, 2000);
        });
    }
    get errorControl() {
        return this.clientFrom.controls;
    }
    addClient() {
        if (!this.clientFrom.valid) {
            this.message = 'enter une valeur dans le champ';
            this.toastCtrl.showToast(this.message);
        }
        else {
            this.client.nom = this.clientFrom.value.nom;
            this.client.prenom = this.clientFrom.value.prenom;
            this.client.email = this.clientFrom.value.email;
            this.client.fixe = this.clientFrom.value.fixe;
            this.client.portable = this.clientFrom.value.portable;
            this.client.adresse = this.clientFrom.value.adresse;
            this.client.postal = this.clientFrom.value.postal;
            this.clientService.postClient(this.client).then((retour) => {
                if (retour.id == null) {
                    this.message = "les données n'ont pas pu être enregistrées";
                    this.toastCtrl.showToast(this.message);
                }
                else {
                    this.firestore.doc(`Client/${retour.id}`).set({
                        id: retour.id,
                        nom: this.clientFrom.value.nom,
                        prenom: this.clientFrom.value.prenom,
                        email: this.clientFrom.value.email,
                        fixe: this.clientFrom.value.fixe,
                        portable: this.clientFrom.value.portable,
                        adresse: this.clientFrom.value.adresse,
                        postal: this.clientFrom.value.postal,
                    });
                    this.message = 'les données ont pu être enregistrées';
                    this.toastCtrl.showToast(this.message);
                }
            });
        }
    }
    update(idClient) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    data: 'client',
                    idClient: idClient,
                }
            });
            return yield modal.present();
        });
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(id);
            this.clientService.deleteClient(id);
            this.tableauClients = [];
            this.clientsList = yield this.initializeItems();
        });
    }
};
GetionDeClientsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__.IonicToastService },
    { type: _services_client_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore }
];
GetionDeClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-getion-de-clients',
        template: _raw_loader_getion_de_clients_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_getion_de_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GetionDeClientsPage);



/***/ }),

/***/ 3536:
/*!***************************************************************!*\
  !*** ./src/app/getion-de-clients/getion-de-clients.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-icon,\nion-back-button {\n  color: #fff;\n}\n\nion-button {\n  --background: #7397be;\n}\n\nion-item,\nion-list {\n  --ion-background-color: transparent !important;\n}\n\n.titre {\n  font-size: larger;\n  padding: 0.5em;\n  margin-top: 2em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldGlvbi1kZS1jbGllbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLCtCQUFBO0FBQUY7O0FBSUE7RUFFRSxXQUFBO0VBQ0EseURBQUE7QUFGRjs7QUFRQTs7O0VBR0UsV0FBQTtBQUxGOztBQU9BO0VBQ0UscUJBQUE7QUFKRjs7QUFNQTs7RUFFRSw4Q0FBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkYiLCJmaWxlIjoiZ2V0aW9uLWRlLWNsaWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLy92MlxyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzY2YTA7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vdjJcclxuICBjb2xvcjogI2ZmZjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzMzNjZhMCwgIzllYjdkMik7XHJcbiAgLy92MVxyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLy9cclxuLy92MlxyXG5pb24tdGl0bGUsXHJcbmlvbi1pY29uLFxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzczOTdiZTtcclxufVxyXG5pb24taXRlbSxcclxuaW9uLWxpc3Qge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdHJlIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1707:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getion-de-clients/getion-de-clients.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Getion  de Clients</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <!-- Disabled Segment -->\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"liste\">\r\n      <ion-segment-button value=\"ajouter\">\r\n        <ion-label>\r\n          <ion-icon name=\"add-circle-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"liste\">\r\n        <ion-label>\r\n          <ion-icon name=\"list-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"affichage === 'ajouter' \">\r\n  <ion-item class=\"titre\">\r\n    <ion-label class=\"ajouter\" color=\"light\">Ajouter un(e) client(e)</ion-label>\r\n  </ion-item>\r\n  <form (ngSubmit)=\"addClient()\" color=\"light\" [formGroup]=\"clientFrom\">\r\n    <ion-item>\r\n      <ion-label color=\"light\">nom:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" formControlName=\"nom\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.nom.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Prénom:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"prenom\" formControlName=\"prenom\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.prenom.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.prenom.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Email:</ion-label>\r\n      <ion-input color=\"light\" type=\"email\" placeholder=\"email\" formControlName=\"email\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.email.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Téléphone fixe:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"fixe\" formControlName=\"fixe\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.fixe.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.fixe.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Téléphone portable:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"portable\" formControlName=\"portable\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.portable.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.portable.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Adresse:</ion-label>\r\n      <ion-input color=\"light\" type=\"text\" placeholder=\"adresse\" formControlName=\"adresse\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.adresse.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.adresse.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"light\">Code postal:</ion-label>\r\n      <ion-input color=\"light\" type=\"number\" placeholder=\"postal\" formControlName=\"postal\"></ion-input>\r\n      <!-- Error messages -->\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.postal.errors?.required\"\r\n        class=\"color\">\r\n        champ obligatoire\r\n      </span>\r\n      <span class=\"error ion-padding\" color=\"light\" *ngIf=\"isSubmitted && errorControl.postal.errors?.minlength\"\r\n        class=\"color\">\r\n        minimun 2 caractéres\r\n      </span>\r\n    </ion-item>\r\n    <ion-button type=\"submit\" expand=\"block\">Valider</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"affichage !== 'ajouter' \">\r\n  <ion-item class=\"titre\">\r\n    <ion-label color=\"light\" > Liste des clients</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-searchbar (ionChange)=\"filterList($event)\" placeholder=\"recherche\"></ion-searchbar>\r\n  </ion-item>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let client of (clientsList)|async\">\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label color=\"light\">{{client.nom }} {{ client.prenom }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"delete(client.id)\" color=\"red\">\r\n          <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"update(client.id)\" color='red'>\r\n          <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_getion-de-clients_getion-de-clients_module_ts.js.map