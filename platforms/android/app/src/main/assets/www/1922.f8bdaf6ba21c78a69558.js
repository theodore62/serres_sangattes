(self.webpackChunkserres_sangatte=self.webpackChunkserres_sangatte||[]).push([[1922],{1922:function(e,n,o){"use strict";o.r(n),o.d(n,{AjouterFleurPageModule:function(){return F}});var t=o(1116),r=o(1462),i=o(4812),l=o(9272),u=o(4762),a=o(5366),s=o(5540),c=o(7617),p=o(5411),g=o(239),h=o(1585),m=o(80),d=["type"];function f(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," champ obligatoire "),a.qZA())}function Z(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," minimun 2 caract\xe9res "),a.qZA())}function q(e,n){if(1&e&&(a.TgZ(0,"ion-select-option",33),a._uU(1),a.qZA()),2&e){var o=n.$implicit;a.s9C("value",o.nom),a.xp6(1),a.Oqu(o.nom)}}function T(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," champ obligatoire "),a.qZA())}function b(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," minimun 2 caract\xe9res "),a.qZA())}function v(e,n){1&e&&(a.TgZ(0,"ion-select",35),a.TgZ(1,"ion-select-option",36),a._uU(2,"Annuelles"),a.qZA(),a.TgZ(3,"ion-select-option",37),a._uU(4,"Bisannuelles"),a.qZA(),a.TgZ(5,"ion-select-option",38),a._uU(6,"Vivaces"),a.qZA(),a.TgZ(7,"ion-select-option",39),a._uU(8,"Aromatiques"),a.qZA(),a.qZA())}function A(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," champ obligatoire "),a.qZA())}function C(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," minimun 2 caract\xe9res "),a.qZA())}function _(e,n){if(1&e&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label",1),a._uU(2,"Epoque de fleuraison:"),a.qZA(),a.YNc(3,v,9,0,"ion-select",34),a.YNc(4,A,2,0,"span",7),a.YNc(5,C,2,0,"span",7),a.qZA()),2&e){var o=a.oxw();a.xp6(3),a.Q6J("ngIf","Fleur"===o.epoque),a.xp6(1),a.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.fleuraison.errors?null:o.errorControl.fleuraison.errors.required)),a.xp6(1),a.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.fleuraison.errors?null:o.errorControl.fleuraison.errors.minlength))}}function y(e,n){1&e&&(a.TgZ(0,"ion-select",41),a.TgZ(1,"ion-select-option",42),a._uU(2,"Ete"),a.qZA(),a.TgZ(3,"ion-select-option",43),a._uU(4,"Hiver"),a.qZA(),a.qZA())}function U(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," champ obligatoire "),a.qZA())}function x(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," minimun 2 caract\xe9res "),a.qZA())}function I(e,n){if(1&e&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label",1),a._uU(2,"Epoque de r\xe9colte:"),a.qZA(),a.YNc(3,y,5,0,"ion-select",40),a.YNc(4,U,2,0,"span",7),a.YNc(5,x,2,0,"span",7),a.qZA()),2&e){var o=a.oxw();a.xp6(3),a.Q6J("ngIf","Fruit"===o.epoque||"Legumes"===o.epoque),a.xp6(1),a.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.fleuraison.errors?null:o.errorControl.fleuraison.errors.required)),a.xp6(1),a.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.fleuraison.errors?null:o.errorControl.fleuraison.errors.minlength))}}function J(e,n){1&e&&(a.TgZ(0,"ion-label",1),a._uU(1,"p\xe9riode de r\xe9colte:"),a.qZA())}function N(e,n){1&e&&(a.TgZ(0,"ion-label",1),a._uU(1,"Mois de fleuraison:"),a.qZA())}function Y(e,n){if(1&e&&(a.TgZ(0,"ion-select-option",33),a._uU(1),a.qZA()),2&e){var o=n.$implicit;a.s9C("value",o),a.xp6(1),a.Oqu(o)}}function k(e,n){if(1&e&&(a.TgZ(0,"ion-select-option",33),a._uU(1),a.qZA()),2&e){var o=n.$implicit;a.s9C("value",o),a.xp6(1),a.Oqu(o)}}function O(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," champ obligatoire "),a.qZA())}function S(e,n){1&e&&(a.TgZ(0,"span",32),a._uU(1," minimun 2 caract\xe9res "),a.qZA())}var P=[{path:"",component:function(){function e(e,n,o,t,r,i,l,u,a,s){this.router=e,this.alertController=n,this.formBuilder=o,this.afDB=t,this.firestore=r,this.toastCtrl=i,this.planteList=l,this.camera=u,this.afSG=a,this.loadingController=s,this.isSubmitted=!1,this.image="",this.plante={id:"",nom:"",variete:"",couleur:"",fleuraison:"",hauteur:"",description:"",type:"",de:"",a:"",image:""},this.items=this.firestore.collection("Variete").valueChanges(),this.buttonColor="#9eb7d2",this.listMois=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"]}return Object.defineProperty(e.prototype,"errorControl",{get:function(){return this.annonce.controls},enumerable:!1,configurable:!0}),e.prototype.ngOnInit=function(){null==this.epoque&&this.epoqueFleuraison(),this.annonce=this.formBuilder.group({nom:["",[r.kI.required,r.kI.minLength(2)]],variete:["",[r.kI.required]],couleur:["",[r.kI.required]],fleuraison:["",[r.kI.required]],hauteur:["",[r.kI.required]],description:["",[r.kI.required]],type:["",[r.kI.required]],de:["",[r.kI.required]],a:["",[r.kI.required]]})},e.prototype.ajouter=function(){this.router.navigateByUrl("/ajouter-varieter")},e.prototype.optionsfn=function(){this.epoque=this.theSelectObject.value},e.prototype.epoqueFleuraison=function(){return(0,u.mG)(this,void 0,void 0,function(){var e=this;return(0,u.Jh)(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({cssClass:"my-custom-class",header:"type de la plante",inputs:[{name:"radio1",type:"radio",label:"Fleur",value:"Fleur",handler:function(){},checked:!0},{name:"radio2",type:"radio",label:"Fruit",value:"Fruit",handler:function(){}},{name:"radio3",type:"radio",label:"Legumes",value:"Legumes",handler:function(){}}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){}},{text:"Ok",handler:function(n){console.log(n),e.epoque=n}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},e.prototype.addAnnonce=function(){var e=this;console.log(this.annonce),this.annonce.valid?(this.plante.nom=this.annonce.value.nom,this.plante.variete=this.annonce.value.variete,this.plante.couleur=this.annonce.value.couleur,this.plante.fleuraison=this.annonce.value.fleuraison,this.plante.hauteur=this.annonce.value.hauteur,this.plante.description=this.annonce.value.description,this.plante.type=this.annonce.value.type,this.plante.de=this.annonce.value.de,this.plante.a=this.annonce.value.a,this.url=this.image,console.log(this.url),""!==this.url?(this.imagePath=(new Date).getTime()+".jpg",this.planteList.postPlanteList(this.plante).then(function(n){null==n.id?(e.message="les donn\xe9es n'ont pas pu \xeatre enregistr\xe9es",e.toastCtrl.showToast(e.message)):(e.firestore.doc("Plantes/"+n.id).set({id:n.id,nom:e.plante.nom,variete:e.plante.variete,couleur:e.plante.couleur,fleuraison:e.plante.fleuraison,hauteur:e.plante.hauteur,description:e.plante.description,type:e.plante.type,de:e.plante.de,a:e.plante.a,image:e.imagePath}),e.uploadFirebase())})):(this.message="veuilliez rajouter une image",this.toastCtrl.showToast(this.message))):(this.message="Veuillez compl\xe9ter le formulaire",this.toastCtrl.showToast(this.message))},e.prototype.addPhoto=function(){return(0,u.mG)(this,void 0,void 0,function(){var e;return(0,u.Jh)(this,function(n){switch(n.label){case 0:return[4,this.openLibrary()];case 1:return e=n.sent(),this.image="data:image/jpg;base64,"+e,[2]}})})},e.prototype.openLibrary=function(){return(0,u.mG)(this,void 0,void 0,function(){return(0,u.Jh)(this,function(e){switch(e.label){case 0:return[4,this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetWidth:1e3,targetHeight:1e3,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY})];case 1:return[2,e.sent()]}})})},e.prototype.uploadFirebase=function(){return(0,u.mG)(this,void 0,void 0,function(){var e,n=this;return(0,u.Jh)(this,function(o){switch(o.label){case 0:return[4,this.loadingController.create({duration:2e3})];case 1:return[4,(e=o.sent()).present()];case 2:return o.sent(),this.upload=this.afSG.ref(this.imagePath).putString(this.image,"data_url"),this.upload.then(function(){return(0,u.mG)(n,void 0,void 0,function(){return(0,u.Jh)(this,function(n){switch(n.label){case 0:return[4,e.onDidDismiss()];case 1:return n.sent(),this.image="https://www.kasterencultuur.nl/editor/placeholder.jpg",this.message="Les donn\xe9es ont bien \xe9t\xe9 enregistr\xe9es",this.toastCtrl.showToast(this.message),[2]}})})}),[2]}})})},e.\u0275fac=function(n){return new(n||e)(a.Y36(l.F0),a.Y36(i.Br),a.Y36(r.qu),a.Y36(s.KQ),a.Y36(c.ST),a.Y36(p.a),a.Y36(g.B),a.Y36(h.V1),a.Y36(m.Q1),a.Y36(i.HT))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-ajouter-fleur"]],viewQuery:function(e,n){var o;1&e&&a.Gf(d,5),2&e&&a.iGM(o=a.CRH())&&(n.theSelectObject=o.first)},decls:78,vars:18,consts:[["slot","start"],["color","light"],["slot","end",3,"click"],["size","large","name","add-circle-outline"],[2,"background-color","silver"],[3,"formGroup","ngSubmit"],["color","light","type","text","placeholder","nom","formControlName","nom"],["class","error ion-padding",4,"ngIf"],["color","light","placeholder","Selectioner la variet\xe9","required","","formControlName","variete"],[3,"value",4,"ngFor","ngForOf"],["color","light","type","text","placeholder","couleur","required","","formControlName","couleur"],[4,"ngIf"],["color","light",4,"ngIf"],["color","light","placeholder","de","required","","formControlName","de"],["color","light",2,"width","2em"],["color","light","placeholder","a","required","","formControlName","a"],["color","light","placeholder","Selectioner la Hauteur","required","","formControlName","hauteur"],["value","basse"],["value","moyenne"],["value","haute"],["color","light","rows","6","cols","20","placeholder","description","required","","formControlName","description"],["placeholder","Selectioner le Type","required","","formControlName","type",1,"custom-options",3,"value","ionChange"],["type",""],["value","Fleur","color","light"],["value","Fruit","color","light"],["value","Legumes","color","light"],["expand","block","id","imageB",3,"click"],["name","image","slot","start"],[1,"flex"],[1,"img-box"],["id","url",3,"src"],["type","submit","expand","block"],[1,"error","ion-padding"],[3,"value"],["color","light","placeholder","Selectioner la fleuraison","required","","formControlName","fleuraison",4,"ngIf"],["color","light","placeholder","Selectioner la fleuraison","required","","formControlName","fleuraison"],["value","Annuelles"],["value","Bisannuelles"],["value","Vivaces"],["value","Aromatiques"],["color","light","placeholder","Selectioner la r\xe9colte","required","","formControlName","fleuraison",4,"ngIf"],["color","light","placeholder","Selectioner la r\xe9colte","required","","formControlName","fleuraison"],["value","Ete"],["value","Hiver"]],template:function(e,n){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-back-button",1),a.qZA(),a.TgZ(4,"ion-title",1),a._uU(5,"ajouter une plante"),a.qZA(),a.TgZ(6,"ion-buttons",2),a.NdJ("click",function(){return n.ajouter()}),a._UZ(7,"ion-icon",3),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"ion-content"),a.TgZ(9,"ion-list",4),a.TgZ(10,"form",5),a.NdJ("ngSubmit",function(){return n.addAnnonce()}),a.TgZ(11,"ion-item"),a.TgZ(12,"ion-label",1),a._uU(13,"Nom commun :"),a.qZA(),a._UZ(14,"ion-input",6),a.YNc(15,f,2,0,"span",7),a.YNc(16,Z,2,0,"span",7),a.qZA(),a.TgZ(17,"ion-item"),a.TgZ(18,"ion-label",1),a._uU(19,"Vari\xe9t\xe9es:"),a.qZA(),a.TgZ(20,"ion-select",8),a.YNc(21,q,2,2,"ion-select-option",9),a.ALo(22,"async"),a.qZA(),a.qZA(),a.TgZ(23,"ion-item"),a.TgZ(24,"ion-label",1),a._uU(25,"Couleur:"),a.qZA(),a._UZ(26,"ion-input",10),a.YNc(27,T,2,0,"span",7),a.YNc(28,b,2,0,"span",7),a.qZA(),a.YNc(29,_,6,3,"ion-item",11),a.YNc(30,I,6,3,"ion-item",11),a.TgZ(31,"ion-item"),a.YNc(32,J,2,0,"ion-label",12),a.YNc(33,N,2,0,"ion-label",12),a.TgZ(34,"ion-item"),a.TgZ(35,"ion-select",13),a.YNc(36,Y,2,2,"ion-select-option",9),a.qZA(),a.qZA(),a.TgZ(37,"ion-item"),a.TgZ(38,"ion-label",14),a._uU(39,"\xe0"),a.qZA(),a.qZA(),a.TgZ(40,"ion-item"),a.TgZ(41,"ion-select",15),a.YNc(42,k,2,2,"ion-select-option",9),a.qZA(),a.qZA(),a.qZA(),a.TgZ(43,"ion-item"),a.TgZ(44,"ion-label",1),a._uU(45,"Hauteur:"),a.qZA(),a.TgZ(46,"ion-select",16),a.TgZ(47,"ion-select-option",17),a._uU(48,"basse (5-20cm)"),a.qZA(),a.TgZ(49,"ion-select-option",18),a._uU(50,"moyenne (30-50cm)"),a.qZA(),a.TgZ(51,"ion-select-option",19),a._uU(52,"haute (80cm et +)"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(53,"ion-item"),a.TgZ(54,"ion-label",1),a._uU(55,"Description:"),a.qZA(),a._UZ(56,"ion-textarea",20),a.YNc(57,O,2,0,"span",7),a.YNc(58,S,2,0,"span",7),a.qZA(),a.TgZ(59,"ion-item"),a.TgZ(60,"ion-label",1),a._uU(61,"Type de plante"),a.qZA(),a.TgZ(62,"ion-select",21,22),a.NdJ("ionChange",function(){return n.optionsfn()}),a.TgZ(64,"ion-select-option",23),a._uU(65,"Fleur"),a.qZA(),a.TgZ(66,"ion-select-option",24),a._uU(67,"Fruit"),a.qZA(),a.TgZ(68,"ion-select-option",25),a._uU(69,"L\xe9gume"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(70,"ion-button",26),a.NdJ("click",function(){return n.addPhoto()}),a._UZ(71,"ion-icon",27),a._uU(72," Ouvrir la biblioth\xe8que "),a.qZA(),a.TgZ(73,"div",28),a.TgZ(74,"div",29),a._UZ(75,"img",30),a.qZA(),a.qZA(),a.TgZ(76,"ion-button",31),a._uU(77,"Valider"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(10),a.Q6J("formGroup",n.annonce),a.xp6(5),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.nom.errors?null:n.errorControl.nom.errors.required)),a.xp6(1),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.nom.errors?null:n.errorControl.nom.errors.minlength)),a.xp6(5),a.Q6J("ngForOf",a.lcZ(22,16,n.items)),a.xp6(6),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.couleur.errors?null:n.errorControl.couleur.errors.required)),a.xp6(1),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.couleur.errors?null:n.errorControl.couleur.errors.minlength)),a.xp6(1),a.Q6J("ngIf","Fleur"===n.epoque),a.xp6(1),a.Q6J("ngIf","Fruit"===n.epoque||"Legumes"===n.epoque),a.xp6(2),a.Q6J("ngIf","Fruit"===n.epoque||"Legumes"===n.epoque),a.xp6(1),a.Q6J("ngIf","Fleur"===n.epoque),a.xp6(3),a.Q6J("ngForOf",n.listMois),a.xp6(6),a.Q6J("ngForOf",n.listMois),a.xp6(15),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.description.errors?null:n.errorControl.description.errors.required)),a.xp6(1),a.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.description.errors?null:n.errorControl.description.errors.minlength)),a.xp6(4),a.s9C("value",n.epoque),a.xp6(13),a.Q6J("src",n.image,a.LSH))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.gu,i.W2,i.q_,r._Y,r.JL,r.sg,i.Ie,i.Q$,i.pK,i.j9,r.JJ,r.u,t.O5,i.t9,i.QI,r.Q7,t.sg,i.n0,i.g2,i.YG],pipes:[t.Ov],styles:["ion-header[_ngcontent-%COMP%]{--ion-background-color:#3366a0}ion-content[_ngcontent-%COMP%]{color:#fff;--ion-background-color:linear-gradient(#3366a0,#9eb7d2)}ion-buttons[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{color:#fff}ion-button[_ngcontent-%COMP%]{--background:#9eb7d2}#imageB[_ngcontent-%COMP%]{--background:#7699bf}.my-custom-interface[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%]{--color:#971e49;--color-hover:#79193b}ion-item[_ngcontent-%COMP%]{--ion-background-color:#0000!important}.flex[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center}.img-box[_ngcontent-%COMP%]{overflow:hidden}.img-box[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{height:200px}"]}),e}()}],w=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[l.Bz.forChild(P)],l.Bz]}),e}(),F=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[t.ez,r.u5,r.UX,i.Pc,w]]}),e}()},5411:function(e,n,o){"use strict";o.d(n,{a:function(){return i}});var t=o(5366),r=o(4812),i=function(){function e(e){this.toast=e}return e.prototype.showToast=function(e){this.myToast=this.toast.create({message:e,duration:2e3,position:"top",cssClass:"message"}).then(function(e){console.log(e),e.present()})},e.\u0275fac=function(n){return new(n||e)(t.LFG(r.yF))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);