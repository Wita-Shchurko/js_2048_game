parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(F){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var s="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function d(){}function m(){}function w(){}var b={};h(b,a,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(P([])));x&&x!==e&&n.call(x,a)&&(b=x);var E=w.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach(function(r){h(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}})}function O(t,e,n){var o=s;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===s)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var h=f(t,e,n);if("normal"===h.type){if(o=n.done?v:p,h.arg===g)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=v,n.method="throw",n.arg=h.arg)}}}function k(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method)?g:("return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g);var i=f(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,c,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(E),h(E,u,"Generator"),h(E,a,function(){return this}),h(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"KIzB":[function(require,module,exports) {
"use strict";function e(e,t,n,r,i,u,o){try{var s=e[u](o),l=s.value}catch(a){return void n(a)}s.done?t(l):Promise.resolve(l).then(r,i)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(i,u){var o=t.apply(n,r);function s(t){e(o,i,u,s,l,"next",t)}function l(t){e(o,i,u,s,l,"throw",t)}s(void 0)})}}function n(e){return o(e)||u(e)||i(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}require("regenerator-runtime/runtime");var f=document.querySelector(".game_score"),p=0,d=function(){function e(t,n,r){l(this,e);var i=document.createElement("div");i.classList.add("field_cell"),t.append(i),this.x=n,this.y=r}return c(e,[{key:"restartScore",value:function(){p=0,f.innerHTML=p}},{key:"linkTile",value:function(e){e.setXY(this.x,this.y),this.linkedTile=e}},{key:"unlinkTile",value:function(){this.linkedTile=null}},{key:"isEmpty",value:function(){return!this.linkedTile}},{key:"linkTileForMerge",value:function(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}},{key:"unlinkTileForMerge",value:function(){this.linkedTileForMerge=null}},{key:"hasTileForMerge",value:function(){return!!this.linkedTileForMerge}},{key:"canAccept",value:function(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}},{key:"mergeTiles",value:function(){this.linkedTile.setValue(2*this.linkedTile.value),p+=this.linkedTile.value,f.innerHTML=p,this.linkedTileForMerge.removeFromDOM(),this.unlinkTileForMerge()}}]),e}(),m=4,y=function(){function e(t){l(this,e),this.cells=[];for(var n=0;n<m*m;n++)this.cells.push(new d(t,n%m,Math.floor(n/m)));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByRow=this.groupCellsByRow(),this.cellsGroupedByReversedColumn=this.groupByReversedColumn(),this.cellsGroupedByReversedRow=this.groupByReversedRow()}return c(e,[{key:"groupByReversedColumn",value:function(){return this.cellsGroupedByColumn.map(function(e){return n(e).reverse()})}},{key:"groupByReversedRow",value:function(){return this.cellsGroupedByRow.map(function(e){return n(e).reverse()})}},{key:"getRandomEmptyCell",value:function(){var e=this.cells.filter(function(e){return e.isEmpty()});return e[Math.floor(Math.random()*e.length)]}},{key:"groupCellsByColumn",value:function(){return this.cells.reduce(function(e,t){return e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e},[])}},{key:"groupCellsByRow",value:function(){return this.cells.reduce(function(e,t){return e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e},[])}}]),e}(),h=80,v=20,k=50,g=function(){function e(t){l(this,e),this.tileElement=document.createElement("div"),this.tileElement.classList.add("field_tile"),this.setValue(Math.random()>.1?2:4),t.append(this.tileElement)}return c(e,[{key:"setXY",value:function(e,t){this.x=e,this.y=t,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",t)}},{key:"setValue",value:function(e){this.value=e,this.tileElement.textContent=this.value;var t=100-7*Math.log2(e);(this.tileElement.style.setProperty("--bg-lightness","".concat(t,"%")),this.tileElement.style.setProperty("--text-lightness","".concat(t<k?h:v,"%")),2048===this.value)&&document.querySelector(".message_win").classList.remove("hidden")}},{key:"removeFromDOM",value:function(){this.tileElement.remove()}},{key:"waitForTransitionEnd",value:function(){var e=this;return new Promise(function(t){e.tileElement.addEventListener("transitionend",t,{once:!0})})}},{key:"waitForAnimationEnd",value:function(){var e=this;return new Promise(function(t){e.tileElement.addEventListener("animationend",t,{once:!0})})}}]),e}();window.CSS.registerProperty({name:"--border-angle",syntax:"<angle>",inherits:!0,initialValue:"0turn"});var w=document.querySelector(".button"),T=document.querySelectorAll(".message"),E=document.getElementById("game_field"),R=new y(E);function b(){window.addEventListener("keydown",x,{once:!0})}function x(e){return C.apply(this,arguments)}function C(){return(C=t(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next="ArrowUp"===e.t0?3:"ArrowDown"===e.t0?9:"ArrowLeft"===e.t0?15:"ArrowRight"===e.t0?21:27;break;case 3:if(q()){e.next=6;break}return b(),e.abrupt("return");case 6:return e.next=8,B();case 8:return e.abrupt("break",29);case 9:if(D()){e.next=12;break}return b(),e.abrupt("return");case 12:return e.next=14,A();case 14:return e.abrupt("break",29);case 15:if(I()){e.next=18;break}return b(),e.abrupt("return");case 18:return e.next=20,L();case 20:return e.abrupt("break",29);case 21:if(V()){e.next=24;break}return b(),e.abrupt("return");case 24:return e.next=26,S();case 26:return e.abrupt("break",29);case 27:return b(),e.abrupt("return");case 29:if(n=new g(E),R.getRandomEmptyCell().linkTile(n),q()||D()||I()||V()){e.next=36;break}return e.next=34,n.waitForAnimationEnd();case 34:return U("message_lose"),e.abrupt("return");case 36:b();case 37:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(){return M.apply(this,arguments)}function M(){return(M=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(R.cellsGroupedByColumn);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(){return F.apply(this,arguments)}function F(){return(F=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(R.cellsGroupedByReversedColumn);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return G.apply(this,arguments)}function G(){return(G=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(R.cellsGroupedByRow);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return P.apply(this,arguments)}function P(){return(P=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(R.cellsGroupedByReversedRow);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return(O=t(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.forEach(function(e){return j(e,n)}),e.next=4,Promise.all(n);case 4:R.cells.forEach(function(e){e.hasTileForMerge()&&e.mergeTiles()});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e,t){for(var n=1;n<e.length;n++)if(!e[n].isEmpty()){for(var r=e[n],i=void 0,u=n-1;u>=0&&e[u].canAccept(r.linkedTile);)i=e[u],u--;i&&(t.push(r.linkedTile.waitForTransitionEnd()),i.isEmpty()?i.linkTile(r.linkedTile):i.linkTileForMerge(r.linkedTile),r.unlinkTile())}}function q(){return X(R.cellsGroupedByColumn)}function D(){return X(R.cellsGroupedByReversedColumn)}function I(){return X(R.cellsGroupedByRow)}function V(){return X(R.cellsGroupedByReversedRow)}function X(e){return e.some(function(e){return Y(e)})}function Y(e){return e.some(function(t,n){return 0!==n&&(!t.isEmpty()&&e[n-1].canAccept(t.linkedTile))})}function H(e){T.forEach(function(t){t.classList.contains(e)&&t.classList.add("hidden")})}function U(e){T.forEach(function(t){t.classList.contains(e)&&t.classList.remove("hidden")})}w.addEventListener("click",function(){w.classList.contains("start")&&(w.classList.remove("start"),w.classList.add("restart"),w.textContent="RESTART",H("message_start")),R.cells.forEach(function(e){e.isEmpty()||(e.linkedTile.removeFromDOM(),e.unlinkTile(),e.restartScore())}),H("message_lose"),H("message_win"),R.getRandomEmptyCell().linkTile(new g(E)),R.getRandomEmptyCell().linkTile(new g(E)),b()}),b();
},{"regenerator-runtime/runtime":"QVnC"}]},{},["KIzB"], null)
//# sourceMappingURL=main.21c4669f.js.map