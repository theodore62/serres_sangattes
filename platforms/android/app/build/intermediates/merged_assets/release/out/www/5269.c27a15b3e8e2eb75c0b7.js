(self.webpackChunkserres_sangatte=self.webpackChunkserres_sangatte||[]).push([[5269],{5269:function(i,n,e){"use strict";e.r(n),e.d(n,{ion_infinite_scroll:function(){return h},ion_infinite_scroll_content:function(){return g}});var t=e(5587),s=e(6304),r=e(1112),l=e(1998),o=e(8774),c=e.n(o),a=e(2322),d=e(7505),f=e(7942),h=function(){function i(n){var e=this;(0,r.Z)(this,i),(0,a.r)(this,n),this.ionInfinite=(0,a.e)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=e.scrollEl;if(!i||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var t=i.scrollTop,s=i.offsetHeight,r=0!==e.thrPc?s*e.thrPc:e.thrPx;if(("bottom"===e.position?i.scrollHeight-n-t-r-s:t-n-r)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4}}var n,e;return(0,l.Z)(i,[{key:"thresholdChanged",value:function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}},{key:"disabledChanged",value:function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}},{key:"connectedCallback",value:(e=(0,s.Z)(c().mark(function i(){var n,e=this;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=this.el.closest("ion-content")){i.next=4;break}return console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),i.abrupt("return");case 4:return i.next=6,n.getScrollElement();case 6:this.scrollEl=i.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&(0,a.c)(function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)});case 10:case"end":return i.stop()}},i,this)})),function(){return e.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:(n=(0,s.Z)(c().mark(function i(){var n,e,t=this;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=this.scrollEl,this.isLoading&&n){i.next=3;break}return i.abrupt("return");case 3:this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,e=n.scrollHeight-n.scrollTop,requestAnimationFrame(function(){(0,a.f)(function(){var i=n.scrollHeight-e;requestAnimationFrame(function(){(0,a.c)(function(){n.scrollTop=i,t.isBusy=!1})})})}));case 5:case"end":return i.stop()}},i,this)})),function(){return n.apply(this,arguments)})},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var i,n=(0,d.b)(this),e=this.disabled;return(0,a.h)(a.H,{class:(i={},(0,t.Z)(i,n,!0),(0,t.Z)(i,"infinite-scroll-loading",this.isLoading),(0,t.Z)(i,"infinite-scroll-enabled",!e),i)})}},{key:"el",get:function(){return(0,a.i)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),i}();h.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var g=function(){function i(n){(0,r.Z)(this,i),(0,a.r)(this,n)}return(0,l.Z)(i,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var i=(0,d.b)(this);this.loadingSpinner=d.c.get("infiniteLoadingSpinner",d.c.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"render",value:function(){var i,n=(0,d.b)(this);return(0,a.h)(a.H,{class:(i={},(0,t.Z)(i,n,!0),(0,t.Z)(i,"infinite-scroll-content-".concat(n),!0),i)},(0,a.h)("div",{class:"infinite-loading"},this.loadingSpinner&&(0,a.h)("div",{class:"infinite-loading-spinner"},(0,a.h)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&(0,a.h)("div",{class:"infinite-loading-text",innerHTML:(0,f.s)(this.loadingText)})))}}]),i}();g.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);