(function(e){function t(t){for(var r,c,l=t[0],o=t[1],s=t[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Simon-game/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0a":function(e,t,n){"use strict";var r=n("36e0"),i=n.n(r);i.a},"0fe3":function(e,t,n){},"1d96":function(e,t,n){e.exports=n.p+"media/green.36d5a722.mp3"},"2def":function(e,t,n){"use strict";var r=n("597f"),i=n.n(r);i.a},"36e0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("main",{staticClass:"main"},[n("Game")],1),n("TheFooter")],1)},a=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"header__container container"},[r("div",{staticClass:"logo"},[r("img",{staticClass:"logo__img",attrs:{src:n("cf05"),alt:"logo",width:"50",height:"50"}}),r("p",{staticClass:"logo__text"},[e._v("Simon The Game")])])])])}],o=(n("0b0a"),n("2877")),s={},u=Object(o["a"])(s,c,l,!1,null,null,null),f=u.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__container container"},[n("p",[e._v("Copyright © 2020")])])])}],v=(n("2def"),{}),b=Object(o["a"])(v,d,p,!1,null,null,null),h=b.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("div",{staticClass:"game__board"},e._l(e.buttons,(function(t,r){return n("Button",{key:r,ref:"button",refInFor:!0,attrs:{idx:r,color:t,game:!!e.level&&e.playerTurn},on:{click:e.buttonClickHandler}})})),1),n("div",{staticClass:"game__menu"},[n("Difficulty",{attrs:{options:e.difficultyLevels,disabled:!!e.level},model:{value:e.difficulty,callback:function(t){e.difficulty=e._n(t)},expression:"difficulty"}}),e.level?n("p",{staticClass:"center"},[e._v("Level: "+e._s(e.level))]):e._e(),!e.endgame&&e.level?n("p",{staticClass:"center"},[e._v(" "+e._s(e.playerTurn?"Your turn":"Remember")+" ")]):e._e(),e.endgame?n("p",{staticClass:"center"},[e._v("Game Over")]):e._e(),e.level?e._e():n("button",{staticClass:"start-btn",on:{click:e.start}},[e._v(" "+e._s(e.endgame?"Try again":"Start")+" ")])],1)])},_=[],y=(n("d3b7"),n("ddb0"),n("3835")),g=n("b85c"),x=(n("96cf"),n("1da1")),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{ref:"button",staticClass:"button",class:e.color,on:{click:e.clickHandler}})},O=[],k=(n("a9e3"),{props:{idx:{type:[Number,String],required:!0},color:{type:String,required:!0},game:{type:Boolean,require:!0}},data:function(){return{sound:null}},created:function(){var e=n("ba5b")("./".concat(this.color,".mp3"));this.sound=new Audio(e)},methods:{play:function(){var e=this;this.sound.play(),this.$refs.button.classList.add("active"),setTimeout((function(){e.$refs.button.classList.remove("active")}),300)},clickHandler:function(){this.game&&(this.play(),this.$emit("click",this.idx))}}}),w=k,j=(n("6791"),Object(o["a"])(w,C,O,!1,null,"2942d72d",null)),T=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"difficulty"},[n("p",{staticClass:"difficulty__heading"},[e._v("Choose difficulty")]),e._l(e.options,(function(t,r){return n("label",{key:r,staticClass:"difficulty__label",class:{active:e.value===r,disabled:e.disabled}},[n("input",{staticClass:"difficulty__input",attrs:{type:"radio",name:"difficulty",disabled:e.disabled},domProps:{value:r,checked:e.value===r},on:{input:e.updateValue}}),e._v(" "+e._s(e.capitalize(t.label))+" ")])}))],2)},E=[],L=(n("ac1f"),n("5319"),{props:{value:{type:Number,required:!0},options:{type:Array},disabled:{type:Boolean}},methods:{capitalize:function(e){return e.replace(/^\w/g,(function(e){return e.toUpperCase()}))},updateValue:function(e){this.$emit("input",e.target.value)}}}),S=L,P=(n("8e54"),Object(o["a"])(S,$,E,!1,null,"3db9d8bc",null)),M=P.exports,H={data:function(){return{buttons:["blue","red","yellow","green"],chain:[],difficultyLevels:[{label:"easy",interval:1500},{label:"medium",interval:1e3},{label:"hard",interval:400}],difficulty:0,level:0,position:0,playerTurn:!1,endgame:!1}},computed:{interval:function(){return this.difficultyLevels[this.difficulty].interval}},methods:{buttonClickHandler:function(e){this.level&&(e===this.chain[this.position]?this.position===this.level-1?this.generateLevel():this.position+=1:(this.endgame=!0,this.level=0))},generateLevel:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.level){t.next=3;break}return t.next=3,e.sleep(1e3);case 3:e.playerTurn=!1,e.level+=1,e.position=0,n=Math.round(3*Math.random()),e.chain.push(n),r=Object(g["a"])(e.chain.entries()),t.prev=9,r.s();case 11:if((i=r.n()).done){t.next=19;break}if(a=Object(y["a"])(i.value,2),c=a[0],l=a[1],e.$refs.button[l].play(),c===e.chain.length-1){t.next=17;break}return t.next=17,e.sleep(e.interval);case 17:t.next=11;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](9),r.e(t.t0);case 24:return t.prev=24,r.f(),t.finish(24);case 27:e.playerTurn=!0;case 28:case"end":return t.stop()}}),t,null,[[9,21,24,27]])})))()},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},reset:function(){this.level=0,this.endgame=!1,this.chain=[]},start:function(){this.reset(),this.generateLevel()}},components:{Button:T,Difficulty:M}},q=H,B=(n("c7bb"),Object(o["a"])(q,m,_,!1,null,"1d808ac6",null)),D=B.exports,F={name:"App",components:{TheHeader:f,TheFooter:h,Game:D}},G=F,N=(n("5c0b"),Object(o["a"])(G,i,a,!1,null,null,null)),A=N.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"597f":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},6791:function(e,t,n){"use strict";var r=n("f2b3"),i=n.n(r);i.a},"8e54":function(e,t,n){"use strict";var r=n("b316"),i=n.n(r);i.a},"9c0c":function(e,t,n){},b316:function(e,t,n){},ba5b:function(e,t,n){var r={"./blue.mp3":"dacc","./green.mp3":"1d96","./red.mp3":"fdb1","./yellow.mp3":"c2c2"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="ba5b"},c2c2:function(e,t,n){e.exports=n.p+"media/yellow.c1c96b44.mp3"},c7bb:function(e,t,n){"use strict";var r=n("0fe3"),i=n.n(r);i.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dacc:function(e,t,n){e.exports=n.p+"media/blue.99e50f7d.mp3"},f2b3:function(e,t,n){},fdb1:function(e,t,n){e.exports=n.p+"media/red.d2c4a2c4.mp3"}});
//# sourceMappingURL=app.3ac10936.js.map