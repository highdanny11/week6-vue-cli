(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a13aae2"],{1799:function(e,t,c){"use strict";var a=c("7a23"),o={class:"container"},n={class:"row"},r={class:"col-6 mx-auto"},i={class:"pagination justify-content-center"},s=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),d=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function l(e,t,c,l,u,p){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("ul",i,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pagination.has_pre}]},[Object(a["createVNode"])("a",{href:"#",class:"page-link","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return p.getdata(c.pagination.current_page-1)}),["prevent"]))},[s])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pagination.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:e===c.pagination.current_page}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return p.getdata(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pagination.has_next}]},[Object(a["createVNode"])("a",{href:"#",class:"page-link","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return p.getdata(c.pagination.current_page+1)}),["prevent"]))},[d])],2)])])])])}var u={props:["pagination"],methods:{getdata:function(e){this.$emit("updata",e),console.log(this.pagination)}}};u.render=l;t["a"]=u},"1dde":function(e,t,c){var a=c("d039"),o=c("b622"),n=c("2d00"),r=o("species");e.exports=function(e){return n>=51||!a((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var a=c("c04e"),o=c("9bf2"),n=c("5c6c");e.exports=function(e,t,c){var r=a(t);r in e?o.f(e,r,n(0,c)):e[r]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),o=c("d039"),n=c("e8b5"),r=c("861d"),i=c("7b0b"),s=c("50c4"),d=c("8418"),l=c("65f0"),u=c("1dde"),p=c("b622"),b=c("2d00"),h=p("isConcatSpreadable"),j=9007199254740991,g="Maximum allowed index exceeded",O=b>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),f=u("concat"),N=function(e){if(!r(e))return!1;var t=e[h];return void 0!==t?!!t:n(e)},V=!O||!f;a({target:"Array",proto:!0,forced:V},{concat:function(e){var t,c,a,o,n,r=i(this),u=l(r,0),p=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?r:arguments[t],N(n)){if(o=s(n.length),p+o>j)throw TypeError(g);for(c=0;c<o;c++,p++)c in n&&d(u,p,n[c])}else{if(p>=j)throw TypeError(g);d(u,p++,n)}return u.length=p,u}})},e6dc:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"container mt-3"},n=Object(a["createVNode"])("div",{class:"spinner-grow text-danger",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),r=Object(a["createVNode"])("div",{class:"spinner-grow text-warning mx-3",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),i=Object(a["createVNode"])("div",{class:"spinner-grow text-success",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),s={class:"row justify-content-center"},d={class:"col"},l={class:"table align-middle"},u=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{scope:"col",style:{width:"250px"}},"產品"),Object(a["createVNode"])("th",{scope:"col"},"產品名稱"),Object(a["createVNode"])("th",{scope:"col",style:{width:"80px"}},"原價"),Object(a["createVNode"])("th",{scope:"col",style:{width:"80px"}},"售價"),Object(a["createVNode"])("th",{scope:"col"},"評價"),Object(a["createVNode"])("th",{scope:"col"},"編輯"),Object(a["createVNode"])("th",{scope:"col"},"購物車")])],-1),p={scope:"row"},b={class:"d-flex align-items-center"},h=Object(a["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},[Object(a["createVNode"])("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})],-1),j=Object(a["createTextVNode"])(" 產品細項 "),g={key:0,class:"spinner-border spinner-border-sm",role:"status"},O=Object(a["createVNode"])("span",{class:"visually-hidden"},null,-1),f=Object(a["createTextVNode"])(" 加入購物車 ");function N(e,t,c,N,V,v){var w=Object(a["resolveComponent"])("Loading"),k=Object(a["resolveComponent"])("router-link"),m=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])(w,{active:V.isLoading},{default:Object(a["withCtx"])((function(){return[n,r,i]})),_:1},8,["active"]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("table",l,[u,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(V.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e},[Object(a["createVNode"])("th",p,[Object(a["createVNode"])("img",{src:e.imageUrl,style:{width:"200px",height:"150px","object-fit":"cover"},alt:""},null,8,["src"])]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.origin_price),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.price),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("span",b,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(void 0===e.star?"1":e.star)+" ",1),h])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])(k,{class:"btn btn-outline-secondary",to:"/Product/".concat(e.id)},{default:Object(a["withCtx"])((function(){return[j]})),_:2},1032,["to"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{class:"btn btn-outline-primary",disabled:V.id===e.id,onClick:function(t){return v.toCart(e)}},[V.id===e.id?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[O])):Object(a["createCommentVNode"])("",!0),f],8,["disabled","onClick"])])])})),128))])])])])]),Object(a["createVNode"])(m,{pagination:V.pagination,onUpdata:v.getdata},null,8,["pagination","onUpdata"])],64)}c("99af");var V=c("1799"),v={components:{Pagination:V["a"]},data:function(){return{url:"",path:"",products:{},pagination:{},id:"",cart:{},isLoading:!1}},methods:{getdata:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat(this.url,"api/").concat(this.path,"/products?page=").concat(t)).then((function(t){t.data.success?(e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination):console.log(t)})).catch((function(e){console.log(e)}))},onCancel:function(){console.log("123")},toCart:function(e){this.id=e.id,this.cart={product_id:e.id,qty:1},this.addCart()},addCart:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.cart.qty=t,this.$http.post("".concat(this.url,"api/").concat(this.path,"/cart"),{data:this.cart}).then((function(t){t.data.success?e.id="":console.log("")})).catch((function(e){console.log(e)}))}},created:function(){this.url="https://vue3-course-api.hexschool.io/",this.path="highdanny11-hexschool",this.getdata()}};v.render=N;t["default"]=v}}]);
//# sourceMappingURL=chunk-5a13aae2.107095a3.js.map