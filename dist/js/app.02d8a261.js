(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],b=0,d=[];b<u.length;b++)c=u[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==a[i]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2cefaefc":"3eb3b814","chunk-2d0e5e97":"3289a216","chunk-3ba7bb6b":"2fc6b95e","chunk-7fa54952":"4d399ff2","chunk-8c89c988":"c6601f31","chunk-49bf3460":"05474233","chunk-4bec8d34":"41483d2a","chunk-55aba8cb":"231f0908","chunk-5a13aae2":"107095a3","chunk-6c201f90":"6d03fcf4"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(b);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var b=0;b<i.length;b++)n(i[b]);var s=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1f87":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),a=t("7bb1"),o=t("3aa8"),c=t("cbdf"),u=t("9457"),i=t("9062"),l=t.n(i),b=(t("e40d"),t("bc3a")),s=t.n(b),d=t("2106"),f=t.n(d);function p(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("914f");const h={};h.render=p;var v=h,m=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),O={class:"navbar navbar-expand-lg navbar-light bg-light"},j={class:"container"},g=Object(r["createVNode"])("a",{class:"navbar-brand",href:"#"},"商城",-1),k=Object(r["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),y={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},w={class:"navbar-nav"},N=Object(r["createTextVNode"])("查看購物車"),P=Object(r["createTextVNode"])("登入後台");function x(e,n){var t=Object(r["resolveComponent"])("router-link"),a=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("nav",O,[Object(r["createVNode"])("div",j,[g,k,Object(r["createVNode"])("div",y,[Object(r["createVNode"])("div",w,[Object(r["createVNode"])(t,{class:"nav-link",to:"/CartsList"},{default:Object(r["withCtx"])((function(){return[N]})),_:1}),Object(r["createVNode"])(t,{class:"nav-link",to:"/Login"},{default:Object(r["withCtx"])((function(){return[P]})),_:1})])])])]),Object(r["createVNode"])(a)],64)}const V={};V.render=x;var C=V,M=[{path:"/",name:"Home",component:C,children:[{path:"",name:"Products",component:function(){return t.e("chunk-5a13aae2").then(t.bind(null,"e6dc"))}},{path:"Product/:id",component:function(){return t.e("chunk-2cefaefc").then(t.bind(null,"d2f1"))}},{path:"CartsList",name:"CartsList",component:function(){return t.e("chunk-6c201f90").then(t.bind(null,"4375"))}}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/Login",name:"Login",component:function(){return t.e("chunk-4bec8d34").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-49bf3460").then(t.bind(null,"a1e0"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-3ba7bb6b"),t.e("chunk-8c89c988")]).then(t.bind(null,"480e"))}},{path:"orderlist",component:function(){return t.e("chunk-55aba8cb").then(t.bind(null,"5468"))}},{path:"coupons",component:function(){return Promise.all([t.e("chunk-3ba7bb6b"),t.e("chunk-7fa54952")]).then(t.bind(null,"70fe"))}}]}],_=Object(m["a"])({history:Object(m["b"])(),routes:M}),L=_;Object.keys(o["a"]).forEach((function(e){"default"!==e&&Object(a["e"])(e,o["a"][e])})),Object(a["d"])({generateMessage:Object(c["a"])({zh_TW:u}),validateOnInput:!0}),Object(c["b"])("zh_TW");var T=Object(r["createApp"])(v);T.component("Form",a["c"]),T.component("Field",a["b"]),T.component("ErrorMessage",a["a"]),T.component("Loading",l.a),T.use(L),T.use(l.a),T.use(f.a,s.a),T.mount("#app")},"914f":function(e,n,t){"use strict";t("1f87")}});
//# sourceMappingURL=app.02d8a261.js.map