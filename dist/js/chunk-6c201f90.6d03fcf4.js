(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c201f90"],{"1dde":function(e,t,c){var a=c("d039"),o=c("b622"),r=c("2d00"),n=o("species");e.exports=function(e){return r>=51||!a((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4375:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o=Object(a["createVNode"])("div",{class:"spinner-grow text-danger",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),r=Object(a["createVNode"])("div",{class:"spinner-grow text-warning mx-3",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),n=Object(a["createVNode"])("div",{class:"spinner-grow text-success",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),l={class:"container mt-3"},s={class:"d-flex flex-row-reverse"},i={class:"table align-middle mb-5"},d=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{scope:"col"}),Object(a["createVNode"])("th",{scope:"col"},"品名"),Object(a["createVNode"])("th",{scope:"col",style:{width:"200px"}},"數量/單位"),Object(a["createVNode"])("th",{scope:"col"},"單價")])],-1),u={scope:"row"},b={key:0,class:"spinner-border spinner-border-sm",role:"status"},m=Object(a["createVNode"])("span",{class:"visually-hidden"},null,-1),h=Object(a["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[Object(a["createVNode"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),f=Object(a["createVNode"])("th",null,null,-1),p=Object(a["createVNode"])("td",null,null,-1),j=Object(a["createVNode"])("td",null,"總價",-1),O={class:"container"},V={class:"row"},v={class:"mb-3"},g=Object(a["createVNode"])("label",{for:"email",class:"form-label"},"E-mail",-1),N={class:"mb-3"},w=Object(a["createVNode"])("label",{for:"name",class:"form-label"},"姓名",-1),y={class:"mb-3"},x=Object(a["createVNode"])("label",{for:"address",class:"form-label"},"地址",-1),C={class:"mb-3"},k=Object(a["createVNode"])("label",{for:"phone",class:"form-label"},"電話",-1),D=Object(a["createVNode"])("div",{class:"mb-3"},[Object(a["createVNode"])("label",{for:"message",class:"form-label"}),Object(a["createVNode"])("textarea",{name:"message",class:"form-control",id:"area",cols:"30",rows:"10"})],-1);function L(e,t,c,L,B,S){var U=Object(a["resolveComponent"])("Loading"),q=Object(a["resolveComponent"])("Field"),$=Object(a["resolveComponent"])("error-message"),F=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(U,{active:B.isLoading},{default:Object(a["withCtx"])((function(){return[o,r,n]})),_:1},8,["active"]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",s,[B.submit?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:0,href:"#",class:"btn btn-outline-danger btn-lg mt-3",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return S.allCartsDel()}),["prevent"]))},"全部刪除"))]),Object(a["createVNode"])("table",i,[d,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(B.cartsData.carts,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t},[Object(a["createVNode"])("th",u,[Object(a["createVNode"])("button",{type:"button",disabled:B.loading===e.id,class:"btn btn-outline-danger",onClick:function(t){return S.oneCartDel(e.id)}},[B.loading===e.id?(Object(a["openBlock"])(),Object(a["createBlock"])("div",b,[m])):Object(a["createCommentVNode"])("",!0),h],8,["disabled","onClick"])]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("td",null,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",disabled:B.loading===e.id,onChange:function(t){return S.upCart(e)},min:"1",style:{width:"100px"},"onUpdate:modelValue":function(t){return e.qty=t},id:"price"},null,40,["disabled","onChange","onUpdate:modelValue"]),[[a["vModelText"],e.qty,void 0,{number:!0}]]),Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.product.unit),1)]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.product.price),1)])})),128)),Object(a["createVNode"])("tr",null,[f,p,j,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(B.cartsData.total),1)])])])]),Object(a["createVNode"])("div",O,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])(F,{ref:"form",onSubmit:S.onSubmit,class:"col-6 mx-auto mb-5"},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createVNode"])("div",v,[g,Object(a["createVNode"])(q,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":c["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:B.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.form.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])($,{name:"email",class:"invalid-feedback"})]),Object(a["createVNode"])("div",N,[w,Object(a["createVNode"])(q,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:B.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return B.form.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])($,{name:"姓名",class:"invalid-feedback"})]),Object(a["createVNode"])("div",y,[x,Object(a["createVNode"])(q,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:B.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return B.form.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])($,{name:"地址",class:"invalid-feedback"})]),Object(a["createVNode"])("div",C,[k,Object(a["createVNode"])(q,{id:"phone",name:"電話",type:"tel",class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入電話",rules:S.isPhone,modelValue:B.form.user.tel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return B.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(a["createVNode"])($,{name:"電話",class:"invalid-feedback"})]),D,Object(a["createVNode"])("button",{type:"submit",disabled:B.submit},"送出訂單",8,["disabled"])]})),_:1},8,["onSubmit"])])])],64)}c("99af");var B={data:function(){return{cartsData:{},loading:"",url:"",path:"",submit:"true",isLoading:!1,form:{user:{email:"",tel:"",address:"",name:""}}}},methods:{showCart:function(){var e=this;this.isLoading=!0,this.$http.get("".concat(this.url,"api/").concat(this.path,"/cart")).then((function(t){t.data.success?(e.cartsData=t.data.data,e.isLoading=!1,e.selectSubmit(e.cartsData.total)):console.log("失敗")})).catch((function(e){console.log(e)}))},upCart:function(e){var t=this;this.loading=e.id;var c={product_id:e.product.id,qty:e.qty};this.$http.put("".concat(this.url,"api/").concat(this.path,"/cart/").concat(e.id),{data:c}).then((function(e){e.data.success?(t.loading="",t.showCart()):console.log("失敗")})).catch((function(e){console.log(e)}))},allCartsDel:function(){var e=this;this.$http.delete("".concat(this.url,"api/").concat(this.path,"/carts")).then((function(t){t.data.success?e.showCart():console.log("失敗")})).catch((function(e){console.log(e)}))},oneCartDel:function(e){var t=this;this.$http.delete("".concat(this.url,"api/").concat(this.path,"/cart/").concat(e)).then((function(e){e.data.success?t.showCart():console.log("失敗")})).catch((function(e){console.log(e)}))},selectSubmit:function(e){this.submit=0===e||void 0===e},onSubmit:function(){var e=this,t=this.form;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("highdanny11-hexschool","/order"),{data:t}).then((function(t){t.data.success?(e.showCart(),e.$refs.form.resetForm(),e.clearUser()):console.log(t)})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},clearUser:function(){this.form={user:{email:"",tel:"",address:"",name:""}}}},created:function(){this.path="highdanny11-hexschool",this.url="https://vue3-course-api.hexschool.io/",this.showCart()}};B.render=L;t["default"]=B},8418:function(e,t,c){"use strict";var a=c("c04e"),o=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var n=a(t);n in e?o.f(e,n,r(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),o=c("d039"),r=c("e8b5"),n=c("861d"),l=c("7b0b"),s=c("50c4"),i=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),m=c("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",j=m>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),O=u("concat"),V=function(e){if(!n(e))return!1;var t=e[h];return void 0!==t?!!t:r(e)},v=!j||!O;a({target:"Array",proto:!0,forced:v},{concat:function(e){var t,c,a,o,r,n=l(this),u=d(n,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?n:arguments[t],V(r)){if(o=s(r.length),b+o>f)throw TypeError(p);for(c=0;c<o;c++,b++)c in r&&i(u,b,r[c])}else{if(b>=f)throw TypeError(p);i(u,b++,r)}return u.length=b,u}})},b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,r=Function.prototype,n=r.toString,l=/^\s*function ([^ (]*)/,s="name";a&&!(s in r)&&o(r,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-6c201f90.6d03fcf4.js.map