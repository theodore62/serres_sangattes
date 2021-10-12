(self["webpackChunkserres_sangatte"] = self["webpackChunkserres_sangatte"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },
    // {
    //   path: 'folder/:id',
    //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    // },
    {
        path: 'accueil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_accueil_accueil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accueil/accueil.module */ 8913)).then(m => m.AccueilPageModule)
    },
    {
        path: 'fleurs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal_page_ts"), __webpack_require__.e("src_app_fleurs_fleurs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fleurs/fleurs.module */ 6728)).then(m => m.FleursPageModule)
    },
    {
        path: 'fruits',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal_page_ts"), __webpack_require__.e("src_app_fruits_fruits_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fruits/fruits.module */ 8468)).then(m => m.FruitsPageModule)
    },
    {
        path: 'legumes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal_page_ts"), __webpack_require__.e("src_app_legumes_legumes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./legumes/legumes.module */ 3055)).then(m => m.LegumesPageModule)
    },
    // {
    //   path: 'menu',
    //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
    // },
    {
        path: 'ajouter-fleur',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ajouter-fleur_ajouter-fleur_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ajouter-fleur/ajouter-fleur.module */ 8206)).then(m => m.AjouterFleurPageModule)
    },
    {
        path: 'ajouter-varieter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ajouter-varieter_ajouter-varieter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ajouter-varieter/ajouter-varieter.module */ 3444)).then(m => m.AjouterVarieterPageModule)
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 396)).then(m => m.DetailsPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal_page_ts"), __webpack_require__.e("src_app_modal_modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/modal.module */ 2641)).then(m => m.ModalPageModule)
    },
    {
        path: 'gestion-commandes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_details-commande_details-commande_page_ts"), __webpack_require__.e("src_app_gestion-commandes_gestion-commandes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-commandes/gestion-commandes.module */ 3530)).then(m => m.GestionCommandesPageModule)
    },
    {
        path: 'getion-de-clients',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal_page_ts"), __webpack_require__.e("src_app_getion-de-clients_getion-de-clients_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./getion-de-clients/getion-de-clients.module */ 5762)).then(m => m.GetionDeClientsPageModule)
    },
    {
        path: 'details-commande',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_details-commande_details-commande_page_ts"), __webpack_require__.e("src_app_details-commande_details-commande_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./details-commande/details-commande.module */ 8379)).then(m => m.DetailsCommandePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/services/data.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let AppComponent = class AppComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.appPages = [
            {
                title: 'accueil',
                url: './accueil',
                icon: 'home',
            },
            {
                title: 'Gestion de commandes',
                url: './gestion-commandes',
                icon: 'settings-outline',
            },
            {
                title: 'Gestion de clients',
                url: './getion-de-clients',
                icon: 'settings-outline',
            },
            {
                title: 'Gestion de Variétés',
                url: './ajouter-varieter',
                icon: 'settings-outline',
            },
            {
                title: 'Ajouter une plante',
                url: './ajouter-fleur',
                icon: 'add-circle-outline',
            },
            {
                title: 'Fleurs',
                open: false,
                children: [
                    {
                        title: 'Annuelles',
                        data: 'Annuelles',
                        url: '/fleurs',
                    },
                    {
                        title: 'Bisannuelles',
                        data: 'Bisannuelles',
                        url: '/fleurs',
                    },
                    {
                        title: 'Vivaces',
                        data: 'Vivaces',
                        url: '/fleurs',
                    },
                    {
                        title: 'Aromatiques',
                        data: 'Vivaces',
                        url: '/fleurs',
                    },
                ],
            },
            {
                title: 'Fruits',
                children: [
                    {
                        title: 'Ete',
                        data: 'Ete',
                        url: '/fruits',
                    },
                    {
                        title: 'Hiver',
                        data: 'hiver',
                        url: '/fruits',
                    },
                ],
            },
            {
                title: 'Légumes',
                children: [
                    {
                        title: 'Ete',
                        data: 'Ete',
                        url: '/legumes',
                    },
                    {
                        title: 'Hiver',
                        data: 'hiver',
                        url: '/legumes',
                    },
                ],
            },
        ];
    }
    page(data, url) {
        console.log(url);
        this.dataService.setData('data', data);
        this.router.navigateByUrl(url);
    }
};
AppComponent.ctorParameters = () => [
    { type: _src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore/ */ 6717);
/* harmony import */ var _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/plante/plantes.service */ 9842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ 9575);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ 3913);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_5__);













// import { DBService } from './services/db/db.service';





(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default()), 'fr-FR', (_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_5___default()));
// dev
const firebaseConfig = {
    apiKey: 'AIzaSyC6M9FeUa5BavwZorenCX_dq6mPFLJvH4Y',
    authDomain: 'serres-sangatte.firebaseapp.com',
    databaseURL: 'https://serres-sangatte-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'serres-sangatte',
    storageBucket: 'serres-sangatte.appspot.com',
    messagingSenderId: '844932799354',
    appId: '1:844932799354:web:f468a96ec971f9357a94c3',
    measurementId: 'G-8LZGJY7CX3',
};
// prod
// export const firebaseConfig = {
//   apiKey: 'AIzaSyBzMBgDsa0BVaS3oLJvsOp6ySX32Lc1lw0',
//   authDomain: 'serres-sangatte-prod.firebaseapp.com',
//   projectId: 'serres-sangatte-prod',
//   storageBucket: 'serres-sangatte-prod.appspot.com',
//   messagingSenderId: '927739482526',
//   appId: '1:927739482526:web:12245108a4edd85e22468f',
//   measurementId: 'G-09S69TRKTP',
// };
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(firebaseConfig),
            _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_10__.AngularFirestoreModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabaseModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuthModule,
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__.AngularFireStorageModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        ],
        providers: [
            {
                useValue: 'fr-FR',
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy,
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe,
            _services_plante_plantes_service__WEBPACK_IMPORTED_MODULE_2__.PlantesService,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let DataService = class DataService {
    constructor() {
        this.data = [];
    }
    setData(id, data) {
        this.data[id] = data;
    }
    getData(id) {
        return this.data[id];
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 9842:
/*!****************************************************!*\
  !*** ./src/app/services/plante/plantes.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlantesService": () => (/* binding */ PlantesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Operators */ 8049);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 8274);





let PlantesService = class PlantesService {
    constructor(firestore, afSG) {
        this.firestore = firestore;
        this.afSG = afSG;
        this.ref = 'Plantes';
        this.planteList = this.firestore.collection('Plantes');
    }
    getListPlantes() {
        return this.planteList.valueChanges();
    }
    getPlanteList() {
        return this.planteList.valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    postPlanteList(plante) {
        return this.planteList.add(plante);
    }
    getDetailPlante(id) {
        const url = '/' + id;
        return this.planteList.doc(url).valueChanges().pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_0__.first)()).toPromise();
    }
    deletePlante(id) {
        const url = '/' + id;
        return this.planteList.doc(url).delete();
    }
    updatePlante(id, urlImage, values) {
        const url = '/' + id;
        this.planteList.doc(url).update(values);
        return;
    }
};
PlantesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage }
];
PlantesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], PlantesService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8063,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#3366A0, #9EB7D2);\n}\n\nion-list {\n  --ion-background-color: transparent !important;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n  color: #fff;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n  color: #fff;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  color: #fff;\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  color: #fff;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #fffbfb;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #ffffff;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  color: #fff;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #ffffff;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5REFBQTtBQUVGOztBQUFBO0VBQ0UsOENBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxzREFBQTtBQUxGOztBQVFBO0VBQ0UsK0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFORjs7QUFTQTtFQUNFLGlDQUFBO0FBTkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCMzMzY2QTAsICM5RUI3RDIpO1xyXG59XHJcbmlvbi1saXN0IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4vLyB9XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gIGNvbG9yOiAjZmZmYmZiO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header>Menu</ion-list-header>\r\n            <div *ngFor=\"let p of appPages\">\r\n              <ion-menu-toggle *ngIf=\"p.url\">\r\n                <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n                  <ion-icon [name]=\"p.icon\" slot=\"start\" ></ion-icon>\r\n                  <ion-label>{{  p.title }}</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n                <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.active-parent] =\"p.open\" detail=\"false\">\r\n                  <ion-icon name=\"arrow-forward\" slot=\"start\"   *ngIf=\"!p.open\" ></ion-icon>\r\n                  <ion-icon name=\"arrow-down\" slot=\"start\"  *ngIf=\"p.open\"  ></ion-icon>\r\n                  <ion-label>{{  p.title }}</ion-label>\r\n              </ion-item>\r\n              <ion-list *ngIf=\"p.open\">\r\n                <ion-menu-toggle >\r\n                  <ion-item class=\"sub-item\" *ngFor=\"let sub of p.children\"  (click)=\"page(sub.data,sub.url)\"  routerDirection=\"root\" routerLinkActive=\"active\">\r\n                    <ion-icon  slot=\"start\" ></ion-icon>\r\n                    <ion-label>{{ sub.title }}</ion-label>\r\n                  </ion-item>\r\n                </ion-menu-toggle>\r\n              </ion-list>\r\n          </div>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map