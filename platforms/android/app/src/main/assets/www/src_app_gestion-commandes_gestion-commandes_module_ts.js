(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["src_app_gestion-commandes_gestion-commandes_module_ts"],{

/***/ 7556:
/*!***********************************************************************!*\
  !*** ./src/app/gestion-commandes/gestion-commandes-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionCommandesPageRoutingModule": () => (/* binding */ GestionCommandesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-commandes.page */ 3495);




const routes = [
    {
        path: '',
        component: _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_0__.GestionCommandesPage
    }
];
let GestionCommandesPageRoutingModule = class GestionCommandesPageRoutingModule {
};
GestionCommandesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GestionCommandesPageRoutingModule);



/***/ }),

/***/ 3530:
/*!***************************************************************!*\
  !*** ./src/app/gestion-commandes/gestion-commandes.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionCommandesPageModule": () => (/* binding */ GestionCommandesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _gestion_commandes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-commandes-routing.module */ 7556);
/* harmony import */ var _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-commandes.page */ 3495);







let GestionCommandesPageModule = class GestionCommandesPageModule {
};
GestionCommandesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gestion_commandes_routing_module__WEBPACK_IMPORTED_MODULE_0__.GestionCommandesPageRoutingModule
        ],
        declarations: [_gestion_commandes_page__WEBPACK_IMPORTED_MODULE_1__.GestionCommandesPage]
    })
], GestionCommandesPageModule);



/***/ }),

/***/ 3495:
/*!*************************************************************!*\
  !*** ./src/app/gestion-commandes/gestion-commandes.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionCommandesPage": () => (/* binding */ GestionCommandesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_gestion_commandes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gestion-commandes.page.html */ 1094);
/* harmony import */ var _gestion_commandes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-commandes.page.scss */ 9072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-toast.service */ 6086);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commande/commande.service */ 151);
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/client/client.service */ 1811);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/plante/plantes.service */ 9842);
/* harmony import */ var _details_commande_details_commande_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../details-commande/details-commande.page */ 3934);









// formulaire

// service




let GestionCommandesPage = class GestionCommandesPage {
    constructor(formBuilder, toastCtrl, commandeService, clientService, plantesService, firestore, modalController, datePipe) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.commandeService = commandeService;
        this.clientService = clientService;
        this.plantesService = plantesService;
        this.firestore = firestore;
        this.modalController = modalController;
        this.datePipe = datePipe;
        this.isSubmitted = false;
        this.tableauCommandes = [];
        this.tableau = [];
        this.ListePlantesCommande = {
            nom: '',
            prix: '',
            quantite: '',
            unite: '',
        };
        // une commande
        this.commande = {
            id: '',
            liste: this.ListePlantesCommande,
            date: '',
            client: '',
            infoComplementaire: '',
        };
        this.i = -30;
    }
    get errorControl() {
        return this.formulaireCommande.controls;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const demain = new Date();
            const lendemain = this.addDaysToDate(demain, 1);
            this.dateDeDemain = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(lendemain, 'dd/MM/yyyy', 'fr-FR');
            this.dateDuJour = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(), 'dd/MM/yyyy', 'fr-FR');
            this.listeCommande();
            if (this.affichage == undefined) {
                this.affichage = 'liste';
            }
            this.listCommandes = yield this.initializeItems();
            this.listClients = this.clientService.getListClients();
            this.listPlantes = this.plantesService.getListPlantes();
            this.formulaireCommande = this.formBuilder.group({
                client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                infoComplementaire: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            });
        });
    }
    listeCommande() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.listeTableauCommande = yield this.initializeItems();
        });
    }
    addDaysToDate(date, days) {
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }
    segmentChanged(ev) {
        this.affichage = ev.detail.value;
    }
    addLigne() {
        this.ListePlantesCommande.nom = this.nom;
        this.ListePlantesCommande.prix = this.prix;
        this.ListePlantesCommande.quantite = this.quantite;
        this.ListePlantesCommande.unite = this.unite;
        this.tableau.push({
            id: this.i,
            nom: this.nom,
            prix: this.prix + '€',
            quantite: this.quantite,
            unite: this.unite,
        });
        this.i++;
        this.nom = '';
        this.prix = '';
        this.quantite = '';
        this.unite = '';
    }
    deleteLigne(id) {
        this.tableau.filter((value, index, array) => {
            if (value.id == id) {
                this.tableau.splice(index, 1);
            }
        });
    }
    ajouter() {
        if (!this.formulaireCommande.valid) {
            this.message = 'Veuillez compléter le formulaire';
            this.toastCtrl.showToast(this.message);
        }
        else {
            this.commande.client = this.formulaireCommande.value.client;
            this.commande.liste = this.tableau;
            this.commande.date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(this.formulaireCommande.value.date, 'dd/MM/yyyy', 'fr-FR');
            this.commande.infoComplementaire = this.formulaireCommande.value.infoComplementaire;
            this.commandeService.postCommande(this.commande).then((retour) => {
                if (retour.id == null) {
                    this.message = "les données n'ont pas pu être enregistrées";
                    this.toastCtrl.showToast(this.message);
                }
                else {
                    this.firestore.doc(`Commandes/${retour.id}`).set({
                        id: retour.id,
                        liste: this.tableau,
                        client: this.formulaireCommande.value.client,
                        date: (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(this.formulaireCommande.value.date, 'dd/MM/yyyy', 'fr-FR'),
                        infoComplementaire: this.formulaireCommande.value.infoComplementaire,
                    });
                    this.message = "les données ont pu être enregistrées";
                    this.toastCtrl.showToast(this.message);
                }
            });
        }
    }
    filterList(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.listCommandes = yield this.initializeItems();
            const searchTerm = ev.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.listCommandes = this.listCommandes.filter((currentPlant) => {
                if (currentPlant.client && searchTerm) {
                    return (currentPlant.client.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1 ||
                        currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const teste = yield this.initializeItems();
            setTimeout(() => {
                this.listCommandes = teste;
                event.target.complete();
            }, 2000);
        });
    }
    initializeItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.tableauCommandes = [];
            this.tableauCommandes = yield this.commandeService.getCommandesList();
            return this.tableauCommandes;
        });
    }
    delete(idCommande) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.commandeService.deleteCommande(idCommande);
            this.tableauCommandes = [];
            this.listCommandes = yield this.initializeItems();
        });
    }
    update(idCommande, idClient) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _details_commande_details_commande_page__WEBPACK_IMPORTED_MODULE_6__.DetailsCommandePage,
                // cssClass: 'my-custom-class',
                componentProps: {
                    idCommande: idCommande,
                    idClient: idClient,
                },
            });
            return yield modal.present();
        });
    }
};
GestionCommandesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_ionic_toast_service__WEBPACK_IMPORTED_MODULE_2__.IonicToastService },
    { type: _services_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__.CommandeService },
    { type: _services_client_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService },
    { type: _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_5__.PlantesService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe }
];
GestionCommandesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-gestion-commandes',
        template: _raw_loader_gestion_commandes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gestion_commandes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GestionCommandesPage);



/***/ }),

/***/ 9072:
/*!***************************************************************!*\
  !*** ./src/app/gestion-commandes/gestion-commandes.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --ion-background-color: #3366a0;\n}\n\nion-content {\n  color: #fff;\n  --ion-background-color: linear-gradient(#3366a0, #9eb7d2);\n}\n\nion-title,\nion-searchbar,\nion-toolbar,\nion-label,\nion-item,\nion-icon,\nion-back-button {\n  color: #fff;\n}\n\nion-button {\n  --background: #6c91bb;\n}\n\nion-item, ion-list, ion-item-options, ion-item-option {\n  --ion-background-color: transparent !important;\n}\n\n.titreAjouter {\n  text-align: center;\n  size: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tY29tbWFuZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FBQUo7O0FBSUU7RUFFRSxXQUFBO0VBQ0EseURBQUE7QUFGSjs7QUFRRTs7Ozs7OztFQU9FLFdBQUE7QUFMSjs7QUFPRTtFQUNFLHFCQUFBO0FBSko7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBSEoiLCJmaWxlIjoiZ2VzdGlvbi1jb21tYW5kZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICAvL3YyXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzM2NmEwO1xyXG4gICAgLy92MVxyXG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y1YWYxOTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy92MlxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzMzNjZhMCwgIzllYjdkMik7XHJcbiAgICAvL3YxXHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y1YWYxOSwgI2YxMjcxMSk7XHJcbiAgfVxyXG4gIC8vLS0tLS0tLS0tLS0tLS0vL1xyXG4gIC8vdjJcclxuICBpb24tdGl0bGUsXHJcbiAgaW9uLXNlYXJjaGJhcixcclxuICBpb24tdG9vbGJhcixcclxuICBpb24tbGFiZWwsXHJcbiAgaW9uLWl0ZW0sXHJcbiAgaW9uLWljb24sXHJcbiAgaW9uLWJhY2stYnV0dG9uICB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2YzkxYmI7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLGlvbi1saXN0LGlvbi1pdGVtLW9wdGlvbnMsaW9uLWl0ZW0tb3B0aW9uIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0cmVBam91dGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgc2l6ZTogNDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 1094:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-commandes/gestion-commandes.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Gestion de Commandes</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <!-- Disabled Segment -->\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"liste\">\r\n      <ion-segment-button value=\"ajouter\">\r\n        <ion-label>\r\n          <ion-icon name=\"add-circle-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"liste\">\r\n        <ion-label>\r\n          <ion-icon name=\"list-outline\" size=\"small\"></ion-icon>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list *ngIf=\"affichage === 'ajouter' \" class=\"titreAjouter\">\r\n    <ion-label color=\"light\" class=\"titreAjouter\">Ajouter une Commande:</ion-label>\r\n    <ion-item>\r\n      <ion-label>liste plantes</ion-label>\r\n      <ion-select placeholder=\"Selectionner Nom du client\" [(ngModel)]=\"nom\">\r\n        <ion-select-option *ngFor=\"let plante of (listPlantes)|async\" value=\"{{ plante.nom }}\">{{ plante.nom }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n      <ion-input color=\"light\" type=\"number\" [(ngModel)]=\"prix \" placeholder=\"prix\"></ion-input>\r\n      <ion-input color=\"light\" type=\"number\" [(ngModel)]=\"quantite\" placeholder=\"quantité\"></ion-input>\r\n      <ion-select placeholder=\"Selectionner Nom du client\" [(ngModel)]=\"unite\">\r\n        <ion-select-option value=\"kg\">kg</ion-select-option>\r\n        <ion-select-option value=\"unité\">unité</ion-select-option>\r\n      </ion-select>\r\n      <ion-item>\r\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"chevron-down-circle-outline\" (click)=\"addLigne()\"></ion-icon>\r\n      </ion-item>\r\n\r\n    </ion-item>\r\n    <form (ngSubmit)=\"ajouter()\" [formGroup]=\"formulaireCommande\">\r\n      <ion-item>\r\n        <ion-label color=\"light\">nom du client:</ion-label>\r\n        <ion-select placeholder=\"Selectionner Nom du client\" required formControlName=\"client\">\r\n          <ion-select-option *ngFor=\"let client of (listClients)|async\" value=\"{{ client.id }}\">{{ client.nom }} {{\r\n            client.prenom }} </ion-select-option>\r\n        </ion-select>\r\n\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.client.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.client.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">Date de la commande:</ion-label>\r\n        <ion-input color=\"light\" type=\"date\" placeholder=\"date\" required formControlName=\"date\"> </ion-input>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.date.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.date.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let item of tableau\">\r\n            <ion-input color=\"light\" type=\"text\" placeholder=\"nom\" id=\"nom\" value=\"{{ item.nom }}\"></ion-input>\r\n            <ion-input color=\"light\" type=\"text\" placeholder=\"prix\" id=\"prix\" value=\"{{ item.prix }}\"></ion-input>\r\n            <ion-input color=\"light\" type=\"number\" placeholder=\"quantité\" value=\"{{ item.quantite }}\"></ion-input>\r\n            <ion-input color=\"light\" type=\"text\" placeholder=\"prix\" id=\"prix\" value=\"{{ item.unite }}\"></ion-input>\r\n            <ion-icon name=\"close-circle-outline\" (click)=\"deleteLigne(item.id)\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"light\">info complémentaire :</ion-label>\r\n        <ion-textarea color=\"light\" rows=\"6\" cols=\"20\" placeholder=\"info complémentaire\" required\r\n          formControlName=\"infoComplementaire\">\r\n        </ion-textarea>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.infoComplementaire.errors?.required\">\r\n          champ obligatoire\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.infoComplementaire.errors?.minlength\">\r\n          minimun 2 caractéres\r\n        </span>\r\n      </ion-item>\r\n\r\n      <ion-button type=\"submit\" expand=\"block\">Valider</ion-button>\r\n    </form>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"affichage === 'liste' \" class=\"titreAjouter\">\r\n    <ion-item>\r\n      <ion-searchbar (ionChange)=\"filterList($event)\" placeholder=\"recherche\"></ion-searchbar>\r\n    </ion-item>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-item>\r\n      <ion-label color=\"light\" class=\"titreAjouter\">Liste des commandes:</ion-label>\r\n    </ion-item>\r\n    <!-- ******************************************************* -->\r\n    <ion-label color=\"light\" class=\"titreAjouter\">Liste des commandes Aujourd'hui:</ion-label>\r\n    <ion-list *ngFor=\"let commande of (listCommandes)\">\r\n      <ion-item-sliding *ngIf=\"commande.date === dateDuJour\">\r\n        <ion-item>\r\n          <ion-label color=\"light\"> Nom du client: {{commande.client }}</ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"delete(commande.id)\" color=\"red\">\r\n            <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"update(commande.id,commande.client)\" color='red'>\r\n            <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <!-- ******************************************************* -->\r\n    <ion-label color=\"light\" class=\"titreAjouter\">Liste des commandes de demain:</ion-label>\r\n    <ion-list *ngFor=\"let commande of (listCommandes)\">\r\n      <ion-item-sliding *ngIf=\"commande.date === dateDeDemain\">\r\n        <ion-item>\r\n          <ion-label color=\"light\"> Nom du client: {{commande.client }}</ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"delete(commande.id)\" color=\"red\">\r\n            <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"update(commande.id,commande.client)\" color='red'>\r\n            <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n        <!-- ******************************************************* -->\r\n        <ion-label color=\"light\" class=\"titreAjouter\">Liste des commandes à venir:</ion-label>\r\n        <ion-list *ngFor=\"let commande of (listCommandes)\">\r\n          <ion-item-sliding *ngIf=\"commande.date !== dateDeDemain || commande.date !== dateDuJour\">\r\n            <ion-item>\r\n              <ion-label color=\"light\"> Nom du client: {{commande.client }}</ion-label>\r\n              <ion-item>\r\n                <ion-label>Archiver</ion-label>\r\n                <ion-toggle [(ngModel)]=\"archiver\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <!-- <ion-item-option (click)=\"delete(commande.id)\" color=\"red\">\r\n                <ion-icon name=\"trash-outline\" size=\"small\" color=\"light\"></ion-icon>\r\n              </ion-item-option> -->\r\n              <ion-item-option (click)=\"update(commande.id,commande.client)\" color='red'>\r\n                <img src=\"https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png\" />\r\n              </ion-item-option>\r\n            </ion-item-options>      \r\n          </ion-item-sliding>\r\n        </ion-list>\r\n\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_gestion-commandes_gestion-commandes_module_ts.js.map