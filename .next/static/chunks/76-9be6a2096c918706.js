(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{9076:function(e,t,n){"use strict";n.r(t);var o=n(9268),s=n(6006),a=n(474);n(2870),t.default=()=>{let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)(""),[i,l]=(0,s.useState)(""),[c,u]=(0,s.useState)(""),[d,m]=(0,s.useState)(!1),[f,p]=(0,s.useState)(""),g=async o=>{o.preventDefault(),m(!0);try{let o=await fetch("api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:n,message:i,number:c,subject:f})});await o.text(),a.Am.success("Email sent successfully!"),m(!1),t(""),r(""),p(""),l(""),u("")}catch(e){a.Am.error("Internal Server Error!"),m(!1)}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{id:"section5",className:"text-gray-600 body-font relative",children:[(0,o.jsx)("div",{className:"absolute inset-0 bg-gray-300",children:(0,o.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13780.80393093548!2d78.060078755603!3d30.288339499304236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682778841417!5m2!1sen!2sin",width:"100%",height:"100%",frameBorder:"0",marginHeight:"0",marginWidth:"0",title:"map",scrolling:"no",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),(0,o.jsx)("div",{className:"container px-5 py-16 mx-auto flex",children:(0,o.jsxs)("div",{className:"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md",children:[(0,o.jsx)("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"GET FREE QUOTE "}),(0,o.jsx)("p",{className:"leading-relaxed mb-5 text-gray-600",children:"Contact our team for questions, feedback, or support"}),(0,o.jsxs)("form",{onSubmit:g,children:[(0,o.jsxs)("div",{className:"relative mb-4",children:[(0,o.jsx)("label",{htmlFor:"text",className:"leading-7 text-sm text-gray-600",children:"Name"}),(0,o.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),id:"name",name:"name",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,o.jsxs)("div",{className:"relative mb-4",children:[(0,o.jsx)("label",{htmlFor:"number",className:"leading-7 text-sm text-gray-600",children:"Phone"}),(0,o.jsx)("input",{type:"number",value:c,onChange:e=>u(e.target.value),id:"number",name:"number",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,o.jsxs)("div",{className:"relative mb-4",children:[(0,o.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),(0,o.jsx)("input",{type:"email",id:"email",value:n,onChange:e=>r(e.target.value),name:"email",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,o.jsxs)("div",{className:"relative mb-4",children:[(0,o.jsx)("label",{htmlFor:"subject",className:"leading-7 text-sm text-gray-600",children:"Subject"}),(0,o.jsx)("input",{type:"text",id:"subject",value:f,onChange:e=>p(e.target.value),name:"subject",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,o.jsxs)("div",{className:"relative mb-4",children:[(0,o.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"Message"}),(0,o.jsx)("textarea",{id:"message",value:i,onChange:e=>l(e.target.value),name:"message",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]}),(0,o.jsx)("button",{type:"submit",className:"text-white font-medium bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg",children:d?"Loading...":"Submit"})]}),(0,o.jsx)(a.Ix,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,style:{zIndex:2}})]})})]})})}},2870:function(){},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6006),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,a={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},474:function(e,t,n){"use strict";n.d(t,{Ix:function(){return x},Am:function(){return R}});var o=n(6006),s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(s&&(s+=" "),s+=o);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(o&&(o+=" "),o+=t);return o};let a=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||a(e);function u(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:m}=e,f=s?`${t}--${l}`:t,p=s?`${n}--${l}`:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=f.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}(e,u,r):u()};m||(c?t():(g.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[m]),o.createElement(o.Fragment,null,i)}}function d(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}let m={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},f=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},p={info:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(f,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:m,rtl:f,isIn:p,theme:g}=e,h=l||d&&0===m,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(y.transform=`scaleX(${m})`);let v=s("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),b=i(c)?c({rtl:f,type:r,defaultClassName:v}):s(v,c);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:b,style:y,[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]:d&&m<1?null:()=>{p&&a()}})}let b=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=function(e){let[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:m,onClick:f,closeOnClick:p}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",x),document.addEventListener("touchmove",T),document.addEventListener("touchend",x);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=g(t.nativeEvent),l.y=h(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(t){if(l.boundingRect){let{top:n,bottom:o,left:s,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=s&&l.x<=a&&l.y>=n&&l.y<=o?E():b()}}function b(){n(!0)}function E(){n(!1)}function T(n){let o=r.current;l.canDrag&&o&&(l.didMove=!0,t&&E(),l.x=g(n),l.y=h(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function x(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",x);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",b),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);let C={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return u&&d&&(C.onMouseEnter=E,C.onMouseLeave=b),p&&(C.onClick=e=>{f&&f(e),l.canCloseOnClick&&m()}),{playToast:b,pauseToast:E,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:C}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:m,hideProgressBar:f,closeToast:p,transition:b,position:E,className:T,style:x,bodyClassName:C,bodyStyle:_,progressClassName:N,progressStyle:I,updateId:w,role:O,progress:L,rtl:R,toastId:j,deleteToast:k,isIn:P,isLoading:S,iconOut:M,closeOnClick:$,theme:A}=e,B=s("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":$}),D=i(T)?T({rtl:R,position:E,type:m,defaultClassName:B}):s(B,T),F=!!L||!u,z={closeToast:p,type:m,theme:A},H=null;return!1===l||(H=i(l)?l(z):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,z):y(z)),o.createElement(b,{isIn:P,done:k,position:E,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:j,onClick:d,className:D,...r,style:x,ref:a},o.createElement("div",{...P&&{role:O},className:i(C)?C({type:m}):s("Toastify__toast-body",C),style:_},null!=M&&o.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},M),o.createElement("div",null,c)),H,o.createElement(v,{...w&&!F?{key:`pb-${w}`}:{},rtl:R,theme:A,delay:u,isRunning:t,isIn:P,closeToast:p,hide:f,type:m,style:I,className:N,controlledProgress:F,progress:L||0})))},E=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},T=u(E("bounce",!0)),x=(u(E("slide",!0)),u(E("zoom")),u(E("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:f}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),u=(0,o.useRef)(null),f=(0,o.useRef)(new Map).current,g=e=>-1!==n.indexOf(e),h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:e=>f.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function v(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function b(){let{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();T(e,t,n)}function E(e,n){var s,g;let{delay:y,staleId:E,...x}=n;if(!c(e)||!u.current||h.props.enableMultiContainer&&x.containerId!==h.props.containerId||f.has(x.toastId)&&null==x.updateId)return;let{toastId:C,updateId:_,data:N}=x,{props:I}=h,w=()=>v(C),O=null==_;O&&h.count++;let L={...I,style:I.toastStyle,key:h.toastKey++,...Object.fromEntries(Object.entries(x).filter(e=>{let[t,n]=e;return null!=n})),toastId:C,updateId:_,data:N,closeToast:w,isIn:!1,className:l(x.className||I.toastClassName),bodyClassName:l(x.bodyClassName||I.bodyClassName),progressClassName:l(x.progressClassName||I.progressClassName),autoClose:!x.isLoading&&(s=x.autoClose,g=I.autoClose,!1===s||a(s)&&s>0?s:g),deleteToast(){let e=d(f.get(C),"removed");f.delete(C),m.emit(4,e);let n=h.queue.length;if(h.count=null==C?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){let e=null==C?h.props.limit:1;if(1===n||1===e)h.displayedToast++,b();else{let t=e>n?n:e;h.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};L.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):r(l)||a(l)?c=l:s?c=p.spinner():n in p&&(c=p[n](u))),c}(L),i(x.onOpen)&&(L.onOpen=x.onOpen),i(x.onClose)&&(L.onClose=x.onClose),L.closeButton=I.closeButton,!1===x.closeButton||c(x.closeButton)?L.closeButton=x.closeButton:!0===x.closeButton&&(L.closeButton=!c(I.closeButton)||I.closeButton);let R=e;(0,o.isValidElement)(e)&&!r(e.type)?R=(0,o.cloneElement)(e,{closeToast:w,toastProps:L,data:N}):i(e)&&(R=e({closeToast:w,toastProps:L,data:N})),I.limit&&I.limit>0&&h.count>I.limit&&O?h.queue.push({toastContent:R,toastProps:L,staleId:E}):a(y)?setTimeout(()=>{T(R,L,E)},y):T(R,L,E)}function T(e,t,n){let{toastId:o}=t;n&&f.delete(n);let a={content:e,props:t};f.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),m.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(h.containerId=e.containerId,m.cancelEmit(3).on(0,E).on(1,e=>u.current&&v(e)).on(5,y).emit(2,h),()=>{f.clear(),m.emit(3,h)}),[]),(0,o.useEffect)(()=>{h.props=e,h.isToastActive=g,h.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:g}}(e),{className:g,style:h,rtl:y,containerId:v}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:v},n((e,t)=>{let n=t.length?{...h}:{...h,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return i(g)?g({position:e,rtl:y,defaultClassName:t}):s(t,l(g))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:a}=e;return o.createElement(b,{...a,isIn:f(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)}))}))}));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:T,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let C,_=new Map,N=[],I=1;function w(e,t){return _.size>0?m.emit(0,e,t):N.push({content:e,options:t}),t.toastId}function O(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||a(t.toastId))?t.toastId:""+I++}}function L(e){return(t,n)=>w(t,O(e,n))}function R(e,t){return w(e,O("default",t))}R.loading=(e,t)=>w(e,O("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,n){let o,{pending:s,error:a,success:l}=t;s&&(o=r(s)?R.loading(s,n):R.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,s)=>{if(null==t)return void R.dismiss(o);let a={type:e,...c,...n,data:s},i=r(t)?{render:t}:t;return o?R.update(o,{...a,...i}):R(i.render,{...a,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},R.success=L("success"),R.info=L("info"),R.error=L("error"),R.warning=L("warning"),R.warn=R.warning,R.dark=(e,t)=>w(e,O("default",{theme:"dark",...t})),R.dismiss=e=>{_.size>0?m.emit(1,e):N=N.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){return void 0===e&&(e={}),m.emit(5,e)},R.isActive=e=>{let t=!1;return _.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},R.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=_.get(n||C);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+I++};a.toastId!==e&&(a.staleId=e);let r=a.render||s;delete a.render,w(r,a)}},0)},R.done=e=>{R.update(e,{progress:1})},R.onChange=e=>(m.on(4,e),()=>{m.off(4,e)}),R.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},m.on(2,e=>{C=e.containerId||e,_.set(C,e),N.forEach(e=>{m.emit(0,e.content,e.options)}),N=[]}).on(3,e=>{_.delete(e.containerId||e),0===_.size&&m.off(0).off(1).off(5)})}}]);