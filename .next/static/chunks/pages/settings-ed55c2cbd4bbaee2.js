(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8356:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(2595)}])},121:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var s=t(5893),a=t(5675),r=t.n(a),i=t(1163);function o(e){var n=e.removeUrl,t=e.text,a=(0,i.useRouter)(),o=function(){a.push(n)};return(0,s.jsxs)("div",{className:"flex items-center justify-between header-main w-full border-b-2 px-4 py-2",children:[(0,s.jsxs)("button",{onClick:o,className:"flex items-center",children:[(0,s.jsx)(r(),{width:24,height:24,src:"/assets/icon/left-arrow.svg",alt:""}),(0,s.jsx)("p",{className:"ml-4",children:t})]}),(0,s.jsx)(r(),{width:80,height:40,src:"/assets/image/logo.svg"})]})}},2595:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var s=t(6042),a=t(9396),r=t(5893),i=t(121),o=t(9395),l=t(6627),u=t.n(l),c=t(7294),d=t(9669),h=t.n(d),p=t(129),m=t.n(p),f=t(1955),v=t(1163);function $(){var e=(0,v.useRouter)(),n=(0,c.useState)(),t=n[0],l=n[1],d=(0,c.useState)(!1),p=d[0],$=d[1],g=(0,c.useState)(!1),k=g[0],x=g[1],j=(0,c.useState)(!1),b=j[0],C=j[1],S=(0,c.useState)(""),w=S[0],_=S[1],y=(0,c.useState)(""),N=y[0],O=y[1],I=(0,c.useState)(""),D=I[0],M=I[1],P=(0,c.useState)(""),F=P[0],V=P[1],E=(0,c.useState)(""),L=E[0],B=E[1],z=(0,c.useState)(""),A=z[0],Z=z[1],q=(0,c.useState)(""),T=q[0],R=q[1],U=(0,c.useState)(""),X=U[0],Y=U[1],W=(0,c.useState)(""),G=W[0],H=W[1],J=(0,c.useState)(""),K=J[0],Q=J[1],ee=(0,c.useState)(""),en=ee[0],et=ee[1],es=(0,c.useState)(!1),ea=es[0],er=es[1],ei=(0,c.useState)(!1),eo=ei[0],el=ei[1],eu=(0,c.useState)(!1),ec=eu[0],ed=eu[1],eh=(0,c.useState)(!1),ep=eh[0],em=eh[1],ef=(0,c.useState)(!1),ev=ef[0],e$=ef[1],eg=(0,c.useState)(!1),ek=eg[0],ex=eg[1],ej=function(){e.push("/home")},eb=(0,c.useCallback)(function(e){_(e.target.value)},[]),eC=(0,c.useCallback)(function(e){O(e.target.value)},[]),eS=(0,c.useCallback)(function(e){M(e.target.value)},[]),ew=(0,c.useCallback)(function(e){V(e.target.value)},[]),e_=(0,c.useCallback)(function(e){Z(e.target.value)},[]),ey=(0,c.useCallback)(function(e){B(e.target.value)},[]),eN=(0,c.useCallback)(function(e){R(e.target.value)},[]),eO=(0,c.useCallback)(function(e){Y(e.target.value)},[]),eI=(0,c.useCallback)(function(e){H(e.target.value)},[]);(0,c.useCallback)(function(e){Q(e.target.value)},[]),(0,c.useCallback)(function(e){et(e.target.value)},[]),(0,c.useEffect)(function(){k||h()({method:"get",url:"https://api.jukte.kz/user/info",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8",token:f.Z.get("accessToken")}}).then(function(e){console.log(e),l(e.data),x(!0),$(!0),O(e.data.name),M(e.data.surname),V(e.data.iin),_(e.data.phone),B(e.data.company.name),Z(e.data.company.contacts.address),R(e.data.company.bin),Y(e.data.company.account),H(e.data.company.director.name),Q(e.data.company.director.surname),et(f.Z.get("carNumber"))}).catch(function(e){e&&x(!0)}),t&&(t.iin&&er(!0),t.company.name&&el(!0),t.company.bin&&ed(!0),t.company.account&&em(!0),t.company.director.name&&e$(!0),t.phone&&ex(!0))});var e0=function(){f.Z.set("carNumber",en),h()({method:"put",url:"https://api.jukte.kz/user/",data:m().stringify({personal:{name:N,surname:D,iin:F,phone:w.replace(/(-)|\+|\(|\)/g,"")},company:{name:L,account:X.toUpperCase(),bin:T,director:{name:G,surname:K,iin:"981103350587"},contacts:{address:A}},transport:{number:en}}),headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8",token:f.Z.get("accessToken")}}).then(function(e){e&&C(!0)})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{removeUrl:"/home",text:"На главную"}),(0,r.jsxs)("div",{className:"settings-main py-6 px-4",children:[(0,r.jsx)("h1",{children:"Настройки"}),(0,r.jsx)("hr",{className:"mt-4"}),(0,r.jsxs)("div",{className:"mt-6 p-4 rounded flex items-center bg-[#4F52FF]",children:[(0,r.jsx)("img",{src:"/assets/icon/warning.svg",alt:""}),(0,r.jsx)("div",{children:(0,r.jsxs)("p",{className:"ml-4 text-white",children:["Внимание! Данные реквизита компании и ИИН вводятся один раз! Просим вас вводить данные ",(0,r.jsx)("b",{children:"корректно"})]})})]}),(0,r.jsxs)("div",{className:"form-section mt-6 border-2 p-4",children:[(0,r.jsx)("h4",{children:"Личные данные"}),t&&(0,r.jsx)("form",{className:"flex flex-col mt-4 login-form",children:p?(0,r.jsxs)("div",{className:"mb-auto",children:[(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"name",value:"Введите ваше имя"})}),(0,r.jsx)(u(),{value:N,maskChar:null,onChange:eC,children:function(e){return(0,r.jsx)(o.oi,(0,a.Z)((0,s.Z)({},e),{id:"name",type:"text",placeholder:N,required:!0,sizing:"lg"}))}})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"surname",value:"Введите ваше фамилию"})}),(0,r.jsx)(u(),{value:D,maskChar:null,onChange:eS,children:function(e){return(0,r.jsx)(o.oi,(0,a.Z)((0,s.Z)({},e),{id:"surname",type:"text",placeholder:D,required:!0,sizing:"lg"}))}})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"iin",value:"Введите ИИН (для нерезидентов Казахстана номер документа)"})}),(0,r.jsx)(o.oi,{disabled:ea,onChange:ew,value:F,id:"iin",type:"tel",placeholder:F,required:!0,sizing:"lg"})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"phone",value:"Введите номер телефона"})}),(0,r.jsx)(u(),{value:w,maskChar:null,disabled:ek,onChange:eb,mask:"+7-(999)-999-99-99",children:function(e){return(0,r.jsx)(o.oi,(0,a.Z)((0,s.Z)({},e),{id:"phone",type:"tel",placeholder:"+7-777-777-77-77",required:!0,sizing:"lg"}))}})]})]}):(0,r.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(o.$j,{"aria-label":"Center-aligned spinner example"})})})})]}),(0,r.jsxs)("div",{className:"form-section mt-6 border-2 p-4",children:[(0,r.jsx)("h4",{children:"Реквизиты компании"}),t&&(0,r.jsx)("form",{className:"flex flex-col mt-4 login-form",children:p?(0,r.jsxs)("div",{className:"mb-auto",children:[(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"companyName",value:"Введите имя компании"})}),(0,r.jsx)(o.oi,{disabled:eo,onChange:ey,value:L,id:"companyName",type:"text",placeholder:L,required:!0,sizing:"lg"})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"companyAddress",value:"Юридически адрес компании"})}),(0,r.jsx)(o.oi,{onChange:e_,value:A,id:"companyAddress",type:"text",placeholder:A||"Город, адрес",required:!0,sizing:"lg"})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"bin",value:"Введите BIN компании"})}),(0,r.jsx)(o.oi,{value:T,disabled:ec,onChange:eN,id:"bin",type:"tel",placeholder:T,required:!0,sizing:"lg"})]}),(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"iban",value:"Введите номер счета (IBAN)"})}),(0,r.jsx)(o.oi,{disabled:ep,onChange:eO,value:X,id:"iban",type:"text",placeholder:X,required:!0,sizing:"lg"})]})]}):(0,r.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(o.$j,{"aria-label":"Center-aligned spinner example"})})})})]}),t&&"driver"===t.role&&(0,r.jsxs)("div",{className:"form-section mt-6 border-2 p-4",children:[(0,r.jsx)("h4",{children:"Данные машины"}),(0,r.jsx)("form",{className:"flex flex-col mt-4 login-form",children:p?(0,r.jsx)("div",{className:"mb-auto",children:(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("div",{className:"mb-2 block",children:(0,r.jsx)(o.__,{htmlFor:"carNumber",value:"Введите гос.номер машины"})}),(0,r.jsx)(o.oi,{id:"carNumber",type:"text",disabled:ev,placeholder:G,onChange:eI,value:G,required:!0,sizing:"lg"})]})}):(0,r.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(o.$j,{"aria-label":"Center-aligned spinner example"})})})})]}),(0,r.jsx)("button",{type:"button",className:"flex items-center settings-button px-4 mt-4",onClick:e0,children:(0,r.jsx)("p",{className:"w-full",children:"Сохранить"})})]}),(0,r.jsxs)(o.u_,{show:b,position:"center",children:[(0,r.jsx)(o.u_.Body,{children:(0,r.jsxs)("div",{className:"w-full success-container z-10",children:[(0,r.jsx)("p",{className:"text-center",children:"Данные успешно обновлены!"}),(0,r.jsx)("div",{className:"success-animation mt-6",children:(0,r.jsxs)("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[(0,r.jsx)("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),(0,r.jsx)("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})})]})}),(0,r.jsx)(o.u_.Footer,{children:(0,r.jsx)("button",{className:"w-full redirect-button",onClick:ej,children:"Перейти на главную страницу"})})]})]})}},6627:function(e,n,t){e.exports=t(6012)},6012:function(e,n,t){"use strict";var s,a=(s=t(7294))&&"object"==typeof s&&"default"in s?s.default:s,r=t(3935);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,s,a,r,i,o){if(!e){var l;if(void 0===n)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,s,a,r,i,o],c=0;(l=Error(n.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}};function u(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var s=e.createTextRange();s.collapse(!0),s.moveStart("character",n),s.moveEnd("character",t-n),s.select()}}var c={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function d(e,n,t){var s="",a="",r=null,i=[];if(void 0===n&&(n="_"),null==t&&(t=c),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var o=!1;return e.split("").forEach(function(e){o=!o&&"\\"===e||(o||!t[e]?(i.push(s.length),s.length===i.length-1&&(a+=e)):r=s.length+1,s+=e,!1)}),{maskChar:n,formatChars:t,prefix:a,mask:s,lastEditablePosition:r,permanents:i}}function h(e,n){return -1!==e.permanents.indexOf(n)}function p(e,n,t){var s=e.mask,a=e.formatChars;return!!t&&(h(e,n)?s[n]===t:RegExp(a[s[n]]).test(t))}function m(e,n){return n.split("").every(function(n,t){return h(e,t)||!p(e,t,n)})}function f(e,n){var t=e.maskChar,s=e.prefix;if(!t){for(;n.length>s.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=s.length,r=n.length;r>=s.length;r--){var i=n[r];if(!h(e,r)&&p(e,r,i)){a=r+1;break}}return a}function v(e,n){return f(e,n)===e.mask.length}function $(e,n){var t=e.maskChar,s=e.mask,a=e.prefix;if(!t){for((n=g(e,"",n,0)).length<a.length&&(n=a);n.length<s.length&&h(e,n.length);)n+=s[n.length];return n}if(n)return g(e,$(e,""),n,0);for(var r=0;r<s.length;r++)h(e,r)?n+=s[r]:n+=t;return n}function g(e,n,t,s){var a=e.mask,r=e.maskChar,i=e.prefix,o=t.split(""),l=v(e,n);return!r&&s>n.length&&(n+=a.slice(n.length,s)),o.every(function(t){for(var o,u,c,d;d=t,h(e,c=s)&&d!==a[c];){if(s>=n.length&&(n+=a[s]),o=t,u=s,r&&h(e,u)&&o===r)return!0;if(++s>=a.length)return!1}return!p(e,s,t)&&t!==r||(s<n.length?n=r||l||s<i.length?n.slice(0,s)+t+n.slice(s+1):$(e,n=n.slice(0,s)+t+n.slice(s)):r||(n+=t),++s<a.length)}),n}function k(e,n){for(var t=e.mask,s=n;s<t.length;++s)if(!h(e,s))return s;return null}function x(e){return e||0===e?e+"":""}function j(e){return"function"==typeof e}function b(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function C(e){return(b()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function S(e){(b()||clearTimeout)(e)}var w=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=C(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(S(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=r.findDOMNode(o(o(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=f(t.maskOptions,t.value),n=k(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,s){void 0===s&&(s={});var a=t.getInputDOMNode(),r=t.isFocused();a&&r&&(s.deferred||u(a,e,n),null!==t.selectionDeferId&&S(t.selectionDeferId),t.selectionDeferId=C(function(){t.selectionDeferId=null,u(a,e,n)}),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var s=document.selection.createRange();s.parentElement()===e&&(n=-s.moveStart("character",-e.value.length),t=-s.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,s=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:n,maskChar:s,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:r}},t.isInputAutofilled=function(e,n,s,a){var r=t.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(i){}return!t.focused||a.end<s.length&&n.end===e.length},t.onChange=function(e){var n,s,a,r,i,l,u,c,d,m,f,v,x,b,C,S,w,_,y,N,O=o(o(t)).beforePasteState,I=o(o(t)).previousSelection,D=t.props.beforeMaskedValueChange,M=t.getInputValue(),P=t.value,F=t.getSelection();t.isInputAutofilled(M,F,P,I)&&(P=$(t.maskOptions,""),I={start:0,end:0,length:0}),O&&(I=O.selection,P=O.value,F={start:I.start+M.length,end:I.start+M.length,length:0},M=P.slice(0,I.start)+M+P.slice(I.end),t.beforePasteState=null);var V=(n=t.maskOptions,s=M,a=F,r=P,i=I,x=n.mask,b=n.prefix,C=n.lastEditablePosition,S=s,w="",_=0,y=0,N=Math.min(i.start,a.start),a.end>i.start?y=(_=(l=n,u=w=S.slice(i.start,a.end),c=N,d=l.mask,m=l.maskChar,f=u.split(""),v=c,f.every(function(e){for(var n,t;t=e,h(l,n=c)&&t!==d[n];)if(++c>=d.length)return!1;return(p(l,c,e)||e===m)&&c++,c<d.length}),c-v))?i.length:0:S.length<r.length&&(y=r.length-S.length),S=r,y&&(1!==y||i.length||(N=i.start===a.start?k(n,a.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(n,a.start)),S=function(e,n,t,s){var a=t+s,r=e.maskChar,i=e.mask,o=e.prefix,l=n.split("");if(r)return l.map(function(n,s){return s<t||a<=s?n:h(e,s)?i[s]:r}).join("");for(var u=a;u<l.length;u++)h(e,u)&&(l[u]="");return t=Math.max(o.length,t),l.splice(t,a-t),$(e,n=l.join(""))}(n,S,N,y)),S=g(n,S,w,N),(N+=_)>=x.length?N=x.length:N<b.length&&!_?N=b.length:N>=b.length&&N<C&&_&&(N=k(n,N)),w||(w=null),{value:S=$(n,S),enteredString:w,selection:{start:N,end:N}}),E=V.enteredString,L=V.selection,B=V.value;if(j(D)){var z=D({value:B,selection:L},{value:P,selection:I},E,t.getBeforeMaskedValueChangeConfig());B=z.value,L=z.selection}t.setInputValue(B),j(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(L.start,L.end,{deferred:!0}):t.setSelection(L.start,L.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,s=t.maskOptions,a=s.mask,r=s.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)f(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var i=$(t.maskOptions,r),o=$(t.maskOptions,i),l=f(t.maskOptions,o),u=k(t.maskOptions,l),c={start:u,end:u};if(j(n)){var d=n({value:o,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());o=d.value,c=d.selection}var h=o!==t.getInputValue();h&&t.setInputValue(o),h&&j(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}j(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,s=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,s&&!t.props.alwaysShowMask&&m(t.maskOptions,t.value)){var a="";j(n)&&(a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var r=a!==t.getInputValue();r&&t.setInputValue(a),r&&j(t.props.onChange)&&t.props.onChange(e)}j(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();var n=function e(n){if(document.removeEventListener("mouseup",e),t.focused){var s,a=Math.max(Math.abs(n.clientX-t.mouseDownX),Math.abs(n.clientY-t.mouseDownY)),r=(new Date).getTime()-t.mouseDownTime;(a<=10&&r<=200||a<=5&&r<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",n)}j(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){j(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&j(t.props.inputRef)&&t.props.inputRef(e)};var s=n.mask,a=n.maskChar,i=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,v=n.defaultValue,b=n.value;t.maskOptions=d(s,a,i),null==v&&(v=""),null==b&&(b=v);var w=x(b);if(t.maskOptions.mask&&(l||w)&&(w=$(t.maskOptions,w),j(c))){var _=n.value;null==n.value&&(_=v),w=c({value:w,selection:null},{value:_=x(_),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=w,t}t=n,s=e,t.prototype=Object.create(s.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),s=0;s<t.length;s++){var a=t[s],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(t.prototype.constructor=t,s);var t,s,c=n.prototype;return c.componentDidMount=function(){var e;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=navigator.userAgent,/windows/i.test(e)&&/phone/i.test(e)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},c.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,s=n.alwaysShowMask,a=n.mask,r=n.maskChar,i=n.formatChars,o=this.maskOptions,l=s||this.isFocused(),u=null!=this.props.value,c=u?x(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=d(a,r,i),this.maskOptions.mask){!o.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==o.mask;if(o.mask||u||(c=this.getInputValue()),(p||this.maskOptions.mask&&(c||l))&&(c=$(this.maskOptions,c)),p){var g=f(this.maskOptions,c);(null===h||g<h)&&(h=v(this.maskOptions,c)?g:k(this.maskOptions,g))}!this.maskOptions.mask||!m(this.maskOptions,c)||l||u&&this.props.value||(c="");var b={start:h,end:h};if(j(t)){var C=t({value:c,selection:b},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=C.value,b=C.selection}this.value=c;var S=this.getInputValue()!==this.value;S?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var w=!1;null!=b.start&&null!=b.end&&(w=!e||e.start!==b.start||e.end!==b.end),(w||S)&&this.setSelection(b.start,b.end)}else o.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},c.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&S(this.selectionDeferId),this.stopSaveSelectionLoop()},c.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),s=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)0<=n.indexOf(t=r[s])||(a[t]=e[t]);return a}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){j(t)||l(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],o=i({},s);r.forEach(function(e){return delete o[e]}),e=t(o),r.filter(function(n){return null!=e.props[n]&&e.props[n]!==s[n]}).length&&l(!1)}else e=a.createElement("input",i({ref:this.handleRef},s));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(s.disabled||s.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=s.value&&(u.value=this.value)),e=a.cloneElement(e,u)},n}(a.Component);e.exports=w},4654:function(){},9396:function(e,n,t){"use strict";function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t.push.apply(t,s)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}t.d(n,{Z:function(){return s}})}},function(e){e.O(0,[556,873,656,129,774,888,179],function(){return e(e.s=8356)}),_N_E=e.O()}]);
//# sourceMappingURL=settings-ed55c2cbd4bbaee2.js.map