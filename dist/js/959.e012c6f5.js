"use strict";(self["webpackChunkasciii_portal"]=self["webpackChunkasciii_portal"]||[]).push([[959],{9959:function(e,t,l){l.r(t),l.d(t,{default:function(){return Y}});var a=l(6252),n=l(3577),o=l(2262),i=l(4468),r=l(6408),s=l(957),u=l(5215),c=l(7758),d=l(7695),v=l(5911),m=l(9728),f=l(9483),p=l(2214),g=l(3099);const b=(0,p.a)({name:"VForm",props:{...(0,m.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:l,emit:n}=t;const i=(0,m.Np)(e),r=(0,o.iH)();function s(e){e.preventDefault(),i.reset()}function u(e){const t=e,l=i.validate();t.then=l.then.bind(l),t.catch=l.catch.bind(l),t.finally=l.finally.bind(l),n("submit",t),t.defaultPrevented||l.then((e=>{let{valid:t}=e;var l;t&&(null==(l=r.value)||l.submit())})),t.preventDefault()}return(0,g.L)((()=>{var e;return(0,a.Wm)("form",{ref:r,class:"v-form",novalidate:!0,onReset:s,onSubmit:u},[null==(e=l.default)?void 0:e.call(l,i)])})),(0,f.F)(i,r)}});var h=l(1669),y=l(9003),_=l(3379),x=l(4962),k=l(2482),w=l(6393);const C=e=>((0,a.dD)("data-v-f2b15442"),e=e(),(0,a.Cn)(),e),W={class:"d-flex flex-column fill-height justify-center align-center text-white"},S=C((()=>(0,a._)("h1",{class:"text-h4 font-weight-thin mb-4"}," ASCIII.ai ",-1))),V=C((()=>(0,a._)("h4",{class:"subheading"}," AI Content for Humans ",-1))),H={class:"loginBtn"},B={class:"text-center ma-2"};var I={__name:"LoginPage",setup(e){const t=(0,o.iH)(""),l=(0,o.iH)(""),m=(0,o.iH)(!1),f=(0,o.iH)(""),p=(0,o.iH)("");function g(){i.Z.push({name:"signup"})}async function C(){await fetch("https://asciii-backend.herokuapp.com/login",{method:"POST",body:JSON.stringify({email:t.value,password:l.value}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){m.value=!0,p.value="green",f.value=e.message,localStorage.setItem("gghqw",e.access_token),localStorage.setItem("f_name",e.f_name),localStorage.setItem("l_name",e.l_name),localStorage.setItem("email",e.email),localStorage.setItem("u_id",e.u_id),localStorage.setItem("plan_id",e.plan_id),i.Z.push({name:"dashboard"})})).catch((function(e){m.value=!0,p.value="red",f.value="Invalid username or password.",console.warn("Something went wrong.",e)}))}return(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a.Wm)(h.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y.o,{class:"loginCard"},{default:(0,a.w5)((()=>[(0,a.Wm)(_.D,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(x.B,{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"},{default:(0,a.w5)((()=>[(0,a._)("div",W,[S,V,(0,a.Wm)(r.G,{color:"secondary",content:"Beta v0.1.0",inline:""})])])),_:1})])),_:1}),(0,a.Wm)(_.D,{class:"loginBox",cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(u._,{width:"400"},{default:(0,a.w5)((()=>[(0,a.Wm)(c._,{style:{padding:"20px","text-align":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d.E,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1})])),_:1}),(0,a.Wm)(v.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w.h,{clearable:"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),label:"Username","prepend-icon":"mdi-account",variant:"outlined"},null,8,["modelValue"]),(0,a.Wm)(w.h,{clearable:"",modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),rules:e.emailRules,label:"Password","prepend-icon":"mdi-key",variant:"outlined",type:"password"},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,a._)("div",H,[(0,a.Wm)(s.T,{color:"primary",onClick:o[2]||(o[2]=e=>C())},{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1}),(0,a.Wm)(s.T,{style:{"margin-left":"10px"},color:"secondary",onClick:o[3]||(o[3]=e=>g())},{default:(0,a.w5)((()=>[(0,a.Uk)("Register")])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})]),(0,a._)("div",B,[(0,a.Wm)(k.v,{timeout:2e3,modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=e=>m.value=e),color:p.value,elevation:"24"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(f.value),1)])),_:1},8,["modelValue","color"])])],64))}},F=l(3744);const P=(0,F.Z)(I,[["__scopeId","data-v-f2b15442"]]);var Y=P},6408:function(e,t,l){l.d(t,{G:function(){return h}});var a=l(6252),n=l(9963),o=l(7737),i=l(6596),r=l(9680),s=l(8247),u=l(2716),c=l(2323),d=l(1228),v=l(6054),m=l(8475),f=l(2214),p=l(3099),g=l(8676),b=l(2262);const h=(0,f.a)({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:i.lE,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...(0,r.y)({location:"top end"}),...(0,s.I)(),...(0,u.Q)(),...(0,c.x$)(),...(0,d.X)({transition:"scale-rotate-transition"})},setup(e,t){const{backgroundColorClasses:l,backgroundColorStyles:i}=(0,v.Y5)((0,b.Vh)(e,"color")),{roundedClasses:u}=(0,s.b)(e),{t:f}=(0,m.bU)(),{textColorClasses:h,textColorStyles:y}=(0,v.rY)((0,b.Vh)(e,"textColor")),{themeClasses:_}=(0,c.Fg)(),{locationStyles:x}=(0,r.T)(e,!0,(t=>{const l=e.floating?e.dot?2:4:e.dot?8:12;return l+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0)}));return(0,p.L)((()=>{var r,s,c,v;const m=Number(e.content),p=!e.max||isNaN(m)?e.content:m<=e.max?m:`${e.max}+`,[b,k]=(0,g.ei)(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return(0,a.Wm)(e.tag,(0,a.dG)({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[(0,a.Wm)("div",{class:"v-badge__wrapper"},[null==(r=(s=t.slots).default)?void 0:r.call(s),(0,a.Wm)(d.J,{transition:e.transition},{default:()=>[(0,a.wy)((0,a.Wm)("span",(0,a.dG)({class:["v-badge__badge",_.value,l.value,u.value,h.value],style:[i.value,y.value,e.inline?{}:x.value],"aria-atomic":"true","aria-label":f(e.label,m),"aria-live":"polite",role:"status"},b),[e.dot?void 0:t.slots.badge?null==(c=(v=t.slots).badge)?void 0:c.call(v):e.icon?(0,a.Wm)(o.t,{icon:e.icon},null):p]),[[n.F8,e.modelValue]])]})])]})})),{}}})},4962:function(e,t,l){l.d(t,{B:function(){return f}});var a=l(6252),n=l(7074),o=l(4680),i=l(2214),r=l(2778),s=l(8676),u=l(3099),c=l(2262),d=l(3250),v=l(5455);function m(e){return Math.floor(Math.abs(e))*Math.sign(e)}const f=(0,i.a)({name:"VParallax",props:{scale:{type:[Number,String],default:.5}},setup(e,t){let{slots:l}=t;const{intersectionRef:i,isIntersecting:f}=(0,o.S)(),{resizeRef:p,contentRect:g}=(0,d.y)(),{height:b}=(0,v.AW)(),h=(0,c.iH)();let y;(0,a.m0)((()=>{var e;i.value=p.value=null==(e=h.value)?void 0:e.$el})),(0,a.YP)(f,(e=>{e?(y=(0,r.rP)(i.value),y=y===document.scrollingElement?document:y,y.addEventListener("scroll",k,{passive:!0}),k()):y.removeEventListener("scroll",k)})),(0,a.Jd)((()=>{var e;null==(e=y)||e.removeEventListener("scroll",k)})),(0,a.YP)(b,k);const _=(0,a.Fl)((()=>1-(0,s.uZ)(+e.scale)));let x=-1;function k(){f.value&&(cancelAnimationFrame(x),x=requestAnimationFrame((()=>{var e;const t=(null==(e=h.value)?void 0:e.$el).querySelector(".v-img__img");if(!t)return;const l=y.clientHeight??document.documentElement.clientHeight,a=y.scrollTop??window.scrollY,n=i.value.offsetTop,o=g.value.height,r=n+(o-l)/2,s=m((a-r)*_.value),u=Math.max(1,(_.value*(l-o)+o)/o);t.style.setProperty("transform",`translateY(${s}px) scale(${u})`)})))}return(0,u.L)((()=>(0,a.Wm)(n.f,{class:["v-parallax",{"v-parallax--active":f.value}],ref:h,cover:!0,onLoadstart:k,onLoad:k},l))),{}}})},2482:function(e,t,l){l.d(t,{v:function(){return b}});var a=l(6252),n=l(875),o=l(5429),i=l(9748),r=l(9680),s=l(3632),u=l(8247),c=l(1228),d=l(1316),v=l(9084),m=l(9483),f=l(2262),p=l(2214),g=l(3099);const b=(0,p.e)()({name:"VSnackbar",props:{contentClass:{type:String,default:""},multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,modelValue:Boolean,...(0,r.y)({location:"bottom"}),...(0,s.F)(),...(0,u.I)(),...(0,i.bk)(),...(0,c.X)({transition:"v-snackbar-transition"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const c=(0,d.z)(e,"modelValue"),{locationStyles:p}=(0,r.T)(e),{positionClasses:b}=(0,s.K)(e),{scopeId:h}=(0,v.a)(),{colorClasses:y,colorStyles:_,variantClasses:x}=(0,i.c1)(e),{roundedClasses:k}=(0,u.b)(e),w=(0,f.iH)();(0,a.YP)(c,W),(0,a.YP)((()=>e.timeout),W),(0,a.bv)((()=>{c.value&&W()}));let C=-1;function W(){window.clearTimeout(C);const t=Number(e.timeout);c.value&&-1!==t&&(C=window.setTimeout((()=>{c.value=!1}),t))}function S(){window.clearTimeout(C)}return(0,g.L)((()=>(0,a.Wm)(o.y,(0,a.dG)({modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,ref:w,class:["v-snackbar",{"v-snackbar--active":c.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},b.value],contentProps:{style:p.value},contentClass:e.contentClass,persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",transition:e.transition},h),{default:()=>[(0,a.Wm)("div",{class:["v-snackbar__wrapper",y.value,k.value,x.value],style:[_.value],onPointerenter:S,onPointerleave:W},[(0,i.Ux)(!1,"v-snackbar"),l.default&&(0,a.Wm)("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[l.default()]),l.actions&&(0,a.Wm)(n.z,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[(0,a.Wm)("div",{class:"v-snackbar__actions"},[l.actions()])]})])],activator:l.activator}))),(0,m.F)({},w)}})},6393:function(e,t,l){l.d(t,{h:function(){return g}});var a=l(6252),n=l(9963),o=(l(348),l(2219)),i=l(24),r=l(7467),s=l(9137),u=l(9483),c=l(1316),d=l(2262),v=l(2214),m=l(8676),f=l(3099);const p=["color","file","time","date","datetime-local","week","month"],g=(0,v.e)()({name:"VTextField",directives:{Intersect:s.Z},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...(0,i.co)(),...(0,o.hy)()},emits:{"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:l,emit:s,slots:v}=t;const g=(0,c.z)(e,"modelValue"),b=(0,a.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(g.value):(g.value??"").toString().length)),h=(0,a.Fl)((()=>l.maxlength?l.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function y(t,l){var a,n;e.autofocus&&t&&(null==(a=l[0].target)||null==(n=a.focus)||n.call(a))}const _=(0,d.iH)(),x=(0,d.iH)(),k=(0,d.iH)(!1),w=(0,d.iH)(),C=(0,a.Fl)((()=>p.includes(e.type)||e.persistentPlaceholder||k.value)),W=(0,a.Fl)((()=>e.messages.length?e.messages:k.value||e.persistentHint?e.hint:""));function S(){var e;w.value!==document.activeElement&&(null==(e=w.value)||e.focus());k.value||(k.value=!0)}function V(e){S(),s("click:control",e)}function H(t){t.stopPropagation(),S(),(0,a.Y3)((()=>{g.value="",(0,m.dr)(e["onClick:clear"],t)}))}return(0,f.L)((()=>{const t=!!(v.counter||e.counter||e.counterValue),u=!(!t&&!v.details),[c,d]=(0,m.An)(l),[{modelValue:f,...p}]=(0,i.PE)(e),[B]=(0,o.g8)(e);return(0,a.Wm)(i.q8,(0,a.dG)({ref:_,modelValue:g.value,"onUpdate:modelValue":e=>g.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},c,p,{messages:W.value}),{...v,default:t=>{let{id:l,isDisabled:i,isDirty:r,isReadonly:u,isValid:c}=t;return(0,a.Wm)(o.hF,(0,a.dG)({ref:x,onMousedown:e=>{e.target!==w.value&&e.preventDefault()},"onClick:control":V,"onClick:clear":H,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},B,{id:l.value,active:C.value||r.value,dirty:r.value||e.dirty,focused:k.value,error:!1===c.value}),{...v,default:t=>{let{props:{class:l,...o}}=t;const r=(0,a.wy)((0,a.Wm)("input",(0,a.dG)({ref:w,"onUpdate:modelValue":e=>g.value=e,autofocus:e.autofocus,readonly:u.value,disabled:i.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:S,onBlur:()=>k.value=!1},o,d),null),[[n.YZ,g.value],[(0,a.Q2)("intersect"),{handler:y},null,{once:!0}]]);return(0,a.Wm)(a.HY,null,[e.prefix&&(0,a.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),v.default?(0,a.Wm)("div",{class:l,onClick:e=>s("click:input",e),"data-no-activator":""},[v.default(),r]):(0,a.Ho)(r,{class:l}),e.suffix&&(0,a.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?l=>{var n;return(0,a.Wm)(a.HY,null,[null==(n=v.details)?void 0:n.call(v,l),t&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(r._,{active:e.persistentCounter||k.value,value:b.value,max:h.value},v.counter)])])}:void 0})})),(0,u.F)({},_,x,w)}})}}]);
//# sourceMappingURL=959.e012c6f5.js.map