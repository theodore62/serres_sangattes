(self.webpackChunkserres_sangatte=self.webpackChunkserres_sangatte||[]).push([[7164],{7164:function(t,n,e){"use strict";e.r(n),e.d(n,{FleursPageModule:function(){return C}});var i=e(1116),o=e(1462),r=e(4812),s=e(9272),a=e(4762),c=e(9960),l=e(5366),u=e(7617),f=e(4519),h=e(239),p=e(80);function d(t,n){if(1&t){var e=l.EpF();l.TgZ(0,"ion-list"),l.TgZ(1,"ion-item-sliding"),l.TgZ(2,"ion-item",4),l.NdJ("click",function(){var t=l.CHM(e).$implicit;return l.oxw().detail(t.id)}),l.TgZ(3,"ion-thumbnail",0),l._UZ(4,"ion-img",5),l.qZA(),l.TgZ(5,"ion-label"),l._uU(6),l.qZA(),l.qZA(),l.TgZ(7,"ion-item-options",6),l.TgZ(8,"ion-item-option",7),l.NdJ("click",function(){var t=l.CHM(e).$implicit;return l.oxw().delete(t.id,t.image)}),l._UZ(9,"ion-icon",8),l.qZA(),l.TgZ(10,"ion-item-option",7),l.NdJ("click",function(){var t=l.CHM(e).$implicit;return l.oxw().update(t.id,t.fleuraison)}),l._UZ(11,"img",9),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&t){var i=n.$implicit;l.xp6(4),l.Q6J("src",i.image),l.xp6(2),l.Oqu(i.nom)}}var g=[{path:"",component:function(){function t(t,n,e,i,o,r,s,a,c){this.firestore=t,this.dataService=n,this.router=e,this.plantesService=i,this.afSG=o,this.alertController=r,this.modalController=s,this.routerOutlet=a,this.navCtrl=c,this.tableauPlante=[]}return t.prototype.ngOnInit=function(){return(0,a.mG)(this,void 0,void 0,function(){var t;return(0,a.Jh)(this,function(n){switch(n.label){case 0:return this.datas=this.dataService.getData("data"),t=this,[4,this.initializeItems()];case 1:return t.planteList=n.sent(),[2]}})})},t.prototype.doRefresh=function(t){return(0,a.mG)(this,void 0,void 0,function(){var n,e=this;return(0,a.Jh)(this,function(i){switch(i.label){case 0:return[4,this.initializeItems()];case 1:return n=i.sent(),console.log("Begin async operation"),setTimeout(function(){e.planteList=n,console.log("Async operation has ended"),t.target.complete()},2e3),[2]}})})},t.prototype.initializeItems=function(){return(0,a.mG)(this,void 0,void 0,function(){var t=this;return(0,a.Jh)(this,function(n){switch(n.label){case 0:return this.tableauPlante=[],[4,this.plantesService.getPlanteList()];case 1:return n.sent().forEach(function(n){n.fleuraison===t.datas&&(console.log(n.image),t.afSG.ref("/"+n.image).getDownloadURL().subscribe(function(e){n.image=e,t.tableauPlante.push(n)}))}),console.log(this.tableauPlante),[2,this.tableauPlante]}})})},t.prototype.filterList=function(t){return(0,a.mG)(this,void 0,void 0,function(){var n,e;return(0,a.Jh)(this,function(i){switch(i.label){case 0:return n=this,[4,this.initializeItems()];case 1:return n.planteList=i.sent(),(e=t.srcElement.value)?(this.planteList=this.planteList.filter(function(t){if(t.nom&&e)return t.nom.toLowerCase().indexOf(e.toLowerCase())>-1||t.variete.toLowerCase().indexOf(e.toLowerCase())>-1||t.couleur.toLowerCase().indexOf(e.toLowerCase())>-1||t.hauteur.toLowerCase().indexOf(e.toLowerCase())>-1||t.de.toLowerCase().indexOf(e.toLowerCase())>-1}),[2]):[2]}})})},t.prototype.detail=function(t){this.dataService.setData("id",t),this.router.navigateByUrl("/details")},t.prototype.delete=function(t,n){return(0,a.mG)(this,void 0,void 0,function(){var e;return(0,a.Jh)(this,function(i){switch(i.label){case 0:return this.afSG.refFromURL(n).delete(),this.plantesService.deletePlante(t),this.tableauPlante=[],e=this,[4,this.initializeItems()];case 1:return e.planteList=i.sent(),console.log(this.planteList),[2]}})})},t.prototype.update=function(t,n){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(e){switch(e.label){case 0:return[4,this.modalController.create({component:c.P,cssClass:"my-custom-class",componentProps:{data:"plante",id:t,fleuraison:n}})];case 1:return[4,e.sent().present()];case 2:return[2,e.sent()]}})})},t.\u0275fac=function(n){return new(n||t)(l.Y36(u.ST),l.Y36(f.D),l.Y36(s.F0),l.Y36(h.B),l.Y36(p.Q1),l.Y36(r.Br),l.Y36(r.IN),l.Y36(r.jP),l.Y36(r.SH))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-fleurs"]],decls:12,vars:1,consts:[["slot","start"],[3,"ionChange"],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],[3,"click"],[3,"src"],["side","end"],["color","red",3,"click"],["name","trash-outline","size","small"],["src","https://img.icons8.com/carbon-copy/25/000000/approve-and-update.png"]],template:function(t,n){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l._UZ(3,"ion-back-button"),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Fleurs"),l.qZA(),l.qZA(),l.TgZ(6,"ion-toolbar"),l.TgZ(7,"ion-searchbar",1),l.NdJ("ionChange",function(t){return n.filterList(t)}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"ion-content"),l.TgZ(9,"ion-refresher",2),l.NdJ("ionRefresh",function(t){return n.doRefresh(t)}),l._UZ(10,"ion-refresher-content"),l.qZA(),l.YNc(11,d,12,2,"ion-list",3),l.qZA()),2&t&&(l.xp6(11),l.Q6J("ngForOf",n.planteList))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.VI,r.j9,r.W2,r.nJ,r.Wo,i.sg,r.q_,r.td,r.Ie,r.Bs,r.Xz,r.Q$,r.IK,r.u8,r.gu],styles:["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-header[_ngcontent-%COMP%]{--ion-background-color:#3366a0}ion-content[_ngcontent-%COMP%]{color:#fff;--ion-background-color:linear-gradient(#3366a0,#9eb7d2)}ion-back-button[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{color:#fff}ion-button[_ngcontent-%COMP%]{--background:#4070a6}ion-item[_ngcontent-%COMP%], ion-item-option[_ngcontent-%COMP%], ion-item-options[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--ion-background-color:#0000!important}.my-custom-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{height:20%;top:80%;position:absolute;display:block}"]}),t}()}],m=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t}(),C=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,o.u5,r.Pc,m]]}),t}()}}]);