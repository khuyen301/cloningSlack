!function(){"use strict";var t,e,n,o,r,a,i,c,s,l,d,f,u,p,m={263:function(t,e,n){var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Lemonada:wght@700&family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([t.id,'.class1{color:#ff0;text-align:center}.classDemo2{text-align:center}.nav-bg{background-color:#f4ede4}.nav-bg .container{max-width:1320px;margin:0 auto;padding:0 1rem}.nav-bg .nav-video{display:flex;justify-content:space-between}.nav-bg .nav-vd{max-width:50%;height:auto}.nav-bg .nav-vd video{max-width:100%}.nav-bg .nav-content-right{width:50%;display:flex;justify-content:center;align-items:center;padding-left:10rem}.nav-bg .nav-content-right h1{color:#000;font-size:5rem;font-weight:700;line-height:1.12;padding-left:2rem;margin-bottom:1rem}.nav-bg .nav-content-right p{color:#000;line-height:1.4444;font-size:1.8rem;font-weight:400;padding-right:11rem;padding-left:2rem;margin-bottom:2rem}.nav-bg .nav-content-right a{color:#1264a3;text-decoration:none;font-size:1.8rem;font-weight:500;padding-left:2rem;border-bottom-width:2px}.nav-bg .nav-content-left{width:50%}.nav-bg .nav-content-left h1{color:#000;font-size:5rem;font-weight:700;line-height:1.12;padding-left:2rem;margin-bottom:2rem}.nav-bg .nav-content-left p{color:#000;padding-left:2rem;line-height:1.4444;font-weight:400;font-size:1.8rem;margin-bottom:2rem}.nav-bg .nav-content-left a{color:#1264a3;text-decoration:none;font-size:1.8rem;font-weight:500;padding-left:2rem;border-bottom-width:2px}.nav-bg .link__learn{display:inline-block;padding:0 !important;margin-left:2rem;padding-bottom:.5rem !important;position:relative;transition:.3s}.nav-bg .link__learn:hover::after{width:100%}.nav-bg .link__learn::after{content:"";position:absolute;height:.2rem;background-color:#1264a3;left:0;width:0%;bottom:0;transition:.3s}@media(max-width: 1020px){.nav-bg .video{display:inline-block;margin-left:0;padding-left:0}}.container{max-width:1320px;margin:0 auto;padding:0rem .5rem}*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%;font-family:Slack-Larsseit,"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif}body{font-size:1.6rem}',""]),e.Z=i},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,f="".concat(l," ").concat(d);a[l]=d+1;var u=n(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:function(t){var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},g={};function v(t){var e=g[t];if(void 0!==e)return e.exports;var n=g[t]={id:t,exports:{}};return m[t](n,n.exports,v),n.exports}v.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return v.d(e,{a:e}),e},v.d=function(t,e){for(var n in e)v.o(e,n)&&!v.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},v.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t=v(379),e=v.n(t),n=v(795),o=v.n(n),r=v(569),a=v.n(r),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),f=v.n(d),u=v(263),(p={}).styleTagTransform=f(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals}();