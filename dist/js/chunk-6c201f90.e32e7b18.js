(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c201f90"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),l=a("2d00"),o=n("species");t.exports=function(t){return l>=51||!c((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4375:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={class:"text-center"};function l(t,e,a,l,o,r){var s=Object(c["x"])("Carts");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("h1",n,"你現在在"+Object(c["A"])(o.text),1),Object(c["g"])(s)],64)}var o={class:"container mt-3"},r={class:"d-flex flex-row-reverse"},s={class:"table align-middle mb-5"},i=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{scope:"col"}),Object(c["g"])("th",{scope:"col"},"品名"),Object(c["g"])("th",{scope:"col",style:{width:"200px"}},"數量/單位"),Object(c["g"])("th",{scope:"col"},"單價")])],-1),u={scope:"row"},d={key:0,class:"spinner-border spinner-border-sm",role:"status"},b=Object(c["g"])("span",{class:"visually-hidden"},null,-1),m=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[Object(c["g"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),h=Object(c["g"])("th",null,null,-1),f=Object(c["g"])("td",null,null,-1),g=Object(c["g"])("td",null,"總價",-1);function p(t,e,a,n,l,p){var j=Object(c["x"])("Submit");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("a",{href:"#",class:"btn btn-outline-danger btn-lg mt-3",onClick:e[1]||(e[1]=Object(c["K"])((function(t){return p.allCartsDel()}),["prevent"]))},"全部刪除")]),Object(c["g"])("table",s,[i,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(l.cartsData.carts,(function(t,e){return Object(c["s"])(),Object(c["d"])("tr",{key:e},[Object(c["g"])("th",u,[Object(c["g"])("button",{type:"button",disabled:l.loading===t.id,class:"btn btn-outline-danger",onClick:function(e){return p.oneCartDel(t.id)}},[l.loading===t.id?(Object(c["s"])(),Object(c["d"])("div",d,[b])):Object(c["e"])("",!0),m],8,["disabled","onClick"])]),Object(c["g"])("td",null,Object(c["A"])(t.product.title),1),Object(c["g"])("td",null,[Object(c["J"])(Object(c["g"])("input",{type:"number",disabled:l.loading===t.id,onChange:function(e){return p.upCart(t)},min:"1",style:{width:"100px"},"onUpdate:modelValue":function(e){return t.qty=e},id:"price"},null,40,["disabled","onChange","onUpdate:modelValue"]),[[c["F"],t.qty,void 0,{number:!0}]]),Object(c["f"])(Object(c["A"])(t.product.unit),1)]),Object(c["g"])("td",null,Object(c["A"])(t.product.price),1)])})),128)),Object(c["g"])("tr",null,[h,f,g,Object(c["g"])("td",null,Object(c["A"])(l.cartsData.total),1)])])])]),Object(c["g"])(j,{submit:l.submit,onShowcarts:p.showCart},null,8,["submit","onShowcarts"])],64)}a("99af"),a("b0c0");var j={class:"container"},O={class:"row"},v={class:"mb-3"},w=Object(c["g"])("label",{for:"email",class:"form-label"},"E-mail",-1),x={class:"mb-3"},y=Object(c["g"])("label",{for:"name",class:"form-label"},"姓名",-1),C={class:"mb-3"},V=Object(c["g"])("label",{for:"address",class:"form-label"},"地址",-1),k={class:"mb-3"},S=Object(c["g"])("label",{for:"phone",class:"form-label"},"電話",-1),D=Object(c["g"])("div",{class:"mb-3"},[Object(c["g"])("label",{for:"message",class:"form-label"}),Object(c["g"])("textarea",{name:"message",class:"form-control",id:"area",cols:"30",rows:"10"})],-1);function U(t,e,a,n,l,o){var r=Object(c["x"])("Field"),s=Object(c["x"])("error-message"),i=Object(c["x"])("Form");return Object(c["s"])(),Object(c["d"])("div",j,[Object(c["g"])("div",O,[Object(c["g"])(i,{onSubmit:o.onSubmit,class:"col-6 mx-auto mb-5"},{default:Object(c["I"])((function(t){var n=t.errors;return[Object(c["g"])("div",v,[w,Object(c["g"])(r,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":n["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.form.user.email=t})},null,8,["class","modelValue"]),Object(c["g"])(s,{name:"email",class:"invalid-feedback"})]),Object(c["g"])("div",x,[y,Object(c["g"])(r,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":n["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.form.user.name=t})},null,8,["class","modelValue"]),Object(c["g"])(s,{name:"姓名",class:"invalid-feedback"})]),Object(c["g"])("div",C,[V,Object(c["g"])(r,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":n["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=function(t){return l.form.user.address=t})},null,8,["class","modelValue"]),Object(c["g"])(s,{name:"地址",class:"invalid-feedback"})]),Object(c["g"])("div",k,[S,Object(c["g"])(r,{id:"phone",name:"電話",type:"tel",class:["form-control",{"is-invalid":n["電話"]}],placeholder:"請輸入電話",rules:o.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return l.form.user.tel=t})},null,8,["class","rules","modelValue"]),Object(c["g"])(s,{name:"電話",class:"invalid-feedback"})]),D,Object(c["g"])("button",{type:"submit",disabled:a.submit},"送出訂單",8,["disabled"])]})),_:1},8,["onSubmit"])])])}var q={props:["submit"],data:function(){return{form:{user:{}}}},methods:{onSubmit:function(){var t=this,e=this.form;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("highdanny11-hexschool","/order"),{data:e}).then((function(e){e.data.success?(t.clearUsaer(),t.$emit("showcarts")):console.log(e)}))},clearUsaer:function(){this.form={user:{email:"",tel:"",address:"",name:""}}},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"}},created:function(){}};q.render=U;var $=q,A={components:{Submit:$},data:function(){return{cartsData:{},loading:"",url:"",path:"",submit:""}},methods:{showCart:function(){var t=this;this.$http.get("".concat(this.url,"api/").concat(this.path,"/cart")).then((function(e){e.data.success?(t.cartsData=e.data.data,t.selectSubmit(t.cartsData.total)):console.log("失敗")}))},upCart:function(t){var e=this;this.loading=t.id;var a={product_id:t.product.id,qty:t.qty};this.$http.put("".concat(this.url,"api/").concat(this.path,"/cart/").concat(t.id),{data:a}).then((function(t){t.data.success?(e.loading="",e.showCart()):console.log("失敗")}))},allCartsDel:function(){var t=this;this.$http.delete("".concat(this.url,"api/").concat(this.path,"/carts")).then((function(e){e.data.success?t.showCart():console.log("失敗")}))},oneCartDel:function(t){var e=this;this.$http.delete("".concat(this.url,"api/").concat(this.path,"/cart/").concat(t)).then((function(t){t.data.success?e.showCart():console.log("失敗")}))},selectSubmit:function(t){this.submit=0===t||void 0===t}},created:function(){this.path="highdanny11-hexschool",this.url="https://vue3-course-api.hexschool.io/",this.showCart()}};A.render=p;var E=A,F={components:{Carts:E},data:function(){return{text:"購物車列表"}}};F.render=l;e["default"]=F},8418:function(t,e,a){"use strict";var c=a("c04e"),n=a("9bf2"),l=a("5c6c");t.exports=function(t,e,a){var o=c(e);o in t?n.f(t,o,l(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("d039"),l=a("e8b5"),o=a("861d"),r=a("7b0b"),s=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),m=a("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",p=m>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),j=d("concat"),O=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:l(t)},v=!p||!j;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,c,n,l,o=r(this),d=u(o,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(l=-1===e?o:arguments[e],O(l)){if(n=s(l.length),b+n>f)throw TypeError(g);for(a=0;a<n;a++,b++)a in l&&i(d,b,l[a])}else{if(b>=f)throw TypeError(g);i(d,b++,l)}return d.length=b,d}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("9bf2").f,l=Function.prototype,o=l.toString,r=/^\s*function ([^ (]*)/,s="name";c&&!(s in l)&&n(l,s,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-6c201f90.e32e7b18.js.map