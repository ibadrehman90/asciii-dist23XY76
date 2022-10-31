"use strict";(self["webpackChunkasciii_portal"]=self["webpackChunkasciii_portal"]||[]).push([[112],{9422:function(e,l,t){t.r(l),t.d(l,{default:function(){return z}});var a=t(6252),n=t(3577),o=t(2262),u=t(9963),i=t(2139),s=t(3847),r=t(4607),c=t(957),d=t(1669),m=t(9003),v=t(3379),f=t(7737),p=t(5429),h=t(3732),w=t(2482),g=t(6393),_=t(1400),W=t(1820);const y=e=>((0,a.dD)("data-v-cf9d17f8"),e=e(),(0,a.Cn)(),e),b={class:"main"},V=y((()=>(0,a._)("h3",null,"Text Improver",-1))),k=y((()=>(0,a._)("p",null,"Re-writes & improves content",-1))),D={style:{"margin-left":"400px"}},S={style:{float:"right"}},x={class:"inputArea"},C={class:"text-center ma-2"};var H={__name:"TextImprover",setup(e){const l=(0,o.iH)(""),t=(0,o.iH)(""),y=(0,o.iH)(),H=(0,o.iH)(!1),U=(0,o.iH)(!1),T=(0,o.iH)(""),z=(0,o.iH)(""),j=(0,o.iH)(!1);async function E(){if(l.value&&""!==t.value){U.value=!0;const n=document.getElementById("mainContent");n.value.length;var e=n.selectionStart,a=n.selectionEnd;n.value.substring(e,a);await fetch("https://asciii-backend.herokuapp.com/contentimprover/content",{method:"POST",body:JSON.stringify({text:l.value,tone:t.value,user_id:localStorage.getItem("u_id")}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){y.value=e.data,H.value=!0,U.value=!1;n.selectionStart;var l=n.selectionEnd;n.value=n.value.substring(0,l)+"\n"+e.data+n.value.substring(l,n.value.length)})).catch((function(e){console.warn("Something went wrong.",e)}))}else j.value=!0,T.value="red",z.value="Please fill all the fields."}async function I(){const e=document.getElementById("mainContent");var l=e.value.length,t=e.selectionStart,a=e.selectionEnd,n=e.value.substring(t,a);await fetch("https://asciii-backend.herokuapp.com/longform/rewrite-better-readability",{method:"POST",body:JSON.stringify({text:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(n){console.log(n),e.value=e.value.substring(0,t)+n.data+e.value.substring(a,l)})).catch((function(e){console.warn("Something went wrong.",e)}))}const P=(0,a.Fl)((()=>l.value.length));return(e,F)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",b,[(0,a.Wm)(d.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.D,{class:"right",cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(s.G,{lines:"two"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(i.V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{icon:"mdi-lead-pencil",size:"x-large"})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Wm)(r.S,null,{default:(0,a.w5)((()=>[V,k])),_:1})])),_:1}),(0,a.Wm)(m.o,{class:"first-row"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.D,{cols:"1"}),(0,a.Wm)(v.D,{cols:"10"},{default:(0,a.w5)((()=>[(0,a._)("span",D,(0,n.zw)((0,o.SU)(P))+"/1000",1),(0,a.Wm)(_.z,{modelValue:l.value,"onUpdate:modelValue":F[0]||(F[0]=e=>l.value=e),maxlength:"1000",label:"Text",variant:"outlined",placeholder:"Write your content here...",rows:"6"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(v.D,{cols:"1"})])),_:1}),(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.D,{cols:"1"}),(0,a.Wm)(v.D,{cols:"10"},{default:(0,a.w5)((()=>[(0,a.Wm)(g.h,{label:"Sound like",modelValue:t.value,"onUpdate:modelValue":F[1]||(F[1]=e=>t.value=e),variant:"outlined",placeholder:"E.g. Professional",density:"compact"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(v.D,{cols:"1"})])),_:1}),(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.D,{cols:"4"}),(0,a.Wm)(v.D,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(c.T,{color:"primary",variant:"tonal",onClick:F[2]||(F[2]=e=>E())},{default:(0,a.w5)((()=>[(0,a.Uk)("Generate")])),_:1})])),_:1}),(0,a.Wm)(v.D,{cols:"4"})])),_:1})])),_:1}),(0,a.Wm)(v.D,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(s.G,{lines:"one"},{default:(0,a.w5)((()=>[(0,a._)("p",S,[(0,a.Wm)(W.N,{text:"Highlight the text to rephrase it."},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(f.t,(0,a.dG)({onClick:F[3]||(F[3]=e=>I())},e,{icon:"mdi-file-document-edit-outline",size:"large"}),null,16)])),_:1})])])),_:1}),(0,a._)("div",x,[(0,a.wy)((0,a.Wm)(_.z,{id:"mainContent",modelValue:y.value,"onUpdate:modelValue":F[4]||(F[4]=e=>y.value=e),class:"output",variant:"filled",rows:"22"},null,8,["modelValue"]),[[u.F8,H.value]]),(0,a.wy)((0,a.Wm)(h.L,{class:"loader",color:"primary",indeterminate:"",size:53},null,512),[[u.F8,U.value]])]),(0,a.Wm)(p.y,{modelValue:U.value,"onUpdate:modelValue":F[5]||(F[5]=e=>U.value=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})]),(0,a._)("div",C,[(0,a.Wm)(w.v,{timeout:2e3,modelValue:j.value,"onUpdate:modelValue":F[6]||(F[6]=e=>j.value=e),color:T.value,elevation:"24"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(z.value),1)])),_:1},8,["modelValue","color"])])],64))}},U=t(3744);const T=(0,U.Z)(H,[["__scopeId","data-v-cf9d17f8"]]);var z=T}}]);
//# sourceMappingURL=112.b6f115b9.js.map