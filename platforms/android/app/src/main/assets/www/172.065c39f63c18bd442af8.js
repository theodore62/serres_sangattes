(self.webpackChunkserres_sangatte=self.webpackChunkserres_sangatte||[]).push([[172],{172:function(t,e,i){"use strict";i.r(e),i.d(e,{ion_virtual_scroll:function(){return k}});var n=i(6304),r=i(1112),s=i(1998),l=i(2454),a=i(8774),h=i.n(a),o=i(2322),c=i(1843),u="item",d="header",f="footer",v=function(t,e){var i=p(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},p=function(t,e){switch(e){case u:return t.querySelector("template:not([name])");case d:return t.querySelector("template[name=header]");case f:return t.querySelector("template[name=footer]")}},g=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})},m=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t},y=function(t,e,i,n,r,s,l,a,h,o,c,v){for(var p=[],g=v+c,m=c;m<g;m++){var y=t[m];if(r){var x=r(y,m,t);null!=x&&p.push({i:o++,type:d,value:x,index:m,height:i?i(x,m):l,reads:i?0:2,visible:!!i})}if(p.push({i:o++,type:u,value:y,index:m,height:e?e(y,m):h,reads:e?0:2,visible:!!e}),s){var b=s(y,m,t);null!=b&&p.push({i:o++,type:f,value:b,index:m,height:n?n(b,m):a,reads:n?0:2,visible:!!n})}}return p},x=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n},b=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)},k=function(){function t(e){var i=this;(0,r.Z)(this,t),(0,o.r)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){i.updateVirtualScroll()}}var e,i,a;return(0,s.Z)(t,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(a=(0,n.Z)(h().mark(function t(){var e;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.closest("ion-content")){t.next=4;break}return console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),t.abrupt("return");case 4:return t.next=6,e.getScrollElement();case 6:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState();case 10:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,i){var n=e.find(function(e){return e.type===u&&e.index===t});return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(i=(0,n.Z)(h().mark(function t(e){var i,n,r,s,l=arguments;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=l.length>1&&void 0!==l[1]?l[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:n=-1===i?this.items.length-e:i,r=g(this.cells,e),s=y(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,e,n),this.cells=m(this.cells,s,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 10:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})},{key:"checkEnd",value:(e=(0,n.Z)(h().mark(function t(){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,o.f)(this.readVS.bind(this)),(0,o.c)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.offsetParent;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var t,e,i=this.indexDirty,n=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),r=this.getHeightIndex(),s=function(t,e,i){for(var n=e.top,r=e.bottom,s=0;s<t.length&&!(t[s]>n);s++);for(var l=Math.max(s-2-1,0);s<t.length&&!(t[s]>=r);s++);return{offset:l,length:Math.min(s+2,t.length)-l}}(r,n);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(i,this.range,s)&&(this.range=s,function(t,e,i,n){var r,s=(0,l.Z)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;a.change=0,a.d=!0}}catch(g){s.e(g)}finally{s.f()}for(var h=[],o=n.offset+n.length,c=function(n){var r=i[n],s=t.find(function(t){return t.d&&t.cell===r});if(s){var l=e[n];l!==s.top&&(s.top=l,s.change=1),s.d=!1}else h.push(r)},u=n.offset;u<o;u++)c(u);for(var d=t.filter(function(t){return t.d}),f=function(){var i=p[v],n=d.find(function(t){return t.d&&t.cell.type===i.type}),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},v=0,p=h;v<p.length;v++)f();t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,r,this.cells,s),this.nodeRender?function(t,e,i,n){for(var r,s=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),l=s.length,a=0;a<i.length;a++){var h=i[a],o=h.cell;if(2===h.change){if(a<l)e(r=s[a],o,a);else{var c=v(t,o.type);(r=e(c,o,a)||c).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=o}else r=s[a];0!==h.change&&(r.style.transform="translate3d(0,".concat(h.top,"px,0)"));var u=o.visible;h.visible!==u&&(u?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=u),o.reads>0&&(n(o,r),o.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,o.j)(this))}},{key:"updateCellHeight",value:function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e?(0,c.c)(e,n):n()}},{key:"setCellHeight",value:function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=y(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=b(this.heightIndex,this.cells.length),this.totalHeight=x(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,i=e.value,n=e.index;switch(e.type){case u:return this.renderItem(i,n);case d:return this.renderHeader(i,n);case f:return this.renderFooter(i,n)}}},{key:"render",value:function(){var t=this;return(0,o.h)(o.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,o.h)(H,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)})))}},{key:"el",get:function(){return(0,o.i)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),t}(),H=function(t,e,i){var n=t.dom;return i.map(e,function(t,e){var i=n[e],r=t.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:s,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(i.top,"px,0)")})})})})};k.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);